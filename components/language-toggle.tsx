"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { lang, toggle, mounted } = useLanguage();

  // El código muestra el idioma AL QUE se cambia. Hasta montar va vacío para
  // que server y cliente coincidan (mismo guard que el toggle de tema).
  const code = !mounted ? "" : lang === "es" ? "EN" : "ES";
  const label = !mounted
    ? "Cambiar idioma"
    : lang === "es"
      ? "Switch to English"
      : "Cambiar a español";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border px-2.5 text-muted transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Languages className="size-4" />
      <span className="w-4 text-left font-mono text-xs font-medium">{code}</span>
    </button>
  );
}
