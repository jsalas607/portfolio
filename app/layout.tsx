import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { perfil } from "@/data/perfil";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const titulo = `${perfil.nombre} — ${perfil.rol}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://johnsalas.online"),
  title: {
    default: titulo,
    template: `%s — ${perfil.nombre}`,
  },
  description: perfil.tagline,
  keywords: [
    "desarrollador web",
    "full stack",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Flutter",
    "Bogotá",
    "Colombia",
    perfil.nombre,
  ],
  authors: [{ name: perfil.nombre, url: perfil.github }],
  creator: perfil.nombre,
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: titulo,
    description: perfil.tagline,
    siteName: `${perfil.nombre} · Portafolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: perfil.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
