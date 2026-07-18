import { proyectos } from "@/data/proyectos";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Proyectos"
        titulo="Cosas que construí de punta a punta"
        descripcion="Tres proyectos completos: uno full-stack, uno de frontend web y una app móvil. Cada uno resuelve un problema real."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto, i) => (
          <Reveal key={proyecto.id} delay={i * 0.08} as="div" className="h-full">
            <ProjectCard proyecto={proyecto} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
