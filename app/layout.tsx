import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Metadata (SEO) en español: es el idioma del render inicial / la audiencia principal.
const me = profile.es;
const title = `${me.name} — ${me.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://johnsalas.online"),
  title: {
    default: title,
    template: `%s — ${me.name}`,
  },
  description: me.tagline,
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
    me.name,
  ],
  authors: [{ name: me.name, url: me.github }],
  creator: me.name,
  openGraph: {
    type: "website",
    locale: "es_CO",
    title,
    description: me.tagline,
    siteName: `${me.name} · Portafolio`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: me.tagline,
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
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
