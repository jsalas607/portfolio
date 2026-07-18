// Stack tecnológico, habilidades (con indicador de nivel honesto, no %),
// experiencia y certificados.

export interface TechGroup {
  category: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "FastAPI", "REST APIs", "WebSockets", "Alembic"] },
  { category: "Base de datos", items: ["PostgreSQL", "SQL", "SQLite"] },
  { category: "Móvil", items: ["Flutter", "Dart"] },
  { category: "Herramientas", items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Vercel"] },
];

// Nivel: 3 = sólido, 2 = en práctica, 1 = aprendiendo. Más honesto que un "90%".
export interface Skill {
  area: string;
  level: 1 | 2 | 3;
  label: string;
}

export const skills: Skill[] = [
  { area: "Frontend (React / Next.js)", level: 3, label: "Sólido" },
  { area: "Backend (Python / FastAPI)", level: 3, label: "Sólido" },
  { area: "UI / Responsive design", level: 2, label: "En práctica" },
  { area: "APIs y tiempo real", level: 2, label: "En práctica" },
  { area: "Móvil (Flutter)", level: 2, label: "En práctica" },
  { area: "Git / GitHub", level: 3, label: "Sólido" },
];

export interface Experience {
  title: string;
  context: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    title: "Sistema de Gestión para Restaurantes",
    context: "Proyecto personal · Full-stack",
    period: "2026",
    points: [
      "Diseñé la API en FastAPI con autenticación por roles y modelo de datos en PostgreSQL.",
      "Implementé sincronización en tiempo real con WebSockets entre mesas, cocina y caja.",
      "Construí la app móvil en Flutter consumiendo la API, con arquitectura por capas.",
    ],
  },
  {
    title: "Juego web — Piedra, Papel, Tijera, Lagarto, Spock",
    context: "Proyecto personal · Frontend",
    period: "2025",
    points: [
      "Desarrollé el juego completo en Next.js y React: estado, ruteo entre pantallas y marcador.",
      "Cuidé la experiencia con una estética retro coherente y componentes reutilizables.",
    ],
  },
  {
    title: "App móvil — Spicy Card",
    context: "Proyecto personal · Móvil",
    period: "2025",
    points: [
      "Creé una app Flutter multiplataforma con contenido filtrable por dificultad y país.",
      "Separé la lógica en capas (models, services, data, screens) para poder extenderla.",
    ],
  },
];

// Sección lista para sumar certificados a futuro. Vacío => se muestra estado vacío.
export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certificates: Certificate[] = [];
