import type { ElementType } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { perfil } from "@/data/perfil";

export function Footer() {
  const enlaces = [
    { icon: Mail as ElementType, href: `mailto:${perfil.email}`, label: "Email", externo: false },
    { icon: GithubIcon as ElementType, href: perfil.github, label: "GitHub", externo: true },
    ...(perfil.linkedin
      ? [{ icon: LinkedinIcon as ElementType, href: perfil.linkedin, label: "LinkedIn", externo: true }]
      : []),
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-foreground">
            {perfil.nombre.split(" ")[0]}
            <span className="text-accent-strong">.dev</span>
          </p>
          <p className="mt-1 text-xs text-subtle">
            Construido con Next.js y Tailwind CSS · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {enlaces.map((e) => {
            const Icono = e.icon;
            return (
              <a
                key={e.label}
                href={e.href}
                aria-label={e.label}
                {...(e.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
              >
                <Icono className="size-[18px]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
