interface SectionHeaderProps {
  readonly index: string
  readonly label: string
  /** Frase curta alinhada à direita na barra superior. */
  readonly aside?: string
  /** Cada item vira uma linha do título. */
  readonly title: readonly string[]
  /** Índice da linha renderizada apenas com contorno. */
  readonly outlineLine?: number
  readonly description?: string
  readonly titleId?: string
}

export function SectionHeader({ index, label, aside, title, outlineLine, description, titleId }: SectionHeaderProps) {
  return (
    <header className="section-head">
      <div className="section-bar mono">
        <span>{index} / {label}</span>
        {aside && <span>{aside}</span>}
      </div>
      <h2 id={titleId} data-reveal>
        {title.map((line, lineIndex) => (
          <span key={line} className={lineIndex === outlineLine ? "outline" : undefined}>{line}</span>
        ))}
      </h2>
      {description && <p className="section-description" data-reveal>{description}</p>}
    </header>
  )
}
