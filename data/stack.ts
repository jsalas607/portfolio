// Stack tecnológico, habilidades (con nivel honesto, no %), experiencia y
// certificados — bilingüe.
import type { Lang } from "@/lib/i18n";

export interface TechGroup {
  category: string;
  items: string[];
}

export const techStack: Record<Lang, TechGroup[]> = {
  es: [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "FastAPI", "REST APIs", "WebSockets", "Alembic"] },
    { category: "Base de datos", items: ["PostgreSQL", "SQL", "SQLite"] },
    { category: "Móvil", items: ["Flutter", "Dart"] },
    { category: "Herramientas", items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Vercel"] },
  ],
  en: [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "FastAPI", "REST APIs", "WebSockets", "Alembic"] },
    { category: "Databases", items: ["PostgreSQL", "SQL", "SQLite"] },
    { category: "Mobile", items: ["Flutter", "Dart"] },
    { category: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Vercel"] },
  ],
};

// Nivel: 3 = sólido, 2 = en práctica, 1 = aprendiendo. Más honesto que un "90%".
export interface Skill {
  area: string;
  level: 1 | 2 | 3;
  label: string;
}

export const skills: Record<Lang, Skill[]> = {
  es: [
    { area: "Frontend (React / Next.js)", level: 3, label: "Sólido" },
    { area: "Backend (Python / FastAPI)", level: 3, label: "Sólido" },
    { area: "UI / Responsive design", level: 3, label: "Sólido" },
    { area: "APIs y tiempo real", level: 3, label: "Sólido" },
    { area: "Móvil (Flutter)", level: 3, label: "Sólido" },
    { area: "Base de datos (PostgreSQL / SQL / SQLite)", level: 3, label: "Sólido" },
    { area: "Git / GitHub", level: 3, label: "Sólido" },
  ],
  en: [
    { area: "Frontend (React / Next.js)", level: 3, label: "Solid" },
    { area: "Backend (Python / FastAPI)", level: 3, label: "Solid" },
    { area: "UI / Responsive design", level: 3, label: "Solid" },
    { area: "APIs & real-time", level: 3, label: "Solid" },
    { area: "Mobile (Flutter)", level: 3, label: "Solid" },
    { area: "Databases (PostgreSQL / SQL / SQLite)", level: 3, label: "Solid" },
    { area: "Git / GitHub", level: 3, label: "Solid" },
  ],
};

export interface Experience {
  title: string;
  context: string;
  period: string;
  points: string[];
}

export const experience: Record<Lang, Experience[]> = {
  es: [
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
  ],
  en: [
    {
      title: "Restaurant Management System",
      context: "Personal project · Full-stack",
      period: "2026",
      points: [
        "Designed the FastAPI API with role-based authentication and a PostgreSQL data model.",
        "Implemented real-time sync with WebSockets across tables, kitchen and register.",
        "Built the Flutter mobile app consuming the API, with a layered architecture.",
      ],
    },
    {
      title: "Web game — Rock, Paper, Scissors, Lizard, Spock",
      context: "Personal project · Frontend",
      period: "2025",
      points: [
        "Developed the full game in Next.js and React: state, screen routing and scoreboard.",
        "Polished the experience with a consistent retro look and reusable components.",
      ],
    },
    {
      title: "Mobile app — Spicy Card",
      context: "Personal project · Mobile",
      period: "2025",
      points: [
        "Created a cross-platform Flutter app with content filterable by difficulty and country.",
        "Split the logic into layers (models, services, data, screens) to make it extensible.",
      ],
    },
  ],
};

// Sección lista para sumar certificados a futuro. Vacío => se muestra estado vacío.
export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certificates: Record<Lang, Certificate[]> = {
  es: [],
  en: [],
};
