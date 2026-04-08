import { useEffect, useRef } from 'react'

function ExternalAwareLink({ href, children, className, external = false }) {
  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m12 3 2.4 6.1 6.6.5-5 4 1.6 6.4-5.6-3.4L6.4 20l1.6-6.4-5-4 6.6-.5Z" />
    </svg>
  )
}

export function PortfolioHero({
  hero,
  isCustomizationOpen,
  navigation,
  onOpenCustomization,
}) {
  const heroRef = useRef(null)

  useEffect(() => {
    const element = heroRef.current

    if (!element || typeof window === 'undefined') {
      return undefined
    }

    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    let frameId = 0
    const pointer = { x: 74, y: 24 }

    const commitPointer = () => {
      frameId = 0
      element.style.setProperty('--pointer-x', `${pointer.x}%`)
      element.style.setProperty('--pointer-y', `${pointer.y}%`)
    }

    const queuePointerCommit = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(commitPointer)
      }
    }

    const syncScrollDrift = () => {
      const rect = element.getBoundingClientRect()
      const drift = Math.max(-32, Math.min(56, rect.top * -0.08))
      element.style.setProperty('--hero-drift', `${drift.toFixed(2)}px`)
    }

    const handlePointerMove = (event) => {
      if (!supportsFinePointer) {
        return
      }

      const rect = element.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 100
      pointer.y = ((event.clientY - rect.top) / rect.height) * 100
      queuePointerCommit()
    }

    const handlePointerLeave = () => {
      pointer.x = 74
      pointer.y = 24
      queuePointerCommit()
    }

    syncScrollDrift()
    handlePointerLeave()

    if (supportsFinePointer) {
      element.addEventListener('pointermove', handlePointerMove)
      element.addEventListener('pointerleave', handlePointerLeave)
    }

    window.addEventListener('scroll', syncScrollDrift, { passive: true })
    window.addEventListener('resize', syncScrollDrift)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      if (supportsFinePointer) {
        element.removeEventListener('pointermove', handlePointerMove)
        element.removeEventListener('pointerleave', handlePointerLeave)
      }

      window.removeEventListener('scroll', syncScrollDrift)
      window.removeEventListener('resize', syncScrollDrift)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero__background" aria-hidden="true">
        <span className="hero__orb hero__orb--violet" />
        <span className="hero__orb hero__orb--blue" />
        <span className="hero__orb hero__orb--amber" />
      </div>

      <div className="hero__container">
        <header className="hero__topbar">
          <a className="hero__brand" href="#top" aria-label="Voltar para o topo">
            <span className="hero__brand-mark">AS</span>
            <span className="hero__brand-copy">
              <strong>Augusto Santana</strong>
              <small>Premium web experiences</small>
            </span>
          </a>

          <div className="hero__topbar-actions">
            <nav className="hero__nav" aria-label="Navegacao principal">
              {navigation.map((item) => (
                <ExternalAwareLink
                  key={item.label}
                  className="hero__nav-link"
                  href={item.href}
                  external={item.external}
                >
                  {item.label}
                </ExternalAwareLink>
              ))}
            </nav>

            <button
              aria-expanded={isCustomizationOpen}
              aria-label="Abrir personalizacao"
              className={`hero__fx-button ${isCustomizationOpen ? 'is-active' : ''}`}
              onClick={onOpenCustomization}
              type="button"
            >
              <StarIcon />
            </button>

            <ExternalAwareLink
              className="button button--primary hero__topbar-cta"
              href={hero.topbarCta.href}
              external={hero.topbarCta.external}
            >
              {hero.topbarCta.label}
            </ExternalAwareLink>
          </div>
        </header>

        <div className="hero__layout">
          <div className="hero__copy">
            <span className="hero__eyebrow">{hero.eyebrow}</span>

            <h1 className="hero__title">
              <span className="hero__title-line">Sites premium</span>
              <span className="hero__title-line">para empresas que nao podem</span>
              <span className="hero__title-line">parecer amadoras.</span>
            </h1>

            <p className="hero__description">{hero.description}</p>

            <div className="hero__actions">
              <ExternalAwareLink
                className="button button--primary"
                href={hero.primaryCta.href}
                external={hero.primaryCta.external}
              >
                {hero.primaryCta.label}
              </ExternalAwareLink>

              <ExternalAwareLink
                className="button button--secondary"
                href={hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </ExternalAwareLink>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__device">
              <div className="hero__device-chrome">
                <span />
                <span />
                <span />
              </div>

              <div className="hero__device-screen">
                <img
                  alt={hero.featured.imageAlt}
                  className="hero__device-image"
                  decoding="async"
                  fetchPriority="high"
                  src={hero.featured.image}
                />
                <div className="hero__device-shade" />

                <div className="hero__device-copy">
                  <span>{hero.featured.label}</span>
                  <strong>{hero.featured.title}</strong>
                  <p>{hero.featured.summary}</p>
                </div>
              </div>
            </div>

            <aside className="hero__glass hero__glass--metrics" aria-label="Metricas em destaque">
              {hero.featured.metrics.map((metric) => (
                <div className="hero__metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </aside>

            <aside className="hero__glass hero__glass--status" aria-label="Status do estudio">
              <span>Disponibilidade</span>
              <strong>Projetos seletivos para 2026</strong>
              <p>Design, motion e front-end com acabamento de produto.</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
