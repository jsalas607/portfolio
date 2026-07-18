"use client";

import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/stack";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Certificates() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const items = certificates[lang];

  return (
    <section id="certificados" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow={t.certificates.eyebrow} title={t.certificates.title} />

      {items.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <Award className="size-6 text-accent-strong" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.year}
                </p>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong hover:underline"
                  >
                    <ExternalLink className="size-3.5" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-card-2/40 px-6 py-14 text-center">
            <Award className="size-8 text-subtle" strokeWidth={1.25} />
            <p className="max-w-md text-sm leading-relaxed text-muted">{t.certificates.empty}</p>
          </div>
        </Reveal>
      )}
    </section>
  );
}
