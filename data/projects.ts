// Los proyectos del portafolio. repo/demo en null => no se muestra ese botón.

export interface Project {
  id: string;
  title: string;
  category: string;
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

export const projects: Project[] = [
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
];
