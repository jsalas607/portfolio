# Desplegar el portafolio en un VPS (Docker + Caddy)

Stack: la app Next.js corre como contenedor (`web`), y **Caddy** hace de proxy inverso
con **HTTPS automático** (Let's Encrypt). Todo con `docker compose`.

## 0. Antes de empezar (tu parte)
- Un VPS con **Ubuntu 24.04** y acceso SSH.
- Un **dominio** comprado.
- El código del portafolio subido a un repo de GitHub (o lo copiamos por SSH).

## 1. DNS: apuntar el dominio al VPS
En el panel de tu dominio, creá dos registros **A** hacia la IP del VPS:

| Tipo | Nombre | Valor            |
|------|--------|------------------|
| A    | `@`    | IP.DEL.VPS       |
| A    | `www`  | IP.DEL.VPS       |

(La propagación puede tardar de minutos a un par de horas.)

## 2. En el VPS: instalar Docker
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER   # después cerrá y reabrí la sesión SSH
```

## 3. Firewall (dejar pasar SSH + web)
```bash
sudo ufw allow 22 && sudo ufw allow 80 && sudo ufw allow 443
sudo ufw --force enable
```

## 4. Traer el código
```bash
git clone https://github.com/jsalas607/<repo-del-portafolio>.git portafolio
cd portafolio
```
(o subimos los archivos por `scp`/`rsync` si no está en GitHub)

## 5. Poner tu dominio en el Caddyfile
Editá `Caddyfile` y reemplazá `TU_DOMINIO` por tu dominio real (las dos veces).

## 6. Levantar
```bash
docker compose up -d --build
```
Caddy pide el certificado HTTPS solo la primera vez. En ~1 min:
**https://tudominio.com** funcionando.

## Comandos útiles
```bash
docker compose logs -f          # ver logs
docker compose up -d --build    # redesplegar tras cambios
docker compose down             # apagar
```

## Nota sobre los APK (~100 MB)
Van dentro de la imagen porque están en `public/`. Funciona, pero engorda la imagen.
Si querés adelgazarla, se pueden mover a **GitHub Releases** y enlazar desde
`data/proyectos.ts` en vez de servirlos desde `public/`.
