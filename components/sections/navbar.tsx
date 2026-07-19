"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", key: "home" },
  { href: "#sobre", key: "about" },
  { href: "#tecnologias", key: "tech" },
  { href: "#proyectos", key: "projects" },
  { href: "#habilidades", key: "skills" },
  { href: "#contacto", key: "contact" },
] as const;

export function Navbar() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El menú móvil se cierra con Escape (además del backdrop, ver abajo).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          {profile[lang].name.split(" ")[0]}
          <span className="text-accent-strong">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-border" aria-hidden />
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t.menuClose : t.menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      ) : null}

      {open ? (
        <ul id="menu-movil" className="relative z-50 border-t border-border bg-background px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
