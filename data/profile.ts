// Datos del perfil. Editá acá y se actualiza todo el sitio.

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  available: boolean;
  email: string;
  github: string;
  linkedin: string | null;
  cv: string | null; // poné cv.pdf en /public y cambiá a "/cv.pdf"
  photo: string | null; // guardá tu foto como public/foto.png
  bio: string[];
  learning: string[];
}

export const profile: Profile = {
  name: "John Salas",
  role: "Full Stack Developer",
  tagline:
    "Construyo aplicaciones web y móviles de punta a punta, con foco en experiencias rápidas, accesibles y bien terminadas.",
  location: "Bogotá, Colombia",
  available: true,
  email: "jsalasparra607@gmail.com",
  github: "https://github.com/jsalas607",
  linkedin: "https://www.linkedin.com/in/jsalasparra/",
  cv: null,
  photo: "/foto.png",
  bio: [
    "Soy desarrollador full stack en Bogotá. Construyo proyectos completos de principio a fin: un sistema de gestión para restaurantes con backend, base de datos y app móvil, un juego web con React y una app de retos en Flutter.",
    "Me muevo con soltura en los dos lados de la aplicación. En el frontend trabajo con React, Next.js y Tailwind; en el backend con Python, FastAPI y SQL, incluyendo tiempo real con WebSockets y migraciones de base de datos.",
    "He trabajado como freelance en varios proyectos, construyendo APIs, paneles administrativos y soluciones a medida para clientes de diferentes sectores. Disfruto resolver problemas reales, aprender constantemente y entregar código limpio y de calidad.",
  ],
  learning: ["TypeScript avanzado", "Testing (Vitest / Playwright)", "Arquitectura y patrones", "Docker en producción"],
};
