const experiences = [
  {
    period: "Setembro de 2025 - o momento",
    title: "Analista de suporte de sistemas",
    company: "Include Sistemas",
    contract: "Estagio",
    location: "Presencial",
    description:
      "Atuacao em suporte de sistemas, auxiliando na resolucao de demandas operacionais e no acompanhamento de rotinas ligadas ao uso e sustentacao da plataforma.",
    techs: ["Suporte", "Sistemas", "Atendimento", "Operacao"],
  },
  {
    period: "Janeiro de 2022 - Fevereiro de 2026",
    title: "Auxiliar de escritorio contabil",
    company: "A Promessa",
    contract: "Meio periodo",
    location: "Presencial",
    description:
      "Experiencia com rotinas administrativas e organizacao de processos, desenvolvendo disciplina operacional, atencao a detalhes e acompanhamento de demandas do escritorio.",
    techs: ["Administrativo", "Organizacao", "Processos", "Rotina"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="section-shell">
        <div className="section-heading">
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Experiencia</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[200px] md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative grid gap-4 md:grid-cols-[200px_1fr]">
                <div className="pt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground md:text-right">
                  {exp.period}
                </div>

                <div className="absolute left-[-5px] top-2 hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:left-[196px] md:block" />

                <div className="glass-panel rounded-[24px] p-6 md:ml-10">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="mt-1 text-sm text-primary">
                        {exp.company} · {exp.contract}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{exp.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
