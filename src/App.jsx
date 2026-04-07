import { usePortfolioTheme } from './hooks/usePortfolioTheme'
import { PortfolioHome } from './pages/PortfolioHome'

export default function App() {
  const { theme, toggleTheme } = usePortfolioTheme()

  return <PortfolioHome theme={theme} onToggleTheme={toggleTheme} />
}
