import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Antonio Morales | Desarrollador de Software",
  description:
    "Portfolio de Antonio Morales, Desarrollador de Software especializado en Flutter, Python y tecnologías web",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="antonio-theme-preference"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'