import { PortfolioProjectSpotlight } from './PortfolioProjectSpotlight'
import { RevealOnScroll } from './RevealOnScroll'

export function PortfolioPrimaryShowcase({ projects }) {
  return (
    <section className="portfolio-section portfolio-section--showcase" id="projetos">
      <div className="section-shell">
        <RevealOnScroll className="section-intro section-intro--compact">
          <span className="section-intro__eyebrow">Showcase principal</span>
          <h2>Abra os sites e confira de perto os projetos publicados.</h2>
          <p>
            Veja no ar como cada interface foi desenhada para transmitir nivel, clareza e
            percepcao premium.
          </p>
        </RevealOnScroll>

        <div className="project-spotlights">
          {projects.map((project, index) => (
            <PortfolioProjectSpotlight
              delay={index * 110}
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
