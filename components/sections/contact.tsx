"use client";

import { useState, type ElementType, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Contacto de ${name} desde el portafolio`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const links = [
    { icon: Mail as ElementType, label: profile.email, href: `mailto:${profile.email}`, external: false },
    { icon: GithubIcon as ElementType, label: "GitHub", href: profile.github, external: true },
    ...(profile.linkedin
      ? [{ icon: LinkedinIcon as ElementType, label: "LinkedIn", href: profile.linkedin, external: true }]
      : []),
  ];

  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Contacto"
        title="Hablemos"
        description="Estoy abierto a proyectos freelance y nuevas oportunidades. Si querés trabajar conmigo o ver más de mi código, escribime."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nombre
                </label>
                <Input id="name" name="name" required placeholder="Tu nombre" autoComplete="name" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input id="email" name="email" type="email" required placeholder="tu@email.com" autoComplete="email" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensaje
              </label>
              <Textarea id="message" name="message" required placeholder="Contame en qué puedo ayudarte…" />
            </div>
            <Button type="submit">
              Enviar mensaje <Send />
            </Button>
            {sent ? (
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
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-card hover:text-accent-strong"
                    >
                      <Icon className="size-4 text-muted" />
                      <span className="font-mono text-[13px]">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 border-t border-border pt-4 font-mono text-xs text-subtle">
              {profile.location} · {profile.available ? "Disponible para trabajar" : "No disponible"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
