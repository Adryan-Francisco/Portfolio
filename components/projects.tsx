import Image from "next/image"
import { Github } from "lucide-react"

import { featuredProjects, profile, type Project } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"
import { TechBadge } from "@/components/ui/tech-badge"

const MARQUEE_REPEATS = 8

function ProjectMarquee({ title }: { readonly title: string }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: MARQUEE_REPEATS }, (_, index) => <span key={index}>{title} ↗</span>)}
      </div>
    </div>
  )
}

function FeaturedProject({ project }: { readonly project: Project }) {
  return (
    <article className="featured-project" data-reveal>
      <figure className="product-preview">
        <div className="preview-browser" aria-hidden="true">
          <i /><i /><i />
          <span>appbarberflow.com.br / dashboard</span>
        </div>
        <a
          className="preview-image-link"
          href={project.live ?? project.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir o BarberFlow em uma nova aba"
        >
          <Image
            className="preview-image"
            src="/projects/barberflow-dashboard-current.png"
            width={1440}
            height={900}
            sizes="(max-width: 1100px) 92vw, 60vw"
            alt="Dashboard atual do BarberFlow com agenda, receita, próximos atendimentos e serviços cadastrados"
          />
        </a>
      </figure>

      <div className="featured-copy">
        <div className="project-meta mono"><span>Produto em produção</span><span>{project.type}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="feature-list">
          <li>Agenda, clientes e financeiro em uma operação única</li>
          <li>Arquitetura SaaS com áreas autenticadas e módulos por plano</li>
          <li>Experiência responsiva para gestão dentro e fora da barbearia</li>
        </ul>
        <div className="project-techs">{project.techs.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
        <div className="project-actions">
          {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Ver projeto <span className="arrow" aria-hidden="true">↗</span></a>}
          <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
        </div>
      </div>
    </article>
  )
}

function ProjectRow({ project, index }: { readonly project: Project; readonly index: number }) {
  return (
    <article className="project-row">
      <span className="row-index mono">{String(index + 1).padStart(2, "0")}</span>
      <h4>
        <a href={project.github} target="_blank" rel="noreferrer">{project.title}</a>
        <small>{project.type}</small>
      </h4>
      <p>
        {project.description}
        {project.live && <> <a className="demo-link" href={project.live} target="_blank" rel="noreferrer">Ver demo</a></>}
      </p>
      <div className="project-techs">{project.techs.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
      <span className="row-arrow" aria-hidden="true">↗</span>
    </article>
  )
}

export function Projects() {
  const featured = featuredProjects.find((project) => project.featured)
  const secondary = featuredProjects.filter((project) => !project.featured)

  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <SectionHeader
          index="01"
          label="Projetos selecionados"
          aside="Produto, código, dados e entrega."
          title={["Sistemas,", "não apenas interfaces."]}
          outlineLine={1}
        />
      </div>

      {featured && <ProjectMarquee title={featured.title} />}

      <div className="container">
        {featured && <FeaturedProject project={featured} />}

        <div className="list-heading">
          <h3>Outros projetos</h3>
          <p>Explorações práticas em diferentes partes da stack.</p>
        </div>
        <div className="projects-list" data-reveal>
          {secondary.map((project, index) => <ProjectRow project={project} index={index} key={project.github} />)}
        </div>

        <a className="github-cta" href={profile.github} target="_blank" rel="noreferrer">
          <span><Github /> github.com/{profile.githubUsername}</span>
          <strong>Explorar todos os repositórios <span className="arrow" aria-hidden="true">↗</span></strong>
        </a>
      </div>
    </section>
  )
}
