import { Github } from "lucide-react"

import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contato" className="contact-section dark">
      <div className="container">
        <div className="section-bar mono">
          <span>05 / Contato</span>
          <span>{profile.location}, para qualquer lugar.</span>
        </div>
        <h2 data-reveal>
          <span>Vamos construir</span>
          <span><span className="outline">algo juntos?</span> <span className="arrow" aria-hidden="true">↗</span></span>
        </h2>
        <div className="contact-row" data-reveal>
          <p>Estou aberto a oportunidades, projetos e colaborações para desenvolver sistemas úteis, bem estruturados e prontos para evoluir.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Falar no LinkedIn <span className="arrow" aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
