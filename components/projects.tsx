import { ArrowUpRight, Github } from "lucide-react"

import { featuredProjects, profile, type Project } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"
import { TechBadge } from "@/components/ui/tech-badge"

function FeaturedProject({ project }: { readonly project: Project }) {
  return (
    <article className="featured-project">
      <div className="featured-copy">
        <div className="project-meta"><span>Case principal</span><span>{project.type}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="feature-list">
          <li>Aplicação web orientada à operação</li>
          <li>Gestão organizada em uma experiência única</li>
          <li>Interface responsiva e publicação em ambiente web</li>
        </ul>
        <div className="project-techs">{project.techs.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
        <div className="project-actions">
          {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Ver projeto <ArrowUpRight /></a>}
          <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
        </div>
      </div>

      <div className="product-preview" aria-label="Representação da interface do BarberFlow">
        <div className="preview-browser"><i /><i /><i /><span>barberflow.app / dashboard</span></div>
        <div className="preview-shell">
          <aside><strong>BF</strong><i className="selected" /><i /><i /><i /><i /></aside>
          <div className="preview-content">
            <div className="preview-heading"><div><span>Visão geral</span><strong>Boa tarde, Adryan</strong></div><span className="preview-action">+ Agendamento</span></div>
            <div className="preview-metrics">
              <div><span>Módulo</span><strong>Agenda</strong><small>organização diária</small></div>
              <div><span>Módulo</span><strong>Clientes</strong><small>gestão centralizada</small></div>
              <div><span>Visão</span><strong>Operação</strong><small>painel integrado</small></div>
            </div>
            <div className="preview-lower">
              <div className="preview-chart"><span>Desempenho semanal</span><div className="bars">{[42, 70, 52, 86, 62, 94, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
              <div className="preview-agenda"><span>Camadas</span><p><i /><b>Interface</b></p><p><i /><b>Regras de negócio</b></p><p><i /><b>Persistência</b></p></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project, index }: { readonly project: Project; readonly index: number }) {
  return (
    <article className="project-card">
      <div className="project-card-top"><span>0{index + 1}</span><span>{project.type}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-techs">{project.techs.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
      <div className="project-card-links">
        <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Demo <ArrowUpRight /></a>}
      </div>
    </article>
  )
}

export function Projects() {
  const featured = featuredProjects.find((project) => project.featured)
  const secondary = featuredProjects.filter((project) => !project.featured)

  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <SectionHeader index="03" eyebrow="Projetos selecionados" title="Sistemas, não apenas interfaces." description="Projetos que demonstram integração entre produto, código, dados e entrega." />
        {featured && <FeaturedProject project={featured} />}
        <div className="secondary-heading"><h3>Outros projetos</h3><p>Explorações práticas em diferentes partes da stack.</p></div>
        <div className="projects-grid">{secondary.map((project, index) => <ProjectCard project={project} index={index} key={project.github} />)}</div>
        <a className="github-cta" href={profile.github} target="_blank" rel="noreferrer"><span><Github /> github.com/{profile.githubUsername}</span><strong>Explorar todos os repositórios <ArrowUpRight /></strong></a>
      </div>
    </section>
  )
}
