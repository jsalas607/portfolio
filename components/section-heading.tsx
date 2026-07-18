import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  titulo: string;
  descripcion?: string;
}

export function SectionHeading({ eyebrow, titulo, descripcion }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
        <span aria-hidden className="h-px w-8 bg-accent/50" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {titulo}
      </h2>
      {descripcion ? <p className="mt-4 text-base leading-relaxed text-muted">{descripcion}</p> : null}
    </Reveal>
  );
}
