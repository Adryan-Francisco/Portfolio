import type { Metadata } from "next"

import { RootDocument } from "@/components/root-document"
import { getContent } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import "../globals.css"

const content = getContent("pt")

export const metadata: Metadata = buildMetadata(content)

export const viewport = {
  themeColor: "#080b12",
}

export default function PtLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument content={content}>{children}</RootDocument>
}
