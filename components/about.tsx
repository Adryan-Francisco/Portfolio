import { Code2, Database, Globe, Layers } from "lucide-react"

import { highlights, profile } from "@/lib/portfolio-data"

const icons = [Globe, Database, Layers, Code2]

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-24">
      <div className="section-shell">
        <div className="section-heading">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Sobre</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel rounded-[32px] p-8 md:p-10">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Visao profissional
            </p>
            <div className="space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base">
              <p>
                Sou {profile.fullName}, desenvolvedor focado em criar produtos web com clareza
                visual, estrutura tecnica consistente e boa experiencia de uso.
              </p>
              <p>
                Minha evolucao tem sido guiada por projetos praticos que unem interface, regra de
                negocio, persistencia de dados e publicacao. Isso me permite atuar tanto em paginas
                bem resolvidas quanto em aplicacoes com fluxo completo.
              </p>
              <p>
                Aqui eu apresento esse trabalho de forma direta: projetos reais, stacks que eu de
                fato utilizo e uma narrativa coerente com o que venho publicando e evoluindo no
                GitHub.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.title}
                  className="glass-panel rounded-[24px] p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
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
