import { useRef } from 'react'
import { RevealOnScroll } from './RevealOnScroll'

function SecondaryProjectTile({ project, delay = 0 }) {
  return (
    <RevealOnScroll
      as="article"
      className="project-slider__slide"
      delay={delay}
      style={{
        '--tile-tone-a': project.tones[0],
        '--tile-tone-b': project.tones[1],
        '--tile-tone-c': project.tones[2],
      }}
    >
      <a className="client-example-card" href={project.href}>
        <div className="client-example-card__copy">
          <span className="client-example-card__pill">{project.eyebrow}</span>
          <h3>{project.title}</h3>
          <strong className="client-example-card__segment">{project.segment}</strong>
          <p>{project.summary}</p>
        </div>

        <div className="client-example-card__mockup" aria-hidden="true">
          <div className="client-example-card__chrome">
            <span />
            <span />
            <span />
          </div>

          <div className="client-example-card__screen">
            <span>{project.previewEyebrow}</span>
            <strong>{project.previewTitle}</strong>
          </div>
        </div>
      </a>
    </RevealOnScroll>
  )
}

export function PortfolioSecondaryShowcase({ projects }) {
  const railRef = useRef(null)

  const scrollProjects = (direction) => {
    const rail = railRef.current

    if (!rail) {
      return
    }

    rail.scrollBy({
      left: direction * Math.max(rail.clientWidth * 0.82, 320),
      behavior: 'smooth',
    })
  }

  return (
    <section className="portfolio-section portfolio-section--secondary">
      <div className="section-shell">
        <RevealOnScroll className="section-intro section-intro--secondary">
          <div className="section-intro__row">
            <div>
              <span className="section-intro__eyebrow">Mais exemplos</span>
              <h2>Outros projetos</h2>
              <p>A mesma base aplicada a nichos diferentes.</p>
            </div>

            <div className="slider-controls" aria-label="Controles do slider">
              <button
                className="slider-control"
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label="Ver projetos anteriores"
              >
                Anterior
              </button>
              <button
                className="slider-control"
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label="Ver proximos projetos"
              >
                Proximo
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div className="project-rail" ref={railRef} role="list" aria-label="Outros projetos">
          {projects.map((project, index) => (
            <SecondaryProjectTile delay={index * 90} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
