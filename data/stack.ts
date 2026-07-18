// Stack tecnológico, habilidades (con indicador de nivel honesto, no %),
// experiencia académica/personal y certificados.

export interface GrupoTech {
  categoria: string;
  items: string[];
}

export const techStack: GrupoTech[] = [
  { categoria: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { categoria: "Backend", items: ["Python", "FastAPI", "REST APIs", "WebSockets", "Alembic"] },
  { categoria: "Base de datos", items: ["PostgreSQL", "SQL", "SQLite"] },
  { categoria: "Móvil", items: ["Flutter", "Dart"] },
  { categoria: "Herramientas", items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Vercel"] },
];

// Nivel: 3 = sólido, 2 = en práctica, 1 = aprendiendo. Más honesto que un "90%".
export interface Skill {
  area: string;
  nivel: 1 | 2 | 3;
  etiqueta: string;
}

export const skills: Skill[] = [
  { area: "Frontend (React / Next.js)", nivel: 3, etiqueta: "Sólido" },
  { area: "Backend (Python / FastAPI)", nivel: 3, etiqueta: "Sólido" },
  { area: "UI / Responsive design", nivel: 2, etiqueta: "En práctica" },
  { area: "APIs y tiempo real", nivel: 2, etiqueta: "En práctica" },
  { area: "Móvil (Flutter)", nivel: 2, etiqueta: "En práctica" },
  { area: "Git / GitHub", nivel: 3, etiqueta: "Sólido" },
];

export interface Experiencia {
  titulo: string;
  contexto: string;
  periodo: string;
  puntos: string[];
}

export const experiencia: Experiencia[] = [
  {
    titulo: "Sistema de Gestión para Restaurantes",
    contexto: "Proyecto personal · Full-stack",
    periodo: "2026",
    puntos: [
      "Diseñé la API en FastAPI con autenticación por roles y modelo de datos en PostgreSQL.",
      "Implementé sincronización en tiempo real con WebSockets entre mesas, cocina y caja.",
      "Construí la app móvil en Flutter consumiendo la API, con arquitectura por capas.",
    ],
  },
  {
    titulo: "Juego web — Piedra, Papel, Tijera, Lagarto, Spock",
    contexto: "Proyecto personal · Frontend",
    periodo: "2025",
    puntos: [
      "Desarrollé el juego completo en Next.js y React: estado, ruteo entre pantallas y marcador.",
      "Cuidé la experiencia con una estética retro coherente y componentes reutilizables.",
    ],
  },
  {
    titulo: "App móvil — Spicy Card",
    contexto: "Proyecto personal · Móvil",
    periodo: "2025",
    puntos: [
      "Creé una app Flutter multiplataforma con contenido filtrable por dificultad y país.",
      "Separé la lógica en capas (models, services, data, screens) para poder extenderla.",
    ],
  },
];

// Sección lista para sumar certificados a futuro. Vacío => se muestra estado vacío.
export interface Certificado {
  titulo: string;
  emisor: string;
  anio: string;
  url?: string;
}

export const certificados: Certificado[] = [];
