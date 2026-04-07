import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'

export function LiveDemos({ demos }) {
  return (
    <section className="section section--projects" id="projetos">
      <div className="container">
        <SectionHeader
          eyebrow="Projetos publicados"
          title="Sites prontos para abrir."
          description="Abra os projetos e veja na prática."
        />

        <div className="projects-grid">
          {demos.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant="live" />
          ))}
        </div>
      </div>
    </section>
  )
}
