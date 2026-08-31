import { ogImageContentType, ogImageSize, renderOgImage } from "@/components/og-image"
import { getContent } from "@/lib/content"

const content = getContent("pt")

export const alt = content.meta.title
export const size = ogImageSize
export const contentType = ogImageContentType

export default async function OpengraphImage() {
  return renderOgImage(content)
}
