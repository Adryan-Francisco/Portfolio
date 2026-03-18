import { Github, Linkedin, Send } from "lucide-react"

import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="section-shell">
        <div className="glass-panel rounded-[32px] p-8 text-center md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            Contato profissional
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Vamos conversar sobre oportunidades, projetos e colaboracoes.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
            Se voce procura alguem comprometido com evolucao tecnica, boa apresentacao e construcao
            de produtos web, meus canais principais estao abaixo.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Falar no LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Ver GitHub
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
