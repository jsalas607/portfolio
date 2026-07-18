// Datos del perfil. Editá acá y se actualiza todo el sitio.

export interface Perfil {
  nombre: string;
  rol: string;
  tagline: string;
  ubicacion: string;
  disponible: boolean;
  email: string;
  github: string;
  linkedin: string | null;
  cv: string | null; // poné cv.pdf en /public y cambiá a "/cv.pdf"
  foto: string | null; // poné foto.jpg en /public y cambiá a "/foto.jpg"
  bio: string[];
  aprendiendo: string[];
}

export const perfil: Perfil = {
  nombre: "John Salas",
  rol: "Junior Full Stack Developer",
  tagline:
    "Construyo aplicaciones web y móviles de punta a punta, con foco en experiencias rápidas, accesibles y bien terminadas.",
  ubicacion: "Bogotá, Colombia",
  disponible: true,
  email: "jsalasparra607@gmail.com",
  github: "https://github.com/jsalas607",
  linkedin: "https://www.linkedin.com/in/jsalasparra/",
  cv: null,
  foto: "/foto.png",
  bio: [
    "Soy desarrollador full stack junior en Bogotá. Aprendí construyendo proyectos completos de principio a fin —no solo tutoriales—: un sistema de gestión para restaurantes con backend, base de datos y app móvil, un juego web con React y una app de retos en Flutter.",
    "Me muevo con soltura en los dos lados de la aplicación. En el frontend trabajo con React, Next.js y Tailwind; en el backend con Python, FastAPI y SQL, incluyendo tiempo real con WebSockets y migraciones de base de datos.",
    "Busco mi primer empleo como desarrollador, en un equipo donde pueda aportar desde el primer día y crecer con gente que sabe más que yo.",
  ],
  aprendiendo: ["TypeScript avanzado", "Testing (Vitest / Playwright)", "Arquitectura y patrones", "Docker en producción"],
};
