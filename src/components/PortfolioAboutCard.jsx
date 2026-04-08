import { RevealOnScroll } from './RevealOnScroll'

function SocialIcon({ kind }) {
  if (kind === 'gmail') {
    return (
      <svg aria-hidden="true" className={`about-card__icon about-card__icon--${kind}`} viewBox="0 0 24 24">
        <path d="M3 6.5 12 13l9-6.5" />
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
      </svg>
    )
  }

  if (kind === 'github') {
    return (
      <svg aria-hidden="true" className={`about-card__icon about-card__icon--${kind}`} viewBox="0 0 24 24">
        <path d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-.9-2.7-.9-.4-.8-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.8-.9-3.8-4.1 0-.9.3-1.7.8-2.3-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.8a7.8 7.8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.2.2 2 .1 2.2.5.6.8 1.4.8 2.3 0 3.2-2 3.9-3.8 4.1.3.2.6.8.6 1.5v2.2c0 .2.1.5.5.4a8.2 8.2 0 0 0-2.6-16Z" />
      </svg>
    )
  }

  if (kind === 'linkedin') {
    return (
      <svg aria-hidden="true" className={`about-card__icon about-card__icon--${kind}`} viewBox="0 0 24 24">
        <path d="M7.2 9.4H4.6V19h2.6V9.4Zm.2-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        <path d="M10.1 9.4h2.5v1.3h.1c.3-.6 1.2-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V19h-2.6v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-2.6V9.4Z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" className={`about-card__icon about-card__icon--${kind}`} viewBox="0 0 24 24">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
      <path d="M16.7 7.5h.01" />
      <path d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2Z" />
    </svg>
  )
}

function SocialLink({ social }) {
  return (
    <a
      aria-label={social.label}
      className="about-card__social"
      href={social.href}
      title={social.label}
      {...(social.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <SocialIcon kind={social.icon} />
    </a>
  )
}

export function PortfolioAboutCard({ about }) {
  return (
    <section className="portfolio-section portfolio-section--about" id="contato">
      <div className="section-shell">
        <RevealOnScroll className="about-card">
          <div className="about-card__media">
            <img
              alt={about.imageAlt}
              className="about-card__image"
              decoding="async"
              loading="lazy"
              src={about.image}
            />
          </div>

          <div className="about-card__content">
            <span className="about-card__eyebrow">{about.eyebrow}</span>
            <h2>{about.title}</h2>
            <p>{about.description}</p>

            <div className="about-card__directs">
              <a className="about-card__phone" href={about.phone.href}>
                <span>{about.phone.label}</span>
                <strong>{about.phone.value}</strong>
              </a>

              <a
                className="about-card__phone"
                href={about.email.href}
                {...(about.email.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span>{about.email.label}</span>
                <strong>{about.email.value}</strong>
              </a>
            </div>

            <div className="about-card__socials" aria-label="Canais digitais">
              {about.socials.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
