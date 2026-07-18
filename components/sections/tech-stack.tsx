import { techStack } from "@/data/stack";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  return (
    <section id="tecnologias" className="scroll-mt-20 border-y border-border bg-card-2/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          eyebrow="Tecnologías"
          title="Mi stack de trabajo"
          description="Herramientas con las que construyo, agrupadas por dónde las uso en una aplicación."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
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
