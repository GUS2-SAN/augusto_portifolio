import { SectionHeader } from './SectionHeader'

const authorityItems = [
  {
    title: 'Projetos reais e navegáveis',
    description: 'Nada de mockups. Sites completos, prontos para uso.',
  },
  {
    title: 'Do conceito à entrega',
    description: 'Design e código evoluem juntos até a publicação.',
  },
  {
    title: 'Estrutura que guia decisão',
    description: 'Cada bloco existe para reduzir dúvida e gerar ação.',
  },
  {
    title: 'Visual sob medida',
    description: 'Sem aparência genérica ou reaproveitada.',
  },
]

const authorityProofItems = [
  'Base visual já validada.',
  'Direção adaptada ao seu negócio.',
  'Resultado final sob medida.',
]

export function AuthoritySection() {
  return (
    <section className="section section--authority" id="autoridade">
      <div className="container">
        <SectionHeader
          eyebrow="Autoridade e confiança"
          title="Autoridade construída na prática."
          description="Cada projeto é construído para vender, não apenas para parecer bonito."
        />

        <div className="authority-grid">
          {authorityItems.map((item, index) => (
            <article className="authority-card" key={item.title}>
              <span className="authority-card__index">{`0${index + 1}`}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <aside className="authority-note" aria-label="Garantias de direção do projeto">
          <div className="authority-note__copy">
            <span className="section-label">Menos risco percebido</span>
            <h3>Você pode partir de uma referência daqui sem terminar com um site genérico.</h3>
            <p>Você parte de uma base sólida, mas o resultado final é construído para o seu negócio.</p>
          </div>

          <ul className="authority-note__list">
            {authorityProofItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
