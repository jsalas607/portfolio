"use client";

import { skills } from "@/data/stack";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Skills() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <section id="habilidades" className="scroll-mt-20 border-y border-border bg-card-2/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills[lang].map((skill, i) => (
            <Reveal key={skill.area} delay={i * 0.05}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-foreground">{skill.area}</span>
                <span className="shrink-0 font-mono text-xs text-subtle">{skill.label}</span>
              </div>
              <div className="mt-2 flex gap-1.5" role="img" aria-label={`${t.skills.levelAria}: ${skill.label}`}>
                {[1, 2, 3].map((seg) => (
                  <span
                    key={seg}
                    className={cn(
                      "h-1.5 flex-1 rounded-full",
                      seg <= skill.level ? "bg-accent" : "bg-border",
                    )}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
