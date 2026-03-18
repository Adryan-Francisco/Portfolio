import { Code2, Database, Globe, Layers } from "lucide-react"

import { highlights, profile } from "@/lib/portfolio-data"

const icons = [Globe, Database, Layers, Code2]

export function About() {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="section-shell">
        <div className="section-heading">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Sobre</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel rounded-[28px] p-8">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Apresentacao
            </p>
            <div className="space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base">
              <p>
                Sou {profile.fullName}, desenvolvedor com foco em criar produtos web claros,
                funcionais e com acabamento visual consistente.
              </p>
              <p>
                Tenho concentrado minha evolucao em projetos práticos que unem interface, regra de
                negocio e persistencia de dados. Isso me permite construir desde paginas
                institucionais bem resolvidas ate aplicacoes com fluxo completo.
              </p>
              <p>
                Meu objetivo aqui e apresentar uma imagem mais profissional do meu trabalho:
                portfolio enxuto, projetos reais, links ativos e uma narrativa tecnica coerente com
                o que publico no GitHub.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.title}
                  className="glass-panel rounded-2xl p-5 transition-colors hover:border-primary/40"
                >
                  <Icon className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
