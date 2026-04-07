import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'

export function ProjectsShowcase({ projects, contactEmail }) {
  return (
    <section className="section section--projects" id="templates">
      <div className="container">
        <SectionHeader
          eyebrow="Outras direções de projeto"
          title="Outras direções para nichos que pedem linguagem própria."
          description="A mesma base, aplicada a contextos completamente diferentes."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              contactEmail={contactEmail}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
