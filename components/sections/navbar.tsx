"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { perfil } from "@/data/perfil";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const enlaces = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          {perfil.nombre.split(" ")[0]}
          <span className="text-accent-strong">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {e.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-foreground"
          >
            {abierto ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {abierto ? (
        <ul id="menu-movil" className="border-t border-border bg-background px-6 pb-4 md:hidden">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                onClick={() => setAbierto(false)}
                className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
