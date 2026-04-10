import { Github, Linkedin, Send } from "lucide-react"

import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contato" className="relative px-6 py-24">
      <div className="section-shell">
        <div className="glass-panel relative overflow-hidden rounded-[36px] p-8 text-center md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(73,243,208,0.12),transparent_46%)]" />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            Contato profissional
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Vamos conversar sobre oportunidades, projetos e colaboracoes.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
            Se voce procura alguem comprometido com evolucao tecnica, boa apresentacao e construcao
            de produtos web com mais estrutura, meus canais principais estao logo abaixo.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(73,243,208,0.22)] transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              <Send className="h-4 w-4" />
              Falar no LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/45 px-8 py-3.5 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              Ver GitHub
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-background/45 p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-background/45 p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
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
