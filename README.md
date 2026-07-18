# Portafolio — John Salas

Portafolio personal de **John Salas**, desarrollador full-stack junior.
Sitio de una sola página, responsive, con modo claro/oscuro y animaciones sutiles.

### 🔗 En vivo: **[johnsalas.online](https://johnsalas.online)**

---

## Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Componentes estilo **shadcn/ui** (accesibles, con `class-variance-authority`)
- **Framer Motion** — animaciones de entrada y microinteracciones
- **next-themes** — modo claro/oscuro
- **lucide-react** — iconos

## Características

- Diseño minimalista (negro / blanco / gris + acento verde), pensado para reclutadores
- Secciones: hero, sobre mí, stack, proyectos, experiencia, habilidades, certificados y contacto
- Totalmente responsive (móvil, tablet, desktop) y accesible (ARIA, foco visible, `prefers-reduced-motion`)
- SEO: metadatos, Open Graph y Twitter Cards
- Contenido centralizado y tipado en `data/`

## Correr en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Otros scripts:

```bash
npm run build   # build de producción
npm start       # servir el build
npm run lint    # linter
```

## Estructura

```
app/                 # App Router (layout, page, estilos globales)
components/
  sections/          # secciones de la página (Hero, About, Projects, …)
  ui/                # primitivos estilo shadcn/ui (Button, Card, …)
  motion/            # helpers de animación
data/                # contenido tipado (perfil, proyectos, stack)
lib/                 # utilidades (cn)
```

## Despliegue

Se despliega en un VPS con **Docker + Caddy** (proxy inverso con HTTPS automático).
Cada push a `master` dispara un **webhook** que corre en el propio servidor
(`deploy/webhook.py`): hace `git pull` + rebuild y publica el estado del último
despliegue en **[/deploy](https://johnsalas.online/deploy)**. Ver [`DEPLOY.md`](./DEPLOY.md).

---

Hecho por [John Salas](https://github.com/jsalas607) · [LinkedIn](https://www.linkedin.com/in/jsalasparra/)
