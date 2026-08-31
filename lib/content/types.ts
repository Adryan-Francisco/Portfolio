import type { ProjectId } from "@/lib/portfolio-data"

export type Locale = "pt" | "en"

export interface LocalizedProject {
  readonly description: string
  readonly type: string
  /** Opcionais de propósito: só os cases que sustentam uma narrativa real os preenchem. */
  readonly challenge?: string
  readonly approach?: string
}

export interface Content {
  readonly locale: Locale
  /** Valor do atributo `lang` do documento. */
  readonly htmlLang: string
  /** Caminho da própria versão, usado em canonical e no seletor de idioma. */
  readonly path: string
  readonly meta: {
    readonly title: string
    readonly description: string
    readonly shortDescription: string
    readonly keywords: readonly string[]
    readonly siteName: string
    readonly ogLocale: string
  }
  readonly nav: {
    readonly links: readonly { readonly label: string; readonly href: string }[]
    readonly mainLabel: string
    readonly mobileLabel: string
    readonly brandLabel: string
    readonly openMenu: string
    readonly closeMenu: string
    readonly githubLabel: string
    readonly linkedinLabel: string
    readonly languageLabel: string
    readonly otherLanguage: { readonly code: string; readonly label: string; readonly href: string }
  }
  readonly hero: {
    readonly availability: string
    readonly eyebrow: string
    readonly titleBefore: string
    readonly titleAccent: string
    readonly titleAfter: string
    readonly description: string
    readonly primaryCta: string
    readonly secondaryCta: string
    readonly panelLabel: string
    readonly panelCaption: string
    readonly panelStatus: string
    readonly rowStatus: string
    readonly terminalCommand: string
    readonly architecture: readonly { readonly label: string; readonly value: string }[]
    readonly proofLabel: string
    readonly proof: readonly { readonly label: string; readonly value: string }[]
  }
  readonly about: {
    readonly eyebrow: string
    readonly title: string
    readonly paragraphs: readonly string[]
    readonly expertise: readonly { readonly label: string; readonly value: string }[]
  }
  readonly stack: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly groups: readonly { readonly category: string; readonly items: readonly string[] }[]
  }
  readonly projects: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly featuredLabel: string
    readonly featuredHighlights: readonly string[]
    readonly viewProject: string
    readonly secondaryTitle: string
    readonly secondaryDescription: string
    readonly demoLabel: string
    readonly challengeLabel: string
    readonly approachLabel: string
    readonly privateRepoNote: string
    readonly githubCta: string
    readonly previewAlt: string
    readonly preview: {
      readonly overview: string
      readonly greeting: string
      readonly action: string
      readonly metrics: readonly { readonly label: string; readonly title: string; readonly note: string }[]
      readonly chartLabel: string
      readonly layersLabel: string
      readonly layers: readonly string[]
    }
    readonly items: Readonly<Record<ProjectId, LocalizedProject>>
  }
  readonly build: {
    readonly eyebrow: string
    readonly title: string
    readonly principles: readonly {
      readonly number: string
      readonly title: string
      readonly description: string
    }[]
  }
  readonly contact: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly emailCta: string
    readonly emailSubject: string
    readonly resumeCta: string
    readonly linksLabel: string
  }
  readonly footer: {
    readonly builtWith: string
    readonly emailLabel: string
  }
}
