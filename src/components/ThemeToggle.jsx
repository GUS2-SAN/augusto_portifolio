export function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'claro' : 'escuro'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Ativar modo ${nextTheme}`}
      aria-pressed={theme === 'dark'}
      onClick={onToggle}
    >
      <span className="theme-toggle__eyebrow">Tema</span>
      <strong>{theme === 'dark' ? 'Escuro' : 'Claro'}</strong>
    </button>
  )
}
