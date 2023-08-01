"use client"

import "@/styles/globals.css"

import { Metadata } from "next"
import { ReactLenis, useLenis } from "@studio-freight/react-lenis"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const lenis = useLenis(() => {})

  function raf(time: any) {
    if (lenis) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
  }

  requestAnimationFrame(raf)

  return (
    <>
      <ReactLenis root>
        <html lang="en" suppressHydrationWarning>
          <head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
          </head>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className=" min-h-screen ">
                <SiteHeader />
                <div>{children}</div>
                <Footer />
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </body>
        </html>
      </ReactLenis>
    </>
  )
}
