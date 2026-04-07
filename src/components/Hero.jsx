import { ThemeToggle } from './ThemeToggle'

const heroNavItems = [
  { href: '#projetos', label: 'Sites' },
  { href: '#contato', label: 'Contato' },
]

const heroTitleLines = ['Sites premium para empresas', 'que não podem parecer amadoras.']

const heroSubheadline =
  'Projetos sob medida com foco em clareza comercial, credibilidade e contato.'

const heroProofItems = [
  'Projetos reais publicados',
  'Design + código',
  'Estrutura para conversão',
]

export function Hero({ siteConfig, theme, onToggleTheme, featuredProject, heroRef }) {
  const projectName = featuredProject?.name ?? 'Nexus Soluções'
  const projectCategory = featuredProject?.category ?? 'Projeto publicado'
  const projectNiche = featuredProject?.niche ?? 'Site institucional'
  const projectOutcome =
    featuredProject?.cardOutcome ?? 'Site B2B com foco em autoridade e geração de contato.'
  const projectSummary =
    featuredProject?.cardSummary ?? 'Estrutura pensada para conversas comerciais.'
  const projectHref = featuredProject?.demoHref ?? '#projetos'
  const projectTarget = featuredProject?.demoTarget ?? undefined
  const projectRel = projectTarget === '_blank' ? 'noreferrer' : undefined

  return (
    <header className="hero" id="top" ref={heroRef}>
      <div className="container">
        <div className="hero__rail">
          <a className="hero__mark" href="#top" aria-label="Ir para o topo">
            <span className="hero__mark-badge">AS</span>

            <span className="hero__mark-copy">
              <strong>{siteConfig.name}</strong>
              <span>{siteConfig.location}</span>
            </span>
          </a>

          <div className="hero__rail-actions">
            <nav className="hero__nav" aria-label="Navegação principal">
              {heroNavItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        <div className="hero__grid">
          <div className="hero__content">
            <span className="hero__eyebrow">{`${siteConfig.name} | ${siteConfig.role}`}</span>
            <h1>
              {heroTitleLines.map((line) => (
                <span className="hero__title-line" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero__subheadline">{heroSubheadline}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#contato">
                Solicitar projeto
              </a>

              <a className="button button--ghost" href="#projetos">
                Ver sites
              </a>
            </div>

            <ul className="hero__proof" aria-label="Diferenciais do portfólio">
              {heroProofItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <article className="hero-preview hero-preview--compact">
              <div className="hero-preview__media">
                {featuredProject?.previewImage ? (
                  <img
                    className="hero-preview__image"
                    src={featuredProject.previewImage}
                    alt={featuredProject.previewAlt}
                  />
                ) : null}

                <div className="hero-preview__scrim" />

                <div className="hero-preview__top">
                  <span className="hero-preview__label">{projectCategory}</span>
                  <strong>{projectName}</strong>
                  <p>{projectNiche}</p>
                </div>
              </div>

              <div className="hero-preview__meta">
                <div className="hero-preview__copy">
                  <span className="hero-preview__caption">Projeto em destaque</span>
                  <strong>{projectOutcome}</strong>
                  <p>{projectSummary}</p>
                </div>

                <a
                  className="hero-preview__link"
                  href={projectHref}
                  target={projectTarget}
                  rel={projectRel}
                >
                  Abrir site
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </header>
  )
}
