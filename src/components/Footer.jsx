export function Footer({ siteConfig }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.location}</span>
        </div>

        <div className="footer__links">
          <a href="#projetos">Sites</a>
          <a href="#contato">Contato</a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
