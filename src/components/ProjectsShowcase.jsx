import { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'

const INITIAL_PROJECTS = 4

export function ProjectsShowcase({ projects }) {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS)

  return (
    <section className="section section--projects section--projects-secondary" id="outros-projetos">
      <div className="container">
        <SectionHeader
          eyebrow="Mais exemplos"
          title="Outros projetos"
          description="A mesma base aplicada a nichos diferentes."
        />

        <div className="projects-grid" id="projects-showcase-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant="example" />
          ))}
        </div>

        {projects.length > INITIAL_PROJECTS ? (
          <div className="projects-showcase__footer">
            <button
              className="button button--ghost section-toggle"
              type="button"
              aria-controls="projects-showcase-grid"
              aria-expanded={showAll}
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll ? 'Ver menos projetos' : 'Ver mais projetos'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
