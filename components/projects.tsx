import { ExternalLink, Github } from "lucide-react"

import { featuredProjects, profile } from "@/lib/portfolio-data"

export function Projects() {
  const mainProjects = featuredProjects.filter((project) => project.featured)
  const moreProjects = featuredProjects.filter((project) => !project.featured)

  return (
    <section id="projetos" className="relative px-6 py-24">
      <div className="section-shell">
        <div className="section-heading">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Projetos principais</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {mainProjects.map((project, index) => (
            <article
              key={project.title}
              className={`glass-panel group relative flex flex-col overflow-hidden rounded-[30px] p-7 transition-all hover:-translate-y-1 hover:border-primary/40 ${
                index === 0 ? "xl:col-span-2" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(73,243,208,0.05),transparent_42%)]" />
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                    Projeto em destaque
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-background/45 p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    aria-label={`Ver codigo fonte de ${project.title}`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-background/45 p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      aria-label={`Ver demonstracao de ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-8 flex-1 text-sm leading-7 text-muted-foreground md:text-[15px]">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="glass-panel mt-12 rounded-[30px] p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                Repositorios adicionais
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">Mais projetos publicados</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                Outros trabalhos que reforcam minha experiencia pratica com interfaces, CRUDs,
                regras de negocio e aplicacoes web publicadas.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Ver todos no GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {moreProjects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[24px] border border-white/10 bg-background/40 p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <p className="mb-2 text-base font-semibold text-foreground">{project.title}</p>
                <p className="mb-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <p className="font-mono text-xs text-primary">{project.techs.join(" - ")}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
