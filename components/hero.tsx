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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(100,200,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,180,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Portfolio profissional
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm text-primary">Adryan Thiago de Oliveira Francisco</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl">
              Desenvolvedor full stack focado em produtos web claros, modernos e bem construidos.
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

          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Reuno aqui os projetos que melhor representam minha evolucao tecnica em React,
            TypeScript, .NET e integracoes com banco de dados. Meu foco e transformar estudo em
            entrega real, com interfaces cuidadas e codigo organizado.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver projetos principais
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Conversar no LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
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

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item.title} className="glass-panel rounded-2xl p-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  {item.title}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-panel rounded-[28px] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Destaque atual
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              {liveProject?.title ?? "Projeto em producao"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {liveProject?.description ??
                "Projeto publicado com foco em experiencia de produto, estrutura profissional e deploy online."}
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
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Ver demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <a
                href={liveProject?.github ?? profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Codigo no GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Stack
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                React, Next.js, TypeScript, .NET e Supabase.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Foco
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Interfaces objetivas, CRUDs bem estruturados e evolucao continua.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Presenca
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Projetos ativos e portfolio conectado ao GitHub.
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
