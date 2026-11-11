import { technologies } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"

export function TechStack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <SectionHeader
          index="03"
          label="Stack"
          aside="Da interface à produção."
          title={["A ferramenta certa", "para cada camada."]}
          outlineLine={1}
          description="Uma base full stack organizada por responsabilidade — da interface ao ambiente de produção."
        />
        <div className="stack-grid" data-reveal>
          {technologies.map((group, index) => (
            <article className="stack-col" key={group.category}>
              <h3>{group.category}<span aria-hidden="true">0{index + 1}</span></h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
