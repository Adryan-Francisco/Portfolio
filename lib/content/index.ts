import { en } from "./en"
import { pt } from "./pt"
import type { Content, Locale } from "./types"

export type { Content, Locale, LocalizedProject } from "./types"

const contents: Readonly<Record<Locale, Content>> = { pt, en }

export function getContent(locale: Locale): Content {
  return contents[locale]
}

export const locales = Object.keys(contents) as readonly Locale[]
