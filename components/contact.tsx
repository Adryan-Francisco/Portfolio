import { ArrowUpRight, Github, Linkedin } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-layout">
        <div><p className="eyebrow">Contato</p><h2>Vamos construir algo juntos?</h2></div>
        <div className="contact-copy">
          <p>Estou aberto a oportunidades, projetos e colaborações para desenvolver sistemas úteis, bem estruturados e prontos para evoluir.</p>
          <a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Falar comigo <ArrowUpRight /></a>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
