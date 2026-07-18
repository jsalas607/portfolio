"use client";

import { useState, type ElementType, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(t.contact.subject(name));
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const links = [
    { icon: Mail as ElementType, label: p.email, href: `mailto:${p.email}`, external: false },
    { icon: GithubIcon as ElementType, label: "GitHub", href: p.github, external: true },
    ...(p.linkedin
      ? [{ icon: LinkedinIcon as ElementType, label: "LinkedIn", href: p.linkedin, external: true }]
      : []),
  ];

  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  {t.contact.name}
                </label>
                <Input id="name" name="name" required placeholder={t.contact.namePlaceholder} autoComplete="name" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                {t.contact.message}
              </label>
              <Textarea id="message" name="message" required placeholder={t.contact.messagePlaceholder} />
            </div>
            <Button type="submit">
              {t.contact.send} <Send />
            </Button>
            {sent ? (
              <p className="text-sm text-accent-strong" role="status">
                {t.contact.sent}
              </p>
            ) : (
              <p className="text-xs text-subtle">{t.contact.hint}</p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card-2/50 p-6">
            <p className="text-sm text-muted">{t.contact.findMe}</p>
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
              {p.location} · {p.available ? t.contact.available : t.contact.notAvailable}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
