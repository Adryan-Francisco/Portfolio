"use client"

import { Braces, Database, LayoutTemplate, Sparkles } from "lucide-react"

import { technologies } from "@/lib/portfolio-data"

const icons = [LayoutTemplate, Braces, Database]

export function TechStack() {
  return (
    <section id="tecnologias" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 h-56 bg-[radial-gradient(circle_at_center,rgba(88,196,171,0.12),transparent_68%)]" />

      <div className="section-shell">
        <div className="section-heading">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Tecnologias</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel relative overflow-hidden rounded-[30px] border-primary/10 p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(88,196,171,0.12),transparent_40%,transparent)]" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Stack principal
              </div>

              <div className="space-y-4">
                <h3 className="max-w-md text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Trabalho com stacks que aparecem nos meus projetos, nao com barras de porcentagem.
                </h3>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-[15px]">
                  Organizei as tecnologias pelo jeito que eu realmente construo produto: interface,
                  regra de negocio e entrega. Assim a leitura fica mais profissional e mais fiel ao
                  que voce encontra no meu GitHub.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-background/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    Foco hoje
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Aplicacoes web com frontend bem resolvido, integracao com API e persistencia de
                    dados.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-background/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    Direcao
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Evoluir cada projeto com mais consistencia visual, organizacao de codigo e
                    deploy limpo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {technologies.map((group, index) => {
              const Icon = icons[index]

              return (
                <article
                  key={group.title}
                  className="glass-panel group rounded-[26px] p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                          {group.eyebrow}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-foreground">
                          {group.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex min-w-fit items-center rounded-full border border-primary/15 bg-primary/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                      Dominio pratico
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-white/10 bg-background/50 px-3 py-2 font-mono text-xs text-foreground transition-colors group-hover:border-primary/20 group-hover:text-primary"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
