import { technologies } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"
import { TechBadge } from "@/components/ui/tech-badge"

export function TechStack() {
  return (
    <section id="stack" className="section section-ruled">
      <div className="container">
        <SectionHeader index="02" eyebrow="Stack" title="Tecnologias que sustentam o produto." description="Uma base full stack organizada por responsabilidade — da interface ao ambiente de produção." />
        <div className="stack-list">
          {technologies.map((group, index) => (
            <article className="stack-row" key={group.category}>
              <span className="stack-number">0{index + 1}</span>
              <h3>{group.category}</h3>
              <div className="stack-items">{group.items.map((item) => <TechBadge key={item}>{item}</TechBadge>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
