import { useState } from 'react'
import { PageCustomizationSidebar } from '../components/PageCustomizationSidebar'
import { PortfolioFinalCta } from '../components/PortfolioFinalCta'
import { PortfolioHero } from '../components/PortfolioHero'
import { PixelArtBackdrop } from '../components/PixelArtBackdrop'
import { PortfolioPrimaryShowcase } from '../components/PortfolioPrimaryShowcase'
import { PortfolioSecondaryShowcase } from '../components/PortfolioSecondaryShowcase'
import { usePixelBackdropSettings } from '../hooks/usePixelBackdropSettings'
import { portfolioExperience } from '../data/portfolioExperience'

export function PortfolioHome() {
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false)
  const { settings, toggleSetting, resetSettings } = usePixelBackdropSettings()

  return (
    <>
      <PixelArtBackdrop settings={settings} />
      <PageCustomizationSidebar
        isOpen={isCustomizationOpen}
        onClose={() => setIsCustomizationOpen(false)}
        onReset={resetSettings}
        onToggle={toggleSetting}
        settings={settings}
      />

      <div className="page-shell">
        <PortfolioHero
          hero={portfolioExperience.hero}
          isCustomizationOpen={isCustomizationOpen}
          navigation={portfolioExperience.navigation}
          onOpenCustomization={() => setIsCustomizationOpen((current) => !current)}
        />

        <main className="portfolio-main">
          <PortfolioPrimaryShowcase projects={portfolioExperience.primaryProjects} />
          <PortfolioSecondaryShowcase projects={portfolioExperience.secondaryProjects} />
          <PortfolioFinalCta cta={portfolioExperience.finalCta} />
        </main>
      </div>
    </>
  )
}
