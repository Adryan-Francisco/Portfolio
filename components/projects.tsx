import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"

import { featuredProjects, profile, type Project } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"
import { TechBadge } from "@/components/ui/tech-badge"

function FeaturedProject({ project }: { readonly project: Project }) {
  return (
    <article className="featured-project">
      <div className="featured-copy">
        <div className="project-meta"><span>Produto em produção</span><span>{project.type}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="feature-list">
          <li>Agenda, clientes e financeiro em uma operação única</li>
          <li>Arquitetura SaaS com áreas autenticadas e módulos por plano</li>
          <li>Experiência responsiva para gestão dentro e fora da barbearia</li>
        </ul>
        <div className="project-techs">{project.techs.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
        <div className="project-actions">
          {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Ver projeto <ArrowUpRight /></a>}
          <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
        </div>
      </div>

      <figure className="product-preview">
        <div className="preview-browser" aria-hidden="true">
          <i /><i /><i />
          <span>appbarberflow.com.br / dashboard</span>
          <strong>Interface atual</strong>
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
            sizes="(max-width: 1050px) 90vw, 58vw"
            alt="Dashboard atual do BarberFlow com agenda, receita, próximos atendimentos e serviços cadastrados"
          />
        </a>
        <figcaption>
          <span><i /> Tela real do produto</span>
          <span>Dados demonstrativos</span>
        </figcaption>
      </figure>
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
