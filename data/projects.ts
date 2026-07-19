// Los proyectos del portafolio (bilingüe). repo/demo en null => no se muestra ese botón.
// Títulos traducidos por idioma (Spicy Card queda igual en ambos); también description, problem y demoAccess.notice.
import type { Lang } from "@/lib/i18n";

export interface Project {
  id: string;
  title: string;
  category: string; // clave estable para el mapa de íconos; la etiqueta visible se traduce en ui.categories
  featured: boolean;
  description: string;
  problem: string;
  stack: string[];
  repo: string | null;
  demo: string | null;
  // Ruta interna para jugar embebido (p. ej. "/juego"). Opcional.
  play?: string | null;
  // Enlace de descarga directa (p. ej. un APK en /public). Opcional.
  apk?: string | null;
  // Cuenta de prueba pública para que cualquiera pruebe la app, con su advertencia.
  demoAccess?: {
    username: string;
    password: string;
    notice: string;
  } | null;
  // Placeholder visual mientras no haya screenshot real (se usa un gradiente por proyecto).
  image: string | null;
}

export const projects: Record<Lang, Project[]> = {
  es: [
    {
      id: "restaurant",
      title: "Sistema de Gestión para Restaurantes",
      category: "Full-stack",
      featured: true,
      description:
        "Plataforma completa para administrar la operación de un restaurante: mesas, pedidos, despacho a cocina, menú, ventas, cartera, inventario y empleados, con autenticación por roles y notificaciones en tiempo real.",
      problem:
        "Unifica la caja, la cocina y los meseros —que suelen vivir en herramientas separadas o en papel— y los sincroniza en vivo con WebSockets: un pedido tomado en la mesa aparece al instante en cocina y queda registrado sin doble digitación.",
      stack: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "Alembic", "Flutter"],
      repo: "https://github.com/jsalas607/project_manhattan",
      demo: null,
      apk: "/manhattan.apk",
      demoAccess: {
        username: "demo",
        password: "demo",
        notice:
          "Todo lo que crees con la cuenta demo se elimina automáticamente a las 00:00 del día siguiente.",
      },
      image: null,
    },
    {
      id: "rpsls-game",
      title: "Piedra, Papel, Tijera, Lagarto, Spock",
      category: "Frontend web",
      featured: false,
      description:
        "Juego web interactivo con estética retro de 8 bits: modo un jugador y multijugador en tiempo real. Flujo de varias pantallas (inicio, sala de juego y game over), la lógica completa de las cinco jugadas y marcador de partidas. Podés jugarlo acá mismo.",
      problem:
        "Un producto jugable de punta a punta que demuestra manejo de estado, ruteo entre pantallas y multijugador en tiempo real con Firebase. Está embebido en este portafolio, así que se prueba sin salir del sitio.",
      stack: ["Next.js", "React", "Firebase", "NES.css"],
      repo: "https://github.com/jsalas607/game_spsls",
      demo: null,
      play: "/juego",
      image: null,
    },
    {
      id: "spicy-card",
      title: "Spicy Card",
      category: "Móvil",
      featured: false,
      description:
        "App móvil multiplataforma de retos para reuniones, con niveles de dificultad (fácil, medio, difícil y extremo) y contenido localizado por región: Colombia, Chile, Brasil y España.",
      problem:
        "Organiza el juego de retos que normalmente se improvisa: filtra por dificultad y por país. Construida con arquitectura por capas (models, services, data y screens), fácil de extender con nuevos retos o regiones.",
      stack: ["Flutter", "Dart", "Android", "iOS"],
      repo: "https://github.com/jsalas607/spicy_card",
      demo: null,
      apk: "/spicy-card.apk",
      image: null,
    },
  ],
  en: [
    {
      id: "restaurant",
      title: "Restaurant Management System",
      category: "Full-stack",
      featured: true,
      description:
        "A complete platform to run a restaurant's operation: tables, orders, kitchen dispatch, menu, sales, cash, inventory and staff, with role-based authentication and real-time notifications.",
      problem:
        "It unifies the register, the kitchen and the waiters —usually spread across separate tools or paper— and syncs them live with WebSockets: an order taken at the table shows up instantly in the kitchen and is recorded without double entry.",
      stack: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "Alembic", "Flutter"],
      repo: "https://github.com/jsalas607/project_manhattan",
      demo: null,
      apk: "/manhattan.apk",
      demoAccess: {
        username: "demo",
        password: "demo",
        notice: "Everything you create with the demo account is automatically deleted at 00:00 the next day.",
      },
      image: null,
    },
    {
      id: "rpsls-game",
      title: "Rock, Paper, Scissors, Lizard, Spock",
      category: "Frontend web",
      featured: false,
      description:
        "Interactive web game with an 8-bit retro look: single-player and real-time multiplayer modes. A multi-screen flow (start, game room and game over), the full logic of the five moves and a match scoreboard. You can play it right here.",
      problem:
        "A fully playable product that showcases state management, screen routing and real-time multiplayer with Firebase. It's embedded in this portfolio, so you can try it without leaving the site.",
      stack: ["Next.js", "React", "Firebase", "NES.css"],
      repo: "https://github.com/jsalas607/game_spsls",
      demo: null,
      play: "/juego",
      image: null,
    },
    {
      id: "spicy-card",
      title: "Spicy Card",
      category: "Móvil",
      featured: false,
      description:
        "A cross-platform mobile party-game app of dares, with difficulty levels (easy, medium, hard and extreme) and region-localized content: Colombia, Chile, Brazil and Spain.",
      problem:
        "It organizes the dare game that's usually improvised: filter by difficulty and country. Built with a layered architecture (models, services, data and screens), easy to extend with new dares or regions.",
      stack: ["Flutter", "Dart", "Android", "iOS"],
      repo: "https://github.com/jsalas607/spicy_card",
      demo: null,
      apk: "/spicy-card.apk",
      image: null,
    },
  ],
};
