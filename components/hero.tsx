import { featuredProjects, heroTechs, profile } from "@/lib/portfolio-data"

const architecture = [
  { label: "Interface", value: "React · Next.js" },
  { label: "Contratos", value: "TypeScript · REST" },
  { label: "Domínio", value: "C# · .NET · DDD" },
  { label: "Dados & deploy", value: "PostgreSQL · Vercel · VPS" },
] as const

const twoDigits = (value: number) => String(value).padStart(2, "0")

export function Hero() {
  const inProduction = featuredProjects.filter((project) => project.live).length

  return (
    <section id="top" className="hero">
      <div className="container hero-layout">
        <div data-reveal>
          <p className="eyebrow-line">{profile.role} · {profile.location}</p>
          <h1>
            <span>Construo sistemas web</span>
            <span>do <span className="outline">frontend</span></span>
            <span>à <span className="outline">arquitetura.</span></span>
          </h1>
          <p className="hero-description">
            Desenvolvo produtos com React, Next.js e TypeScript, conectados a APIs em C# e .NET, banco de dados, regras de domínio e deploy em ambiente real.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Ver projetos <span className="arrow" aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#contato">Entrar em contato <span className="arrow" aria-hidden="true">↗</span></a>
          </div>
          <ul className="hero-stats" aria-label="Resumo profissional">
            <li><strong>{twoDigits(inProduction)}</strong><span>SaaS em produção</span></li>
            <li><strong>{twoDigits(featuredProjects.length)}</strong><span>Projetos públicos</span></li>
            <li><strong aria-hidden="true">↗</strong><span>Do frontend ao deploy</span></li>
          </ul>
        </div>

        <div className="hero-visual" data-reveal>
          <p className="availability"><i aria-hidden="true" /> Disponível para oportunidades</p>
          <div className="architecture-panel" role="img" aria-label="Fluxo técnico: interface em React e Next.js, contratos em TypeScript e REST, domínio em C# e .NET com DDD, dados e deploy com PostgreSQL, Vercel e VPS">
            <div className="window-bar" aria-hidden="true">
              <div className="window-dots"><i /><i /><i /></div>
              <span>system.architecture</span>
              <span>production</span>
            </div>
            <div className="architecture-body" aria-hidden="true">
              <div className="code-caption"><span>01</span> product pipeline</div>
              <div className="architecture-flow">
                {architecture.map((item, index) => (
                  <div className="architecture-row" key={item.label}>
                    <div className="flow-marker"><span>{index + 1}</span>{index < architecture.length - 1 && <i />}</div>
                    <div><p>{item.label}</p><strong>{item.value}</strong></div>
                    <span className="status">ready</span>
                  </div>
                ))}
              </div>
              <div className="terminal-line"><span>$</span> build --from-idea --to-production <i /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container tech-strip">
        <p className="eyebrow-line">Stack do dia a dia</p>
        <ul>
          {heroTechs.map((tech) => <li key={tech}>{tech}</li>)}
          <li className="more"><a href="#stack">Stack completa ↗</a></li>
        </ul>
      </div>
    </section>
  )
}
