export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <span className="section-label">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
