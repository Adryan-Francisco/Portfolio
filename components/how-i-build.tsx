import { buildPrinciples } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"

export function HowIBuild() {
  return (
    <section id="processo" className="section build-section" aria-labelledby="build-title">
      <div className="container">
        <SectionHeader
          index="04"
          label="Como eu construo"
          aside="Sem caixa-preta."
          title={["Da ideia", "à produção."]}
          outlineLine={1}
          titleId="build-title"
        />
        <ol className="steps">
          {buildPrinciples.map((principle) => (
            <li className="step" key={principle.number} data-reveal>
              <span className="step-number" aria-hidden="true">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
