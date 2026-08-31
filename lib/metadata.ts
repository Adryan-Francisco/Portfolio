import type { Metadata } from "next"

import type { Content } from "@/lib/content"
import { profile, siteUrl } from "@/lib/portfolio-data"

/** Metadados equivalentes para cada idioma, com hreflang cruzado entre as versões. */
export function buildMetadata(content: Content): Metadata {
  const { meta, path } = content

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": "/",
        en: "/en",
        "x-default": "/",
      },
    },
    keywords: [...meta.keywords],
    authors: [{ name: profile.fullName, url: profile.linkedin }],
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: path,
      title: meta.title,
      description: meta.shortDescription,
      siteName: meta.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.shortDescription,
    },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  }
}

/** Dados estruturados para o Google associar nome, cargo e perfis. */
export function buildPersonJsonLd(content: Content) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: "Adryan Francisco",
    url: new URL(content.path, siteUrl).toString(),
    email: `mailto:${profile.email}`,
    jobTitle: content.locale === "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer",
    sameAs: [profile.linkedin, `https://github.com/${profile.githubUsername}`],
    knowsAbout: [...content.meta.keywords],
  }
}
