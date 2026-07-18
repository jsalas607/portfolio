import { experience } from "@/data/stack";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Trayectoria"
        title="Experiencia y proyectos"
        description="Mi experiencia viene de trabajo freelance y proyectos propios, construidos de principio a fin."
      />

      <ol className="relative border-l border-border">
        {experience.map((item, i) => (
          <li key={item.title} className="relative mb-10 pl-6 last:mb-0">
            {/* Punto del timeline: hijo directo del <li> (no del elemento animado),
                anclado a la línea del borde izquierdo. */}
            <span
              aria-hidden
              className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent"
            />
            <Reveal delay={i * 0.08}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <span className="font-mono text-xs text-subtle">{item.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-accent-strong">
                {item.context}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
