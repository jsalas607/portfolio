#!/usr/bin/env python3
"""Webhook de auto-deploy para el portafolio.

- POST /webhook : recibe el push de GitHub, verifica la firma HMAC y, si es
  un push a `master`, dispara el deploy (git pull + rebuild) en segundo plano.
- GET  /deploy  : página de estado del último despliegue (estilo Manhattan).

Corre dentro de un contenedor con el socket de Docker y el repo montados.
"""

import hashlib
import hmac
import html
import json
import os
import subprocess
import threading
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

REPO = os.environ.get("REPO_DIR", "/repo")
STATE = "/state/status.json"
SECRET = os.environ.get("WEBHOOK_SECRET", "").encode()
BRANCH = os.environ.get("DEPLOY_BRANCH", "master")
PROJECT = "portafolio"
PORT = 9000

_lock = threading.Lock()


def git(*args: str) -> str:
    return subprocess.check_output(["git", "-C", REPO, *args], text=True).strip()


def compose(*args: str, check: bool = True):
    return subprocess.run(
        ["docker", "compose", "-p", PROJECT, "-f", f"{REPO}/docker-compose.yml", *args],
        check=check,
    )


def read_status():
    try:
        with open(STATE) as f:
            return json.load(f)
    except Exception:
        return None


def write_status(data: dict):
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    with open(STATE, "w") as f:
        json.dump(data, f)


def run_deploy():
    """Pull + rebuild. Se ejecuta en un hilo aparte."""
    with _lock:
        ok, error = True, ""
        try:
            subprocess.run(["git", "config", "--global", "--add", "safe.directory", REPO], check=False)
            subprocess.run(["git", "-C", REPO, "fetch", "origin", BRANCH], check=True)
            subprocess.run(["git", "-C", REPO, "reset", "--hard", f"origin/{BRANCH}"], check=True)
            compose("up", "-d", "--build", "web")
            # recrear Caddy toma los cambios del Caddyfile (bind-mount por inodo:
            # un reload leería el inodo viejo tras un git reset)
            compose("up", "-d", "--force-recreate", "caddy")
        except subprocess.CalledProcessError as e:
            ok, error = False, str(e)

        try:
            commit = git("rev-parse", "--short", "HEAD")
            message = git("log", "-1", "--pretty=%s")
            author = git("log", "-1", "--pretty=%an")
        except Exception:
            commit = message = author = "—"

        write_status({
            "ok": ok,
            "commit": commit,
            "message": message,
            "author": author,
            "time": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
            "error": error,
        })


def valid_signature(signature: str, body: bytes) -> bool:
    if not SECRET or not signature or not signature.startswith("sha256="):
        return False
    expected = "sha256=" + hmac.new(SECRET, body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(signature, expected)


def render_page() -> bytes:
    s = read_status()
    if s is None:
        badge_bg, badge = "#3f3f46", "⏳ ESPERANDO PRIMER DEPLOY"
        commit = message = author = time = "—"
    elif s.get("ok"):
        badge_bg, badge = "#16a34a", "✅ DEPLOY OK · SITIO ARRIBA"
        commit, message, author, time = s["commit"], s["message"], s["author"], s["time"]
    else:
        badge_bg, badge = "#dc2626", "❌ DEPLOY FALLÓ"
        commit, message, author, time = s["commit"], s["message"], s["author"], s["time"]

    e = html.escape
    page = f"""<!doctype html>
<html lang="es"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="15">
<title>Deploy · Portafolio</title>
<style>
  body{{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:#0a0e18;color:#e5e7eb;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}}
  .card{{width:min(620px,92vw);background:#111827;border:1px solid #1f2937;border-radius:18px;padding:34px 38px}}
  h1{{margin:0;font-size:20px}}.sub{{color:#9ca3af;font-size:14px;margin:4px 0 24px}}
  .badge{{display:inline-block;background:{badge_bg};color:#fff;font-weight:600;font-size:15px;
    padding:12px 22px;border-radius:999px}}
  .row{{display:flex;justify-content:space-between;gap:16px;padding:16px 0;border-top:1px solid #1f2937;font-size:15px}}
  .row:first-of-type{{margin-top:24px}}.k{{color:#9ca3af}}.v{{text-align:right;font-weight:500}}
  .chip{{background:#1f2937;padding:3px 10px;border-radius:8px;font-family:ui-monospace,monospace;font-size:13px}}
  .foot{{color:#6b7280;font-size:12px;text-align:center;margin-top:22px}}
</style></head>
<body><div class="card">
  <h1>🏠 Portafolio · John Salas</h1>
  <p class="sub">Estado del último despliegue automático</p>
  <span class="badge">{e(badge)}</span>
  <div class="row"><span class="k">Commit</span><span class="v"><span class="chip">{e(commit)}</span></span></div>
  <div class="row"><span class="k">Cambio</span><span class="v">{e(message)}</span></div>
  <div class="row"><span class="k">Autor</span><span class="v">{e(author)}</span></div>
  <div class="row"><span class="k">Desplegado</span><span class="v">{e(time)}</span></div>
  <p class="foot">Se actualiza solo cada 15s · johnsalas.online</p>
</div></body></html>"""
    return page.encode()


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):  # silencioso
        pass

    def _send(self, code: int, body: bytes = b"", ctype: str = "text/plain; charset=utf-8"):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if body:
            self.wfile.write(body)

    def do_GET(self):
        if self.path.rstrip("/") in ("/deploy", ""):
            self._send(200, render_page(), "text/html; charset=utf-8")
        else:
            self._send(404, b"not found")

    def do_POST(self):
        if self.path.rstrip("/") != "/webhook":
            self._send(404, b"not found")
            return
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        if not valid_signature(self.headers.get("X-Hub-Signature-256", ""), body):
            self._send(401, b"firma invalida")
            return
        event = self.headers.get("X-GitHub-Event", "")
        if event == "ping":
            self._send(200, b"pong")
            return
        if event == "push":
            try:
                ref = json.loads(body).get("ref", "")
            except Exception:
                ref = ""
            if ref == f"refs/heads/{BRANCH}":
                threading.Thread(target=run_deploy, daemon=True).start()
                self._send(202, b"deploy iniciado")
            else:
                self._send(200, b"ignorado: otra rama")
            return
        self._send(204)


if __name__ == "__main__":
    print(f"webhook escuchando en :{PORT} (rama {BRANCH})", flush=True)
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
