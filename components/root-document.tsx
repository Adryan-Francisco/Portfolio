import { Analytics } from "@vercel/analytics/next"

import type { Content } from "@/lib/content"
import { fontVariables } from "@/lib/fonts"
import { buildPersonJsonLd } from "@/lib/metadata"

interface RootDocumentProps {
  readonly content: Content
  readonly children: React.ReactNode
}

/** Documento HTML compartilhado pelos dois root layouts (pt-BR e en). */
export function RootDocument({ content, children }: RootDocumentProps) {
  return (
    <html lang={content.htmlLang} className={`${fontVariables} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonJsonLd(content)) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
