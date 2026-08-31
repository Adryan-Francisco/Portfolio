import { ArrowDownRight, ArrowRight, Github, Linkedin } from "lucide-react"

import type { Content } from "@/lib/content"
import { profile } from "@/lib/portfolio-data"

export function Hero({ content }: { readonly content: Content }) {
  const { hero } = content

  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <div className="availability">
            <span /> {hero.availability}
          </div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.titleBefore}
            <em>{hero.titleAccent}</em>
            {hero.titleAfter}
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              {hero.primaryCta} <ArrowDownRight />
            </a>
            <a className="button button-secondary" href="#contato">
              {hero.secondaryCta} <ArrowRight />
            </a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="architecture-panel reveal reveal-delay" aria-label={hero.panelLabel}>
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>system.architecture</span>
            <span>{hero.panelStatus}</span>
          </div>
          <div className="architecture-body">
            <div className="code-caption">
              <span>01</span> {hero.panelCaption}
            </div>
            <div className="architecture-flow">
              {hero.architecture.map((item, index) => (
                <div className="architecture-row" key={item.label}>
                  <div className="flow-marker">
                    <span>{index + 1}</span>
                    {index < hero.architecture.length - 1 && <i />}
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </div>
                  <span className="status">{hero.rowStatus}</span>
                </div>
              ))}
            </div>
            <div className="terminal-line">
              <span>$</span> {hero.terminalCommand} <i />
            </div>
          </div>
        </div>
      </div>
      <div className="container hero-proof" aria-label={hero.proofLabel}>
        {hero.proof.map((item, index) => (
          <div key={item.label}>
            <span>0{index + 1}</span>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
