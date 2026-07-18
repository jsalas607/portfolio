"use client";

import { techStack } from "@/data/stack";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <section id="tecnologias" className="scroll-mt-20 border-y border-border bg-card-2/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} description={t.tech.description} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack[lang].map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-strong">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
