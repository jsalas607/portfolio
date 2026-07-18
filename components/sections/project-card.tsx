import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Gamepad2,
  Server,
  Smartphone,
  Code2,
  KeyRound,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import type { Proyecto } from "@/data/proyectos";
import { Badge } from "@/components/ui/badge";

const iconoPorCategoria: Record<string, LucideIcon> = {
  "Full-stack": Server,
  "Frontend web": Gamepad2,
  "Móvil": Smartphone,
};

export function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  const Icono = iconoPorCategoria[proyecto.categoria] ?? Code2;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {/* Preview visual (placeholder mientras no haya screenshot real) */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-card-2">
        {proyecto.imagen ? (
          <Image
            src={proyecto.imagen}
            alt={`Vista de ${proyecto.titulo}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
            <Icono className="size-12 text-subtle transition-colors duration-300 group-hover:text-accent-strong" strokeWidth={1.25} />
          </div>
        )}
        {proyecto.destacado ? (
          <span className="absolute left-3 top-3 rounded-md border border-accent/25 bg-background/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-strong backdrop-blur">
            Destacado
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-subtle">{proyecto.categoria}</span>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-strong">
          {proyecto.titulo}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{proyecto.descripcion}</p>

        <p className="mt-4 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-muted">
          {proyecto.problema}
        </p>

        {proyecto.demoAcceso ? (
          <div className="mt-5 rounded-lg border border-accent/25 bg-accent/5 p-3.5">
            <p className="flex items-center gap-1.5 text-xs font-medium text-accent-strong">
              <KeyRound className="size-3.5" />
              Probala vos mismo
            </p>
            <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
              <div className="flex gap-1.5">
                <dt className="text-subtle">usuario:</dt>
                <dd className="text-foreground">{proyecto.demoAcceso.usuario}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="text-subtle">clave:</dt>
                <dd className="text-foreground">{proyecto.demoAcceso.clave}</dd>
              </div>
            </dl>
            <p className="mt-2.5 flex gap-1.5 text-xs leading-relaxed text-muted">
              <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-subtle" />
              {proyecto.demoAcceso.aviso}
            </p>
          </div>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2">
          {proyecto.stack.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4 pt-1">
          {proyecto.repo ? (
            <a
              href={proyecto.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-strong"
            >
              <GithubIcon className="size-4" /> Código
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-subtle">Código: próximamente</span>
          )}
          {proyecto.demo ? (
            <a
              href={proyecto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-strong"
            >
              <ArrowUpRight className="size-4" /> Demo
            </a>
          ) : null}
          {proyecto.apk ? (
            <a
              href={proyecto.apk}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:brightness-110"
            >
              <Download className="size-4" /> Descargar APK
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
