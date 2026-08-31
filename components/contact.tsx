import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react"

import type { Content } from "@/lib/content"
import { profile } from "@/lib/portfolio-data"

interface ContactProps {
  readonly content: Content
  /** `null` quando o PDF ainda não foi adicionado a `public/`. */
  readonly resumeHref: string | null
}

export function Contact({ content, resumeHref }: ContactProps) {
  const { contact } = content
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(contact.emailSubject)}`

  return (
    <section id="contato" className="contact-section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
        </div>
        <div className="contact-copy">
          <p>{contact.description}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={mailto}>
              {contact.emailCta} <ArrowUpRight />
            </a>
            {resumeHref && (
              <a className="button button-outline" href={resumeHref} target="_blank" rel="noreferrer">
                <Download /> {contact.resumeCta}
              </a>
            )}
          </div>
          <a className="contact-email" href={mailto}>
            <Mail /> {profile.email}
          </a>
          <div className="contact-links" aria-label={contact.linksLabel}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
