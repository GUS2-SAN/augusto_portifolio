export function ContactBlock({ siteConfig }) {
  return (
    <section className="section section--contact" id="contato">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-shell__copy">
            <span className="section-label">{siteConfig.closing.eyebrow}</span>
            <h2>{siteConfig.closing.title}</h2>
            <p>{siteConfig.closing.description}</p>

            <div className="contact-shell__actions">
              <a className="button button--primary" href={siteConfig.closing.primaryHref}>
                {siteConfig.closing.primaryLabel}
              </a>

              <a className="button button--ghost" href={siteConfig.closing.secondaryHref}>
                {siteConfig.closing.secondaryLabel}
              </a>
            </div>
          </div>

          <div className="contact-stack">
            <article className="contact-card contact-card--primary">
              <span className="contact-card__label">{siteConfig.closing.contactLabel}</span>
              <div className="contact-card__channels">
                <a className="contact-card__link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                <a className="contact-card__link" href={siteConfig.whatsappHref}>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <p>{siteConfig.responseTime}</p>
            </article>

            <article className="contact-card">
              <span className="contact-card__label">{siteConfig.closing.firstReplyLabel}</span>
              <ul className="contact-card__list">
                {siteConfig.closing.firstReplyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="contact-card">
              <span className="contact-card__label">{siteConfig.closing.highlightsLabel}</span>
              <ul className="contact-card__list">
                {siteConfig.closing.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
