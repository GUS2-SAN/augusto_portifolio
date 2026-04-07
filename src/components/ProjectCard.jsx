import { ProjectTemplateVisual } from './ProjectTemplateVisual'

export function ProjectCard({ project, index, variant = 'example' }) {
  const hasDemo = Boolean(project.demoHref)
  const primaryHref = hasDemo ? project.demoHref : undefined
  const primaryLabel = hasDemo ? project.demoLabel ?? 'Abrir site' : undefined
  const primaryTarget = hasDemo ? project.demoTarget : undefined
  const primaryRel = primaryTarget === '_blank' ? 'noreferrer' : undefined
  const showSecondaryAction = hasDemo && variant === 'live' && index < 2
  const secondaryHref = showSecondaryAction ? project.secondaryHref ?? '#contato' : undefined
  const secondaryLabel = showSecondaryAction ? 'Solicitar projeto' : undefined

  const style = {
    '--project-accent': project.palette.accent,
    '--project-accent-soft': project.palette.accentSoft,
    '--project-glow': project.palette.glow,
    '--project-border': project.palette.border,
    '--project-surface': project.palette.surface,
    '--project-panel': project.palette.panel,
    '--project-ink': project.palette.ink,
    '--project-shadow': project.palette.shadow,
    animationDelay: `${160 + index * 90}ms`,
  }

  return (
    <article
      className={`project-card project-card--uniform project-card--${project.theme} project-card--${variant}`}
      style={style}
    >
      <div className="project-card__aura" />

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
        </div>

        <h3>{project.name}</h3>
        {variant === 'example' ? <p className="project-card__niche">{project.niche}</p> : null}
        {project.cardOutcome ? <p className="project-card__outcome">{project.cardOutcome}</p> : null}

        {primaryHref || secondaryHref ? (
          <div className="project-card__actions">
            {primaryHref ? (
              <a
                className="button button--primary"
                href={primaryHref}
                target={primaryTarget}
                rel={primaryRel}
              >
                {primaryLabel}
              </a>
            ) : null}

            {secondaryHref ? (
              <a className="button button--ghost" href={secondaryHref}>
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="project-card__media">
        <ProjectTemplateVisual project={project} />
      </div>
    </article>
  )
}
