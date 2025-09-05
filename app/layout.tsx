import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import CustomCursor from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
const siteConfig = {
  name: "Antonio Morales | Desarrollador de Software",
  description: "Portfolio de Antonio Morales, Desarrollador de Software especializado en Flutter, Python y tecnologías web. Explora mis proyectos y habilidades.",
  url: "https://antonio-morales.vercel.app/",
  ogImage: "https://antonio-morales.vercel.app/images/code-background.jpg",
  author: "Antonio Morales",
  keywords: ["Desarrollador de Software", "Flutter", "Python", "Django", "React", "Next.js", "Desarrollador Web", "Portfolio", "API", "Backend", "Frontend"],
}

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  keywords: siteConfig.keywords,
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: [{ url: "/favicon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Fondo de pantalla con código de programación.",
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@antonio", // Reemplaza esto con tu usuario de Twitter
  },
  verification: {
    google: 'd_YEGgEVTlFbEsKpYS-aEz93Wv-UmGEDWtF-rdMzYaU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: siteConfig.url,
    jobTitle: 'Desarrollador de Software',
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.author,
    },
    sameAs: [
      // Reemplaza esto con tus redes sociales
      // "https://twitter.com/your-twitter",
      // "https://www.linkedin.com/in/your-linkedin/",
      // "https://github.com/your-github"
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "scpo28dkz4");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="antonio-theme-preference"
        >
          <CustomCursor />
          {children}
          <Toaster />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
