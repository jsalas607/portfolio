"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { perfil } from "@/data/perfil";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.21, 0.47, 0.32, 0.98] as const;
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Resplandor verde sutil de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 pb-20 pt-36 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="min-w-0">
          {perfil.disponible ? (
            <motion.p
              {...rise(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-strong"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponible para trabajar
            </motion.p>
          ) : null}

          <motion.h1
            {...rise(0.08)}
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            {perfil.nombre}
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-3 font-mono text-lg text-accent-strong sm:text-xl">
            {perfil.rol}
          </motion.p>

          <motion.p {...rise(0.24)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {perfil.tagline}
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#proyectos">
                Ver proyectos <ArrowRight />
              </a>
            </Button>
            {perfil.cv ? (
              <Button asChild variant="outline">
                <a href={perfil.cv} download>
                  <Download /> Descargar CV
                </a>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <a href="#contacto">
                  <Mail /> Contactarme
                </a>
              </Button>
            )}
            <div className="ml-1 flex items-center gap-1">
              <a
                href={perfil.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              {perfil.linkedin ? (
                <a
                  href={perfil.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative min-w-0"
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="h-3 w-3 rounded-full bg-border" />
        <span className="ml-2 font-mono text-xs text-subtle">developer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-subtle">const</span>{" "}
          <span className="text-foreground">dev</span> <span className="text-subtle">=</span>{" "}
          <span className="text-subtle">{"{"}</span>
          {"\n"}
          {"  "}rol<span className="text-subtle">:</span>{" "}
          <span className="text-accent-strong">&quot;Full Stack&quot;</span>
          <span className="text-subtle">,</span>
          {"\n"}
          {"  "}stack<span className="text-subtle">:</span>{" "}
          <span className="text-subtle">[</span>
          <span className="text-accent-strong">&quot;React&quot;</span>
          <span className="text-subtle">,</span>{" "}
          <span className="text-accent-strong">&quot;Next.js&quot;</span>
          <span className="text-subtle">,</span>{" "}
          <span className="text-accent-strong">&quot;FastAPI&quot;</span>
          <span className="text-subtle">],</span>
          {"\n"}
          {"  "}ubicacion<span className="text-subtle">:</span>{" "}
          <span className="text-accent-strong">&quot;Bogotá, CO&quot;</span>
          <span className="text-subtle">,</span>
          {"\n"}
          {"  "}disponible<span className="text-subtle">:</span>{" "}
          <span className="text-accent">true</span>
          <span className="text-subtle">,</span>
          {"\n"}
          <span className="text-subtle">{"};"}</span>
        </code>
      </pre>
    </div>
  );
}
