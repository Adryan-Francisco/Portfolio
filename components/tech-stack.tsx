import type { Content } from "@/lib/content"
import { SectionHeader } from "@/components/ui/section-header"
import { TechBadge } from "@/components/ui/tech-badge"

export function TechStack({ content }: { readonly content: Content }) {
  const { stack } = content

  return (
    <section id="stack" className="section section-ruled">
      <div className="container">
        <SectionHeader index="02" eyebrow={stack.eyebrow} title={stack.title} description={stack.description} />
        <div className="stack-list">
          {stack.groups.map((group, index) => (
            <article className="stack-row" key={group.category}>
              <span className="stack-number">0{index + 1}</span>
              <h3>{group.category}</h3>
              <div className="stack-items">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
