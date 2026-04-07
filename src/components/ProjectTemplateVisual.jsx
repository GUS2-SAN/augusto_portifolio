import marketplaceHeroImage from '../../demo-tcg/assets/hero-perfect-order.jpg'

function VisualShell({ children, framed = true }) {
  return (
    <div className={`project-visual${framed ? '' : ' project-visual--plain'}`}>
      <div className={`project-visual__frame${framed ? '' : ' project-visual__frame--plain'}`}>
        {framed ? (
          <div className="project-visual__chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        ) : null}

        <div className={`project-visual__body${framed ? '' : ' project-visual__body--plain'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function ProjectTemplateVisual({ project, framed = true }) {
  const stats = project.visualStats ?? []
  const highlights = project.visualHighlights ?? []
  const businessPreviewTitle = project.previewTitle ?? project.visualTitle

  switch (project.templateVariant) {
    case 'hospitality':
      return (
        <VisualShell framed={framed}>
          <div className="hospitality-preview">
            <div className="hospitality-preview__hero">
              <div className="hospitality-preview__lead">
                <span className="visual-kicker">{project.visualKicker}</span>
                <strong>{project.visualTitle}</strong>
                <p>{project.visualCopy}</p>
                <div className="hospitality-preview__actions">
                  <span className="visual-button">Reservar</span>
                  <div className="preview-pill">
                    <small>Menu autoral</small>
                    <span>Atmosfera editorial</span>
                  </div>
                </div>
              </div>

              <div className="hospitality-preview__stack">
                {stats.map((item) => (
                  <div className="preview-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hospitality-preview__grid">
              {highlights.map((item) => (
                <div className="preview-tile" key={item}>
                  <strong>{item}</strong>
                  <span>Texto, prova visual e CTA.</span>
                </div>
              ))}
            </div>
          </div>
        </VisualShell>
      )

    case 'barber':
      return (
        <VisualShell framed={framed}>
          <div className="barber-preview">
            <div className="barber-preview__poster">
              <span className="visual-kicker">{project.visualKicker}</span>
              <strong>{project.visualTitle}</strong>
              <p>{project.visualCopy}</p>
              <span className="visual-button">Agendar</span>
            </div>

            <div className="barber-preview__grid">
              {highlights.map((item) => (
                <div className="preview-product" key={item}>
                  <strong>{item}</strong>
                  <span>Serviço com decisão rápida.</span>
                </div>
              ))}
            </div>

            <div className="barber-preview__rail">
              {stats.map((item) => (
                <div className="preview-pill" key={item.label}>
                  <small>{item.label}</small>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </VisualShell>
      )

    case 'clinic':
      return (
        <VisualShell framed={framed}>
          <div className="clinic-preview">
            <div className="clinic-preview__hero">
              <span className="visual-kicker">{project.visualKicker}</span>
              <strong>{project.visualTitle}</strong>
              <p>{project.visualCopy}</p>
            </div>

            <div className="clinic-preview__grid">
              {stats.map((item) => (
                <div className="preview-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="clinic-preview__stack">
              {highlights.map((item) => (
                <div className="preview-feed" key={item}>
                  <strong>{item}</strong>
                  <span>Especialidade, exame ou protocolo.</span>
                </div>
              ))}
            </div>
          </div>
        </VisualShell>
      )

    case 'fitness':
      return (
        <VisualShell framed={framed}>
          <div className={`fitness-preview${project.previewImage ? ' fitness-preview--immersive' : ''}`}>
            <div
              className={`fitness-preview__hero${project.previewImage ? ' fitness-preview__hero--immersive' : ''}`}
            >
              {project.previewImage ? (
                <img
                  className="fitness-preview__image"
                  src={project.previewImage}
                  alt={project.previewAlt ?? `Preview do projeto ${project.name}.`}
                />
              ) : null}

              {project.previewImage ? <div className="fitness-preview__overlay" /> : null}

              <div className="fitness-preview__copy">
                <span className="visual-kicker">{project.visualKicker}</span>
                <strong>{project.visualTitle}</strong>
              </div>
            </div>

            <div className="fitness-preview__stats">
              {stats.map((item) => (
                <div className="preview-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="fitness-preview__schedule">
              {highlights.map((item) => (
                <div className="preview-pill" key={item}>
                  <small>Aula</small>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </VisualShell>
      )

    case 'luxury':
      return (
        <VisualShell framed={framed}>
          <div className="luxury-preview">
            <div className="luxury-preview__hero">
              <div>
                <span className="visual-kicker">{project.visualKicker}</span>
                <strong>{project.visualTitle}</strong>
                <p>{project.visualCopy}</p>
              </div>

              <div className="luxury-preview__chips">
                {stats.map((item) => (
                  <div className="preview-pill" key={item.label}>
                    <small>{item.label}</small>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-preview__grid">
              {highlights.map((item, index) => (
                <div className="preview-product" key={item}>
                  <strong>{item}</strong>
                  <span>Produto com foto e preço.</span>
                  <small>{index === 0 ? 'R$ 320' : index === 1 ? 'R$ 480' : 'R$ 690'}</small>
                </div>
              ))}
            </div>
          </div>
        </VisualShell>
      )

    case 'marketplace':
      return (
        <VisualShell framed={framed}>
          <div
            className={`marketplace-preview${project.previewImage ? ' marketplace-preview--showcase' : ''}`}
          >
            <img
              className="marketplace-preview__image"
              src={project.previewImage ?? marketplaceHeroImage}
              alt={project.previewAlt ?? 'Banner promocional de uma loja de Pokémon TCG.'}
            />

            <div className="marketplace-preview__overlay" />

            <div className="marketplace-preview__content">
              <span className="visual-kicker">{project.visualKicker}</span>
              <strong>{project.visualTitle}</strong>
            </div>
          </div>
        </VisualShell>
      )

    case 'business':
      return (
        <VisualShell framed={framed}>
          <div className="business-spotlight business-spotlight--card">
            {project.previewImage ? (
              <img
                className="business-spotlight__image"
                src={project.previewImage}
                alt={project.previewAlt ?? `Preview do projeto ${project.name}.`}
              />
            ) : null}

            <div className="business-spotlight__chrome business-spotlight__chrome--card business-spotlight__chrome--title-only">
              <div className="business-spotlight__content business-spotlight__content--title-only">
                <span className="visual-kicker business-spotlight__kicker">
                  {project.visualKicker ?? project.niche}
                </span>
                <strong>{businessPreviewTitle}</strong>
              </div>
            </div>
          </div>
        </VisualShell>
      )

    case 'startup':
    default:
      return (
        <VisualShell framed={framed}>
          <div className="startup-preview">
            <div className="startup-preview__hero">
              <span className="visual-kicker">{project.visualKicker}</span>
              <strong>{project.visualTitle}</strong>
              <p>{project.visualCopy}</p>
              <span className="visual-button">Solicitar projeto</span>
            </div>

            <div className="startup-preview__grid">
              {stats.map((item) => (
                <div className="preview-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="startup-preview__rail">
              {highlights.map((item) => (
                <div className="preview-feed" key={item}>
                  <strong>{item}</strong>
                  <span>Ganhos, integrações ou diferenciais.</span>
                </div>
              ))}
            </div>
          </div>
        </VisualShell>
      )
  }
}
