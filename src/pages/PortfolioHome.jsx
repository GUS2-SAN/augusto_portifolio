import { useEffect, useRef, useState } from 'react'
import { ContactBlock } from '../components/ContactBlock'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { LiveDemos } from '../components/LiveDemos'
import { ProjectsShowcase } from '../components/ProjectsShowcase'
import { StickyPortfolioNav } from '../components/StickyPortfolioNav'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { featuredDemos } from '../data/demos'
import { projects } from '../data/projects'
import { siteConfig } from '../data/site'

export function PortfolioHome({ theme, onToggleTheme }) {
  const heroRef = useRef(null)
  const [isStickyNavVisible, setIsStickyNavVisible] = useState(false)
  const featuredProject =
    featuredDemos.find((demo) => demo.slug === 'nexus-solucoes') ?? featuredDemos[0]

  useEffect(() => {
    const heroElement = heroRef.current

    if (!heroElement) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      const syncStickyNav = () => {
        const shouldShow = heroElement.getBoundingClientRect().bottom <= 88
        setIsStickyNavVisible((current) => (current === shouldShow ? current : shouldShow))
      }

      syncStickyNav()
      window.addEventListener('scroll', syncStickyNav, { passive: true })
      window.addEventListener('resize', syncStickyNav)

      return () => {
        window.removeEventListener('scroll', syncStickyNav)
        window.removeEventListener('resize', syncStickyNav)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyNavVisible(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-88px 0px 0px 0px',
      },
    )

    observer.observe(heroElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app-shell">
      <StickyPortfolioNav visible={isStickyNavVisible} siteConfig={siteConfig} />
      <Hero
        heroRef={heroRef}
        siteConfig={siteConfig}
        theme={theme}
        onToggleTheme={onToggleTheme}
        featuredProject={featuredProject}
      />

      <main>
        <LiveDemos demos={featuredDemos} />
        <ProjectsShowcase projects={projects} />
        <ContactBlock siteConfig={siteConfig} />
      </main>

      <Footer siteConfig={siteConfig} />
      <WhatsAppFloat href={siteConfig.whatsappHref} />
    </div>
  )
}
