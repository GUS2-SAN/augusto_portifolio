const navItems = [
  { href: '#autoridade', label: 'Autoridade' },
  { href: '#projetos', label: 'Sites' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
]

export function StickyPortfolioNav({ visible, siteConfig }) {
  return (
    <div
      className={`sticky-portfolio-nav${visible ? ' is-visible' : ''}`}
      aria-hidden={visible ? 'false' : 'true'}
    >
      <div className="container">
        <div className="sticky-portfolio-nav__shell">
          <a className="sticky-portfolio-nav__brand" href="#top" aria-label="Voltar para o topo">
            <span className="sticky-portfolio-nav__badge">AS</span>
            <strong>{`${siteConfig.name} - ${siteConfig.role}`}</strong>
          </a>

          <nav className="sticky-portfolio-nav__nav" aria-label="Navegação fixa do portfólio">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
