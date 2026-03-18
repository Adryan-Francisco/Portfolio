"use client"

import { technologies } from "@/lib/portfolio-data"

export function TechStack() {
  return (
    <section id="tecnologias" className="px-6 py-24">
      <div className="section-shell">
        <div className="section-heading">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Tecnologias</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="glass-panel group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-sm text-foreground">{tech.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
