import { ThemeToggle } from './ThemeToggle'

const heroNavItems = [
  { href: '#autoridade', label: 'Autoridade' },
  { href: '#projetos', label: 'Sites' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
]

const heroTitleLines = [
  'Sites premium',
  'para empresas que não',
  'podem parecer amadoras.',
]

const heroSubheadline =
  'Projetos sob medida com foco em clareza comercial, credibilidade e contato.'

const heroProofItems = [
  'Projetos reais publicados',
  'Design + código integrados',
  'Estrutura orientada à conversão',
]

const projectPreviewNav = ['Home', 'Sobre', 'Serviços', 'Cases', 'Contato']

export function Hero({ siteConfig, theme, onToggleTheme, featuredProject, heroRef }) {
  const projectName = featuredProject?.name ?? 'Nexus Soluções'
  const projectNiche = featuredProject?.niche ?? 'Site institucional'
  const projectTitle =
    featuredProject?.visualTitle ??
    'Presença corporativa pronta para abrir conversa e gerar confiança.'
  const projectCopy =
    featuredProject?.visualCopy ??
    'Site pensado para operações de serviço que precisam transmitir maturidade, clareza e segurança desde a primeira dobra.'
  const projectBadge = featuredProject?.previewBadge ?? 'Projeto real publicado'
  const projectHref = featuredProject?.demoHref ?? '#projetos'
  const projectTarget = featuredProject?.demoTarget ?? undefined
  const projectRel = projectTarget === '_blank' ? 'noreferrer' : undefined
  const previewStats = (featuredProject?.previewStats ?? heroProofItems).slice(0, 3)
  const projectLogo = projectName
    .split(' ')
    .slice(0, 2)
    .map((item) => item[0]?.toUpperCase())
    .join('')

  return (
    <header className="hero" id="top" ref={heroRef}>
      <div className="container">
        <div className="hero__rail">
          <a className="hero__mark" href="#top" aria-label="Ir para o topo">
            <span className="hero__mark-badge">AS</span>

            <span className="hero__mark-copy">
              <strong>Portfólio web</strong>
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
                Explorar sites
              </a>
            </div>

            <ul className="hero__proof" aria-label="Diferenciais do portfólio">
              {heroProofItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-glow hero__visual-glow--amber" />
            <div className="hero__visual-glow hero__visual-glow--indigo" />

            <article className="hero-preview hero-preview--business">
              <div className="hero-preview__top">
                <span className="hero-preview__label">Projeto publicado</span>
                <strong>{projectName}</strong>
              </div>

              <div className="hero-preview__frame hero-preview__frame--business">
                <div className="business-spotlight">
                  {featuredProject?.previewImage ? (
                    <img
                      className="business-spotlight__image"
                      src={featuredProject.previewImage}
                      alt={featuredProject.previewAlt}
                    />
                  ) : null}

                  <div className="business-spotlight__chrome">
                    <div className="business-spotlight__nav">
                      <div className="business-spotlight__brand">
                        <span className="business-spotlight__logo">{projectLogo}</span>

                        <span className="business-spotlight__brand-copy">
                          <strong>{projectName}</strong>
                          <small>{projectNiche}</small>
                        </span>
                      </div>

                      <div className="business-spotlight__menu" aria-hidden="true">
                        {projectPreviewNav.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <span className="business-spotlight__cta">Abrir site</span>
                    </div>

                    <div className="business-spotlight__badges" aria-hidden="true">
                      <span className="business-spotlight__pill">Projeto publicado</span>
                      <span className="business-spotlight__pill business-spotlight__pill--accent">
                        {projectBadge}
                      </span>
                    </div>

                    <div className="business-spotlight__content">
                      <strong>{projectTitle}</strong>
                      <p>{projectCopy}</p>
                    </div>

                    <div className="business-spotlight__stats" aria-label="Provas de valor">
                      {previewStats.map((item) => (
                        <span className="business-spotlight__stat" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-preview__meta">
                <div>
                  <span className="hero-preview__caption">Explore agora</span>
                  <strong>{projectName}</strong>
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
