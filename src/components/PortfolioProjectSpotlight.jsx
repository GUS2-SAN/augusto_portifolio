import { RevealOnScroll } from './RevealOnScroll'

function ProjectLink({ project }) {
  return (
    <a
      className="button button--secondary button--with-icon"
      href={project.href}
      {...(project.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {project.buttonLabel}
    </a>
  )
}

export function PortfolioProjectSpotlight({ project, delay = 0 }) {
  return (
    <RevealOnScroll
      as="article"
      className="project-spotlight"
      delay={delay}
      style={{
        '--spotlight-accent': project.accent,
        '--spotlight-glow': project.glow,
        '--spotlight-surface': project.surface,
      }}
    >
      <div className="project-spotlight__visual">
        <div className="project-spotlight__halo" aria-hidden="true" />

        <div className="project-frame">
          <div className="project-frame__chrome">
            <span />
            <span />
            <span />
          </div>

          <div className="project-frame__viewport">
            <img
              alt={project.imageAlt}
              className="project-frame__image"
              decoding="async"
              loading="lazy"
              src={project.image}
            />
            <div className="project-frame__scrim" />
          </div>
        </div>
      </div>

      <div className="project-spotlight__copy">
        <span className="project-spotlight__eyebrow">{project.eyebrow}</span>

        <h2>{project.title}</h2>
        <p className="project-spotlight__summary">{project.summary}</p>

        <div className="project-spotlight__actions">
          <ProjectLink project={project} />
        </div>
      </div>
    </RevealOnScroll>
  )
}
