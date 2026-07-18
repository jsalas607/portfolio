"use client";

import type { ElementType } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];

  const links = [
    { icon: Mail as ElementType, href: `mailto:${p.email}`, label: "Email", external: false },
    { icon: GithubIcon as ElementType, href: p.github, label: "GitHub", external: true },
    ...(p.linkedin
      ? [{ icon: LinkedinIcon as ElementType, href: p.linkedin, label: "LinkedIn", external: true }]
      : []),
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-foreground">
            {p.name.split(" ")[0]}
            <span className="text-accent-strong">.dev</span>
          </p>
          <p className="mt-1 text-xs text-subtle">
            {t.footer.builtWith} ·{" "}
            <a
              href="https://github.com/jsalas607/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-accent-strong"
            >
              {t.footer.code}
            </a>{" "}
            · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
              >
                <Icon className="size-[18px]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
