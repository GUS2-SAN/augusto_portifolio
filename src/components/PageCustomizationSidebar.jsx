import { useEffect } from 'react'

function SidebarIcon({ name }) {
  if (name === 'close') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6 6 18 18" />
        <path d="M18 6 6 18" />
      </svg>
    )
  }

  if (name === 'reset') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6 8V4m0 0h4M6 4l4 4" />
        <path d="M7 12a5 5 0 1 0 2-4" />
      </svg>
    )
  }

  if (name === 'enabled') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3v7" />
        <path d="M7.8 5.8a8 8 0 1 0 8.4 0" />
      </svg>
    )
  }

  if (name === 'parallax') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 9 12 4l8 5-8 5-8-5Z" />
        <path d="m6 13 6 4 6-4" />
        <path d="m8 17 4 3 4-3" />
      </svg>
    )
  }

  if (name === 'particles') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6 6h2v2H6Zm10 1h3v3h-3Zm-2 9h2v2h-2Zm-7 2h3v3H7Zm3-8h4v4h-4Z" />
      </svg>
    )
  }

  if (name === 'beacons') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4v16M4 12h16" />
        <path d="M9 9h6v6H9Z" />
      </svg>
    )
  }

  if (name === 'clouds') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7 17h10a3 3 0 0 0 .3-6 4.5 4.5 0 0 0-8.6-1.5A3.5 3.5 0 0 0 7 17Z" />
      </svg>
    )
  }

  if (name === 'planets') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M4 13c2.3-2.5 13.7-2.5 16 0" />
      </svg>
    )
  }

  if (name === 'satellites') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m9 9 6 6" />
        <path d="M7 7h4v4H7Zm6 6h4v4h-4Z" />
        <path d="M15 5h3v3h-3Zm-9 9h3v3H6Z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 15h8" />
      <path d="M11 9h8" />
      <path d="M4 16 16 4" />
      <path d="M15 4h5v5" />
    </svg>
  )
}

function SidebarToggle({ active, icon, label, onClick }) {
  return (
    <button
      aria-label={label}
      aria-pressed={active}
      className={`customization-drawer__switch ${active ? 'is-active' : ''}`}
      onClick={onClick}
      title={label}
      type="button"
    >
      <SidebarIcon name={icon} />
    </button>
  )
}

function IconButton({ icon, label, onClick, className }) {
  return (
    <button
      aria-label={label}
      className={className}
      onClick={onClick}
      title={label}
      type="button"
    >
      <SidebarIcon name={icon} />
    </button>
  )
}

export function PageCustomizationSidebar({
  isOpen,
  onClose,
  onReset,
  onToggle,
  settings,
}) {
  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <>
      <button
        aria-hidden={!isOpen}
        className={`customization-drawer__scrim ${isOpen ? 'is-visible' : ''}`}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <aside
        aria-hidden={!isOpen}
        className={`customization-drawer ${isOpen ? 'is-open' : ''}`}
      >
        <div className="customization-drawer__header">
          <h2>Personalizacao</h2>

          <div className="customization-drawer__actions">
            <IconButton
              className="customization-drawer__icon-button"
              icon="reset"
              label="Restaurar padrao"
              onClick={onReset}
            />
            <IconButton
              className="customization-drawer__icon-button"
              icon="close"
              label="Fechar painel"
              onClick={onClose}
            />
          </div>
        </div>

        <div className="customization-drawer__section">
          <SidebarToggle
            active={settings.enabled}
            icon="enabled"
            label="Ativar ou remover o ambiente pixel"
            onClick={() => onToggle('enabled')}
          />
          <SidebarToggle
            active={settings.parallax}
            icon="parallax"
            label="Ativar ou desativar o parallax do fundo"
            onClick={() => onToggle('parallax')}
          />
          <SidebarToggle
            active={settings.particles}
            icon="particles"
            label="Ativar ou desativar as particulas"
            onClick={() => onToggle('particles')}
          />
          <SidebarToggle
            active={settings.beacons}
            icon="beacons"
            label="Ativar ou desativar os beacons"
            onClick={() => onToggle('beacons')}
          />
          <SidebarToggle
            active={settings.comets}
            icon="comets"
            label="Ativar ou desativar os cometas"
            onClick={() => onToggle('comets')}
          />
          <SidebarToggle
            active={settings.clouds}
            icon="clouds"
            label="Ativar ou desativar as nuvens em pixel art"
            onClick={() => onToggle('clouds')}
          />
          <SidebarToggle
            active={settings.planets}
            icon="planets"
            label="Ativar ou desativar os planetas em pixel art"
            onClick={() => onToggle('planets')}
          />
          <SidebarToggle
            active={settings.satellites}
            icon="satellites"
            label="Ativar ou desativar os satelites em pixel art"
            onClick={() => onToggle('satellites')}
          />
        </div>
      </aside>
    </>
  )
}
