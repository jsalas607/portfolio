import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Jugar · Piedra, Papel, Tijera, Lagarto, Spock",
  description:
    "Jugá al clásico ampliado directamente acá — modo un jugador y multijugador. Hecho con Next.js, React y Firebase.",
};

export default function JuegoPage() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>
        <span className="hidden font-mono text-xs text-subtle sm:inline">
          Piedra · Papel · Tijera · Lagarto · Spock
        </span>
      </div>
      <iframe
        src="https://juego.johnsalas.online"
        title="Piedra, Papel, Tijera, Lagarto, Spock"
        className="w-full flex-1"
        style={{ border: 0 }}
        allow="clipboard-write"
      />
    </div>
  );
}
