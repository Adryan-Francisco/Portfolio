import { ArrowDownRight, ArrowRight, Github, Linkedin } from "lucide-react"

import { profile } from "@/lib/portfolio-data"

const architecture = [
  { label: "Interface", value: "React · Next.js" },
  { label: "Contratos", value: "TypeScript · REST" },
  { label: "Domínio", value: "C# · .NET · DDD" },
  { label: "Dados & deploy", value: "PostgreSQL · Vercel · VPS" },
] as const

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <div className="availability"><span /> Disponível para oportunidades</div>
          <p className="eyebrow">Full Stack Developer</p>
          <h1>Construo sistemas web do <em>frontend</em> à arquitetura.</h1>
          <p className="hero-description">
            Desenvolvo produtos com React, Next.js e TypeScript, conectados a APIs em C# e .NET, banco de dados, regras de domínio e deploy em ambiente real.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Ver projetos <ArrowDownRight /></a>
            <a className="button button-secondary" href="#contato">Entrar em contato <ArrowRight /></a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
        </div>

        <div className="architecture-panel reveal reveal-delay" aria-label="Fluxo técnico do desenvolvimento full stack">
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
            <span>system.architecture</span>
            <span>production</span>
          </div>
          <div className="architecture-body">
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
      <div className="container hero-proof" aria-label="Resumo profissional">
        <div><span>01</span><p>Produto</p><strong>Experiência pensada de ponta a ponta</strong></div>
        <div><span>02</span><p>Engenharia</p><strong>Código organizado para evoluir</strong></div>
        <div><span>03</span><p>Entrega</p><strong>Projetos publicados em ambiente real</strong></div>
      </div>
    </section>
  )
}
