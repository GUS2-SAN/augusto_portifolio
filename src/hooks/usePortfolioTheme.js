import { useEffect, useMemo, useState } from 'react'

const THEME_STORAGE_KEY = 'portfolio-theme'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme() {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null
}

export function usePortfolioTheme() {
  const storedTheme = useMemo(() => getStoredTheme(), [])
  const [theme, setTheme] = useState(() => storedTheme ?? getSystemTheme())
  const [hasManualPreference, setHasManualPreference] = useState(() => Boolean(storedTheme))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = () => {
      if (!hasManualPreference) {
        setTheme(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    handleThemeChange()
    mediaQuery.addEventListener('change', handleThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [hasManualPreference])

  useEffect(() => {
    if (hasManualPreference) {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
      return
    }

    window.localStorage.removeItem(THEME_STORAGE_KEY)
  }, [hasManualPreference, theme])

  useEffect(() => {
    document.body.dataset.portfolioTheme = theme
    document.documentElement.style.colorScheme = theme

    return () => {
      delete document.body.dataset.portfolioTheme
      document.documentElement.style.colorScheme = ''
    }
  }, [theme])

  const toggleTheme = () => {
    setHasManualPreference(true)
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme,
  }
}
