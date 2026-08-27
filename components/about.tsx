import { expertise, profile } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeader index="01" eyebrow="Sobre" title="Código é apenas uma parte do produto." />
        <div className="about-grid">
          <div className="about-copy">
            <p>Sou {profile.fullName}, desenvolvedor Full Stack focado em transformar necessidades reais em aplicações claras, organizadas e publicadas.</p>
            <p>Atuo conectando interface, regras de negócio, APIs e dados. Gosto de entender o fluxo antes de escrever código e de estruturar cada camada para que o produto continue sustentável conforme cresce.</p>
          </div>
          <dl className="expertise-list">
            {expertise.map((item) => (
              <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
