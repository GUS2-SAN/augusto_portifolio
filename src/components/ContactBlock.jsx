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

          <aside className="contact-panel" aria-label="Canais de contato">
            <a className="contact-panel__link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a className="contact-panel__link" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>

            <ul className="contact-panel__list">
              {siteConfig.closing.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
