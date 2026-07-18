// Strings de interfaz (bilingüe). Todo lo que no vive en profile/projects/stack.
import type { Lang } from "@/lib/i18n";

interface UIStrings {
  nav: { home: string; about: string; tech: string; projects: string; contact: string };
  menuOpen: string;
  menuClose: string;
  availableBadge: string;
  hero: { viewProjects: string; downloadCv: string; contactMe: string };
  about: { eyebrow: string; title: string; learningNow: string; photoPlaceholder: string };
  tech: { eyebrow: string; title: string; description: string };
  projects: { eyebrow: string; title: string; description: string };
  project: {
    featured: string;
    tryItYourself: string;
    user: string;
    password: string;
    playNow: string;
    code: string;
    codeSoon: string;
    demo: string;
    downloadApk: string;
  };
  experience: { eyebrow: string; title: string; description: string };
  skills: { eyebrow: string; title: string; description: string; levelAria: string };
  certificates: { eyebrow: string; title: string; empty: string };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sent: string;
    hint: string;
    findMe: string;
    available: string;
    notAvailable: string;
    subject: (name: string) => string;
  };
  footer: { builtWith: string; code: string };
  categories: Record<string, string>;
}

export const ui: Record<Lang, UIStrings> = {
  es: {
    nav: { home: "Inicio", about: "Sobre mí", tech: "Tecnologías", projects: "Proyectos", contact: "Contacto" },
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    availableBadge: "Disponible para trabajar",
    hero: { viewProjects: "Ver proyectos", downloadCv: "Descargar CV", contactMe: "Contactarme" },
    about: {
      eyebrow: "Sobre mí",
      title: "Un poco sobre quién soy",
      learningNow: "Aprendiendo ahora",
      photoPlaceholder: "Espacio para tu foto profesional",
    },
    tech: {
      eyebrow: "Tecnologías",
      title: "Mi stack de trabajo",
      description: "Herramientas con las que construyo, agrupadas por dónde las uso en una aplicación.",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Cosas que construí de punta a punta",
      description:
        "Tres proyectos completos: uno full-stack, uno de frontend web y una app móvil. Cada uno resuelve un problema real.",
    },
    project: {
      featured: "Destacado",
      tryItYourself: "Probala vos mismo",
      user: "usuario",
      password: "clave",
      playNow: "Jugar ahora",
      code: "Código",
      codeSoon: "Código: próximamente",
      demo: "Demo",
      downloadApk: "Descargar APK",
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia y proyectos",
      description: "Mi experiencia viene de trabajo freelance y proyectos propios, construidos de principio a fin.",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Dónde estoy parado",
      description: "Un nivel honesto por área en vez de porcentajes inventados: sólido, en práctica o aprendiendo.",
      levelAria: "Nivel",
    },
    certificates: {
      eyebrow: "Certificados",
      title: "Formación y credenciales",
      empty:
        "Esta sección está lista para sumar certificados a medida que los complete. Pronto vas a ver acá mis credenciales de cursos y especializaciones.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      description:
        "Estoy abierto a proyectos freelance y nuevas oportunidades. Si querés trabajar conmigo o ver más de mi código, escribime.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Contame en qué puedo ayudarte…",
      send: "Enviar mensaje",
      sent: "Se abrió tu cliente de correo con el mensaje listo para enviar. ¡Gracias!",
      hint: "Se abrirá tu cliente de correo con el mensaje ya redactado.",
      findMe: "También podés encontrarme en:",
      available: "Disponible para trabajar",
      notAvailable: "No disponible",
      subject: (name: string) => `Contacto de ${name} desde el portafolio`,
    },
    footer: { builtWith: "Construido con Next.js y Tailwind CSS", code: "código" },
    categories: { "Full-stack": "Full-stack", "Frontend web": "Frontend web", "Móvil": "Móvil" },
  },
  en: {
    nav: { home: "Home", about: "About", tech: "Tech", projects: "Projects", contact: "Contact" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    availableBadge: "Available for work",
    hero: { viewProjects: "View projects", downloadCv: "Download CV", contactMe: "Get in touch" },
    about: {
      eyebrow: "About",
      title: "A bit about who I am",
      learningNow: "Currently learning",
      photoPlaceholder: "Space for your professional photo",
    },
    tech: {
      eyebrow: "Tech stack",
      title: "My working stack",
      description: "The tools I build with, grouped by where I use them in an app.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I built end to end",
      description:
        "Three complete projects: one full-stack, one web frontend and a mobile app. Each solves a real problem.",
    },
    project: {
      featured: "Featured",
      tryItYourself: "Try it yourself",
      user: "user",
      password: "password",
      playNow: "Play now",
      code: "Code",
      codeSoon: "Code: coming soon",
      demo: "Demo",
      downloadApk: "Download APK",
    },
    experience: {
      eyebrow: "Journey",
      title: "Experience & projects",
      description: "My experience comes from freelance work and personal projects, built end to end.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Where I stand",
      description: "An honest level per area instead of made-up percentages: solid, practicing or learning.",
      levelAria: "Level",
    },
    certificates: {
      eyebrow: "Certificates",
      title: "Education & credentials",
      empty:
        "This section is ready to add certificates as I complete them. Soon you'll see my course and specialization credentials here.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      description:
        "I'm open to freelance projects and new opportunities. If you want to work with me or see more of my code, drop me a line.",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me how I can help…",
      send: "Send message",
      sent: "Your email client opened with the message ready to send. Thanks!",
      hint: "Your email client will open with the message pre-filled.",
      findMe: "You can also find me at:",
      available: "Available for work",
      notAvailable: "Not available",
      subject: (name: string) => `Contact from ${name} via the portfolio`,
    },
    footer: { builtWith: "Built with Next.js and Tailwind CSS", code: "code" },
    categories: { "Full-stack": "Full-stack", "Frontend web": "Frontend web", "Móvil": "Mobile" },
  },
};
