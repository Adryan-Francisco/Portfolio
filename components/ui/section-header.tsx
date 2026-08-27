interface SectionHeaderProps {
  readonly index: string
  readonly eyebrow: string
  readonly title: string
  readonly description?: string
}

export function SectionHeader({ index, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-index" aria-hidden="true">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </header>
  )
}
