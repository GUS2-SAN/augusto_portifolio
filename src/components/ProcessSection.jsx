import { SectionHeader } from './SectionHeader'

const processSteps = [
  {
    title: 'Entendo o negócio',
    description: 'Oferta, público e objetivo definidos.',
  },
  {
    title: 'Defino a direção',
    description: 'Estrutura, narrativa e visual.',
  },
  {
    title: 'Construo o site',
    description: 'Projeto completo, pronto para uso.',
  },
  {
    title: 'Publico e entrego',
    description: 'Com próximos passos claros.',
  },
]

export function ProcessSection() {
  return (
    <section className="section section--process" id="processo">
      <div className="container">
        <SectionHeader
          eyebrow="Como funciona"
          title="Contratar é simples quando o processo é claro."
          description="Um processo direto, sem ruído."
        />

        <div className="process-shell">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-card__step">{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="process-note">
          <strong>Um projeto do portfólio pode servir como ponto de partida.</strong>
          <p>Isso acelera alinhamento sem tirar o caráter sob medida.</p>
        </div>
      </div>
    </section>
  )
}
