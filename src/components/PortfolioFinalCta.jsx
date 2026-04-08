import { RevealOnScroll } from './RevealOnScroll'

function ActionLink({ action, className }) {
  return (
    <a
      className={className}
      href={action.href}
      {...(action.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {action.label}
    </a>
  )
}

export function PortfolioFinalCta({ cta }) {
  return (
    <section className="portfolio-section portfolio-section--cta" id="contato">
      <div className="section-shell">
        <RevealOnScroll className="final-cta">
          <span className="final-cta__eyebrow">{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>

          <div className="final-cta__actions">
            <ActionLink action={cta.primaryAction} className="button button--primary" />
            <ActionLink action={cta.secondaryAction} className="button button--secondary" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
