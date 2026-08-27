import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import { profile } from "@/lib/portfolio-data"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-adryanf.vercel.app"),
  title: `${profile.firstName} Francisco — ${profile.role}`,
  description:
    "Portfólio de Adryan Francisco, desenvolvedor Full Stack com React, Next.js, TypeScript, C#, .NET, APIs REST, DDD e sistemas em produção.",
  alternates: { canonical: "/" },
  keywords: ["Adryan Francisco", "Desenvolvedor Full Stack", "React", "Next.js", "TypeScript", "C#", ".NET", "DDD"],
  authors: [{ name: profile.fullName, url: profile.linkedin }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: `${profile.firstName} Francisco — ${profile.role}`,
    description: "Sistemas web do frontend à arquitetura, com React, Next.js, TypeScript, C# e .NET.",
    siteName: "Adryan Francisco — Portfólio",
  },
  twitter: {
    card: "summary",
    title: `${profile.firstName} Francisco — ${profile.role}`,
    description: "Sistemas web do frontend à arquitetura, com React, Next.js, TypeScript, C# e .NET.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#080b12",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
