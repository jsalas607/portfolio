"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];
  const initials = p.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="sobre" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <Reveal className="space-y-4">
          {p.bio.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <div className="!mt-8 rounded-xl border border-border bg-card-2 p-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <Sparkles className="size-4 text-accent-strong" />
              {t.about.learningNow}
            </p>
            <ul className="flex flex-wrap gap-2">
              {p.learning.map((item) => (
                <li key={item} className="rounded-md bg-card px-2.5 py-1 font-mono text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} variant="blur">
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-accent/10 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card-2">
              {p.photo ? (
                <Image src={p.photo} alt={p.name} fill sizes="300px" className="object-cover" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-2xl font-semibold text-accent-strong">
                    {initials}
                  </span>
                  <span className="px-6 font-mono text-xs text-subtle">{t.about.photoPlaceholder}</span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
