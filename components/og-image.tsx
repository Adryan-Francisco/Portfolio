import { ImageResponse } from "next/og"

import type { Content } from "@/lib/content"
import { siteUrl } from "@/lib/portfolio-data"

export const ogImageSize = { width: 1200, height: 630 }
export const ogImageContentType = "image/png"

const background = "#080b12"
const foreground = "#f4f7fb"
const secondary = "#a7b0bf"
const muted = "#687385"
const accent = "#5b8cff"
const border = "rgba(148, 163, 184, 0.24)"

/** Imagem de compartilhamento, gerada no build a partir do conteúdo do idioma. */
export function renderOgImage(content: Content) {
  const headline = `${content.hero.titleBefore}${content.hero.titleAccent}${content.hero.titleAfter}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background,
          color: foreground,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              border: `1px solid ${border}`,
              borderRadius: 8,
              color: accent,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            AF
          </div>
          <div style={{ display: "flex", color: secondary, fontSize: 22, letterSpacing: "0.02em" }}>
            Adryan Francisco
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: accent,
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {content.hero.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 900,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: `1px solid ${border}`,
            color: muted,
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>React · Next.js · TypeScript · C# · .NET</div>
          <div style={{ display: "flex" }}>{siteUrl.replace("https://", "")}</div>
        </div>
      </div>
    ),
    ogImageSize
  )
}
