// Los proyectos del portafolio. repo/demo en null => no se muestra ese botón.

export interface Proyecto {
  id: string;
  titulo: string;
  categoria: string;
  destacado: boolean;
  descripcion: string;
  problema: string;
  stack: string[];
  repo: string | null;
  demo: string | null;
  // Ruta interna para jugar embebido (p. ej. "/juego"). Opcional.
  jugar?: string | null;
  // Enlace de descarga directa (p. ej. un APK en /public). Opcional.
  apk?: string | null;
  // Cuenta de prueba pública para que cualquiera pruebe la app, con su advertencia.
  demoAcceso?: {
    usuario: string;
    clave: string;
    aviso: string;
  } | null;
  // Placeholder visual mientras no haya screenshot real (se usa un gradiente por proyecto).
  imagen: string | null;
}

export const proyectos: Proyecto[] = [
  {
    id: "restaurante",
    titulo: "Sistema de Gestión para Restaurantes",
    categoria: "Full-stack",
    destacado: true,
    descripcion:
      "Plataforma completa para administrar la operación de un restaurante: mesas, pedidos, despacho a cocina, menú, ventas, cartera, inventario y empleados, con autenticación por roles y notificaciones en tiempo real.",
    problema:
      "Unifica la caja, la cocina y los meseros —que suelen vivir en herramientas separadas o en papel— y los sincroniza en vivo con WebSockets: un pedido tomado en la mesa aparece al instante en cocina y queda registrado sin doble digitación.",
    stack: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "Alembic", "Flutter"],
    repo: "https://github.com/jsalas607/project_manhattan",
    demo: null,
    apk: "/manhattan.apk",
    demoAcceso: {
      usuario: "demo",
      clave: "demo",
      aviso:
        "Todo lo que crees con la cuenta demo se elimina automáticamente a las 00:00 del día siguiente.",
    },
    imagen: null,
  },
  {
    id: "juego-spsls",
    titulo: "Piedra, Papel, Tijera, Lagarto, Spock",
    categoria: "Frontend web",
    destacado: false,
    descripcion:
      "Juego web interactivo con estética retro de 8 bits: modo un jugador y multijugador en tiempo real. Flujo de varias pantallas (inicio, sala de juego y game over), la lógica completa de las cinco jugadas y marcador de partidas. Podés jugarlo acá mismo.",
    problema:
      "Un producto jugable de punta a punta que demuestra manejo de estado, ruteo entre pantallas y multijugador en tiempo real con Firebase. Está embebido en este portafolio, así que se prueba sin salir del sitio.",
    stack: ["Next.js", "React", "Firebase", "NES.css"],
    repo: "https://github.com/jsalas607/game_spsls",
    demo: null,
    jugar: "/juego",
    imagen: null,
  },
  {
    id: "si-bebes-juegas",
    titulo: "Spicy Card",
    categoria: "Móvil",
    destacado: false,
    descripcion:
      "App móvil multiplataforma de retos para reuniones, con niveles de dificultad (fácil, medio, difícil y extremo) y contenido localizado por región: Colombia, Chile, Brasil y España.",
    problema:
      "Organiza el juego de retos que normalmente se improvisa: filtra por dificultad y por país. Construida con arquitectura por capas (models, services, data y screens), fácil de extender con nuevos retos o regiones.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
    repo: "https://github.com/jsalas607/spicy_card",
    demo: null,
    apk: "/spicy-card.apk",
    imagen: null,
  },
];
