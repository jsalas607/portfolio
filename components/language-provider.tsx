"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  // El idioma NO se persiste: siempre arranca en el default ("en") y el toggle
  // solo vive en memoria durante la sesión. Limpiamos cualquier "lang" viejo.
  useEffect(() => {
    localStorage.removeItem("lang");
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, mounted }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  return ctx;
}
