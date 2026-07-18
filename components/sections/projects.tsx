"use client";

import { projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <section id="proyectos" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects[lang].map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08} as="div" className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
