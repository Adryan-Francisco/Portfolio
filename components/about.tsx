import { expertise, profile, team } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"

function Star() {
  return (
    <svg className="about-star" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" aria-hidden="true">
      <path d="M36 4v64M4 36h64M13.4 13.4l45.2 45.2M58.6 13.4 13.4 58.6" />
    </svg>
  )
}

export function About() {
  return (
    <section id="sobre" className="section about-section dark">
      <div className="container">
        <SectionHeader
          index="02"
          label="Sobre"
          aside="Quem está por trás do código."
          title={["Código é só", "uma parte", "do produto."]}
          outlineLine={2}
        />

        <div className="about-grid" data-reveal>
          <Star />
          <div className="about-copy">
            <p>Sou {profile.fullName}, desenvolvedor Full Stack focado em transformar necessidades reais em aplicações claras, organizadas e publicadas.</p>
            <p>Atuo conectando interface, regras de negócio, APIs e dados. Gosto de entender o fluxo antes de escrever código e de estruturar cada camada para que o produto continue sustentável conforme cresce.</p>
          </div>
        </div>

        <dl className="expertise-list" data-reveal>
          {expertise.map((item, index) => (
            <div key={item.label}>
              <dt><span>{item.label}</span><span aria-hidden="true">0{index + 1}</span></dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <a className="team-note" href={team.url} target="_blank" rel="noreferrer">
          <p><span className="mono">Também em equipe</span>{team.role} na {team.name}</p>
          <span className="mono">Conhecer a {team.name} ↗</span>
        </a>
      </div>
    </section>
  )
}
