# Portfolio — John Salas

My personal portfolio. A responsive single-page site with light/dark mode and
subtle animations, built to showcase my work as a full-stack developer.

### 🔗 Live: **[johnsalas.online](https://johnsalas.online)**

---

## Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**-style components (accessible, built with `class-variance-authority`)
- **Framer Motion** — entrance animations and micro-interactions
- **next-themes** — light/dark mode
- **lucide-react** — icons

## What's inside

- Minimalist design (black / white / gray with a green accent)
- Sections: hero, about, tech stack, projects, experience, skills and contact
- Fully responsive (mobile, tablet, desktop) and accessible (ARIA, visible focus, `prefers-reduced-motion`)
- SEO: metadata, Open Graph and Twitter Cards
- Content is centralized and typed under `data/`

> The UI copy is in Spanish (my audience), while the codebase is in English.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm start       # serve the build
npm run lint    # linter
```

## Structure

```
app/                 # App Router (layout, page, global styles)
components/
  sections/          # page sections (Hero, About, Projects, …)
  ui/                # shadcn/ui-style primitives (Button, Card, …)
  motion/            # animation helpers
data/                # typed content (profile, projects, stack)
lib/                 # utilities (cn)
```

## Deployment

I deploy it to a VPS with **Docker + Caddy** (reverse proxy with automatic HTTPS).
Every push to `master` triggers a **webhook** running on the server itself
(`deploy/webhook.py`): it runs `git pull` + rebuild and publishes the status of
the latest deploy at **[/deploy](https://johnsalas.online/deploy)**. See [`DEPLOY.md`](./DEPLOY.md).

---

Built by me, [John Salas](https://github.com/jsalas607) · [LinkedIn](https://www.linkedin.com/in/jsalasparra/)
