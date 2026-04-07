import { ProjectTemplateVisual } from './ProjectTemplateVisual'

export function ProjectCard({ project, index, contactEmail }) {
  const defaultProjectSubject = encodeURIComponent(`Solicitar projeto inspirado em ${project.name}`)
  const primaryHref = project.demoHref ?? `mailto:${contactEmail}?subject=${defaultProjectSubject}`
  const primaryLabel = project.demoLabel ?? 'Solicitar projeto'
  const primaryTarget = project.demoTarget
  const primaryRel = primaryTarget === '_blank' ? 'noreferrer' : undefined
  const secondaryHref = project.secondaryHref ?? '#contato'
  const secondaryLabel = project.secondaryLabel ?? 'Pedir proposta'

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
      className={`project-card project-card--uniform project-card--${project.theme}`}
      style={style}
    >
      <div className="project-card__aura" />

      <div className="project-card__media">
        <ProjectTemplateVisual project={project} />
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <strong>{project.niche}</strong>
        </div>

        <h3>{project.name}</h3>
        {project.cardOutcome ? <p className="project-card__outcome">{project.cardOutcome}</p> : null}
        <p className="project-card__summary">{project.cardSummary}</p>

        <ul
          className="project-card__feature-list"
          aria-label={`Benefícios comerciais do projeto ${project.name}`}
        >
          {project.cardFeatures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a className="button button--ghost" href={secondaryHref}>
            {secondaryLabel}
          </a>
          <a
            className="button button--primary"
            href={primaryHref}
            target={primaryTarget}
            rel={primaryRel}
          >
            {primaryLabel}
          </a>
        </div>
      </div>
    </article>
  )
}
