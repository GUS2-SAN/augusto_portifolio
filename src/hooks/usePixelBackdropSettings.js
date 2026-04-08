import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-pixel-backdrop-settings-v2'

export const DEFAULT_PIXEL_BACKDROP_SETTINGS = {
  enabled: true,
  parallax: true,
  particles: true,
  beacons: true,
  comets: false,
  clouds: false,
  planets: false,
  satellites: false,
}

function getInitialSettings() {
  if (typeof window === 'undefined') {
    return DEFAULT_PIXEL_BACKDROP_SETTINGS
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return DEFAULT_PIXEL_BACKDROP_SETTINGS
  }

  try {
    return {
      ...DEFAULT_PIXEL_BACKDROP_SETTINGS,
      ...JSON.parse(stored),
    }
  } catch {
    return DEFAULT_PIXEL_BACKDROP_SETTINGS
  }
}

export function usePixelBackdropSettings() {
  const [settings, setSettings] = useState(getInitialSettings)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  const toggleSetting = (key) => {
    setSettings((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }

  const resetSettings = () => {
    setSettings(DEFAULT_PIXEL_BACKDROP_SETTINGS)
  }

  return {
    settings,
    toggleSetting,
    resetSettings,
  }
}
