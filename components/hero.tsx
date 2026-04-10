"use client"

import { ArrowDown, ExternalLink, Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

import { featuredProjects, profile, roles, strengths } from "@/lib/portfolio-data"

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      },
      isDeleting ? 35 : 70
    )

    return () => clearTimeout(timeout)
  }, [currentRole, displayText, isDeleting])

  const liveProject = featuredProjects.find((project) => project.live)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
      <div className="mesh-overlay pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-[10%] top-24 h-[32rem] w-[32rem] rounded-full bg-primary/14 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-6">
          <div className="section-kicker w-fit">
            Portfolio profissional
          </div>

          <div className="space-y-5">
            <p className="font-mono text-sm text-primary/90">Adryan Thiago de Oliveira Francisco</p>
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl xl:text-[5.4rem]">
              Desenvolvo produtos web com clareza, estrutura e foco em entrega.
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            <p className="font-mono text-lg text-muted-foreground md:text-xl">
              {displayText}
              <span
                className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary"
                style={{ height: "1.2em" }}
              />
            </p>
          </div>

          <p className="max-w-2xl text-[15px] leading-8 text-muted-foreground md:text-lg">
            Reuni aqui projetos que refletem meu trabalho com React, .NET, DDD e deploy, sempre
            buscando interfaces bem resolvidas e sistemas organizados.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(73,243,208,0.22)] transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Ver projetos principais
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/55 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              Conversar no LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-background/50 p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-background/50 p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item.title} className="glass-panel rounded-[24px] p-5 transition-all hover:-translate-y-1 hover:border-primary/35">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  {item.title}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-panel relative overflow-hidden rounded-[32px] p-7">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(73,243,208,0.08),transparent_38%)]" />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Destaque atual
            </p>
            <h2 className="relative text-2xl font-semibold text-foreground">
              {liveProject?.title ?? "Projeto em producao"}
            </h2>
            <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
              {liveProject?.description ??
                "Projeto publicado com foco em experiencia de produto, arquitetura organizada e deploy online."}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {(liveProject?.techs ?? []).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {liveProject?.live && (
                <a
                  href={liveProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Ver demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <a
                href={liveProject?.github ?? profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                Codigo no GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-[24px] p-5 transition-all hover:-translate-y-1 hover:border-primary/35">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Stack
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                React, Next.js, TypeScript e .NET.
              </p>
            </div>
            <div className="glass-panel rounded-[24px] p-5 transition-all hover:-translate-y-1 hover:border-primary/35">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Arquitetura
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                DDD, APIs REST e organizacao por camadas.
              </p>
            </div>
            <div className="glass-panel rounded-[24px] p-5 transition-all hover:-translate-y-1 hover:border-primary/35">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Entrega
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Deploy com Vercel, GitHub e VPS.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
