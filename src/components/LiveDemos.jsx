import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'

export function LiveDemos({ demos, contactEmail }) {
  return (
    <section className="section section--projects" id="projetos">
      <div className="container">
        <SectionHeader
          eyebrow="Sites reais navegáveis"
          title="Projetos publicados para ver na prática."
          description="Explore os projetos e veja como cada estrutura responde a um tipo de negócio."
        />

        <div className="projects-grid">
          {demos.map((project, index) => (
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
