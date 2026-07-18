"use client";

import { useState, type ElementType, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { perfil } from "@/data/perfil";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const subject = encodeURIComponent(`Contacto de ${nombre} desde el portafolio`);
    const body = encodeURIComponent(`${mensaje}\n\n— ${nombre} (${email})`);
    window.location.href = `mailto:${perfil.email}?subject=${subject}&body=${body}`;
    setEnviado(true);
  }

  const enlaces = [
    { icon: Mail as ElementType, label: perfil.email, href: `mailto:${perfil.email}`, externo: false },
    { icon: GithubIcon as ElementType, label: "GitHub", href: perfil.github, externo: true },
    ...(perfil.linkedin
      ? [{ icon: LinkedinIcon as ElementType, label: "LinkedIn", href: perfil.linkedin, externo: true }]
      : []),
  ];

  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Contacto"
        titulo="Hablemos"
        descripcion="Estoy abierto a proyectos freelance y nuevas oportunidades. Si querés trabajar conmigo o ver más de mi código, escribime."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                  Nombre
                </label>
                <Input id="nombre" name="nombre" required placeholder="Tu nombre" autoComplete="name" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input id="email" name="email" type="email" required placeholder="tu@email.com" autoComplete="email" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                Mensaje
              </label>
              <Textarea id="mensaje" name="mensaje" required placeholder="Contame en qué puedo ayudarte…" />
            </div>
            <Button type="submit">
              Enviar mensaje <Send />
            </Button>
            {enviado ? (
              <p className="text-sm text-accent-strong" role="status">
                Se abrió tu cliente de correo con el mensaje listo para enviar. ¡Gracias!
              </p>
            ) : (
              <p className="text-xs text-subtle">Se abrirá tu cliente de correo con el mensaje ya redactado.</p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card-2/50 p-6">
            <p className="text-sm text-muted">También podés encontrarme en:</p>
            <ul className="mt-4 space-y-1">
              {enlaces.map((e) => {
                const Icono = e.icon;
                return (
                  <li key={e.label}>
                    <a
                      href={e.href}
                      {...(e.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-card hover:text-accent-strong"
                    >
                      <Icono className="size-4 text-muted" />
                      <span className="font-mono text-[13px]">{e.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 border-t border-border pt-4 font-mono text-xs text-subtle">
              {perfil.ubicacion} · {perfil.disponible ? "Disponible para trabajar" : "No disponible"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
