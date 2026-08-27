interface TechBadgeProps {
  readonly children: React.ReactNode
}

export function TechBadge({ children }: TechBadgeProps) {
  return <span className="tech-badge">{children}</span>
}
