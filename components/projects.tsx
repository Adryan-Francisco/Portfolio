import { ArrowUpRight, Github, Lock } from "lucide-react"

import type { Content, LocalizedProject } from "@/lib/content"
import { profile, type ProjectSource } from "@/lib/portfolio-data"
import { projectSources } from "@/lib/portfolio-data"
import { SectionHeader } from "@/components/ui/section-header"
import { TechBadge } from "@/components/ui/tech-badge"

/** Desafio e decisão técnica. Só renderiza quando o projeto tem uma narrativa real. */
function ProjectNotes({ project, content }: { readonly project: LocalizedProject; readonly content: Content }) {
  if (!project.challenge && !project.approach) return null

  return (
    <dl className="project-notes">
      {project.challenge && (
        <div>
          <dt>{content.projects.challengeLabel}</dt>
          <dd>{project.challenge}</dd>
        </div>
      )}
      {project.approach && (
        <div>
          <dt>{content.projects.approachLabel}</dt>
          <dd>{project.approach}</dd>
        </div>
      )}
    </dl>
  )
}

interface ProjectProps {
  readonly project: ProjectSource
  readonly content: Content
}

function FeaturedProject({ project, content }: ProjectProps) {
  const { projects } = content
  const localized = projects.items[project.id]

  return (
    <article className="featured-project">
      <div className="featured-copy">
        <div className="project-meta">
          <span>{projects.featuredLabel}</span>
          <span>{localized.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{localized.description}</p>
        <ul className="feature-list">
          {projects.featuredHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ProjectNotes project={localized} content={content} />
        <div className="project-techs">
          {project.techs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div className="project-actions">
          {project.live && (
            <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">
              {projects.viewProject} <ArrowUpRight />
            </a>
          )}
          {project.github ? (
            <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
          ) : (
            <span className="repo-note">
              <Lock /> {projects.privateRepoNote}
            </span>
          )}
        </div>
      </div>

      <div className="product-preview" aria-label={projects.previewAlt}>
        <div className="preview-browser">
          <i />
          <i />
          <i />
          <span>appbarberflow.com.br / dashboard</span>
        </div>
        <div className="preview-shell">
          <aside>
            <strong>BF</strong>
            <i className="selected" />
            <i />
            <i />
            <i />
            <i />
          </aside>
          <div className="preview-content">
            <div className="preview-heading">
              <div>
                <span>{projects.preview.overview}</span>
                <strong>{projects.preview.greeting}</strong>
              </div>
              <span className="preview-action">{projects.preview.action}</span>
            </div>
            <div className="preview-metrics">
              {projects.preview.metrics.map((metric) => (
                <div key={metric.title}>
                  <span>{metric.label}</span>
                  <strong>{metric.title}</strong>
                  <small>{metric.note}</small>
                </div>
              ))}
            </div>
            <div className="preview-lower">
              <div className="preview-chart">
                <span>{projects.preview.chartLabel}</span>
                <div className="bars">
                  {[42, 70, 52, 86, 62, 94, 76].map((height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="preview-agenda">
                <span>{projects.preview.layersLabel}</span>
                {projects.preview.layers.map((layer) => (
                  <p key={layer}>
                    <i />
                    <b>{layer}</b>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project, content, index }: ProjectProps & { readonly index: number }) {
  const { projects } = content
  const localized = projects.items[project.id]

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span>0{index + 1}</span>
        <span>{localized.type}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{localized.description}</p>
      <ProjectNotes project={localized} content={content} />
      <div className="project-techs">
        {project.techs.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>
      <div className="project-card-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            {projects.demoLabel} <ArrowUpRight />
          </a>
        )}
      </div>
    </article>
  )
}

export function Projects({ content }: { readonly content: Content }) {
  const { projects } = content
  const featured = projectSources.find((project) => project.featured)
  const secondary = projectSources.filter((project) => !project.featured)

  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <SectionHeader index="03" eyebrow={projects.eyebrow} title={projects.title} description={projects.description} />
        {featured && <FeaturedProject project={featured} content={content} />}
        <div className="secondary-heading">
          <h3>{projects.secondaryTitle}</h3>
          <p>{projects.secondaryDescription}</p>
        </div>
        <div className="projects-grid">
          {secondary.map((project, index) => (
            <ProjectCard project={project} content={content} index={index} key={project.id} />
          ))}
        </div>
        <a className="github-cta" href={profile.github} target="_blank" rel="noreferrer">
          <span>
            <Github /> github.com/{profile.githubUsername}
          </span>
          <strong>
            {projects.githubCta} <ArrowUpRight />
          </strong>
        </a>
      </div>
    </section>
  )
}
