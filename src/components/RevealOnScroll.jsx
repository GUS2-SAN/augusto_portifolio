import { useEffect, useRef, useState } from 'react'

export function RevealOnScroll({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  threshold = 0.2,
  style,
  ...restProps
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const prefersReducedMotion =
      'matchMedia' in window && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    return prefersReducedMotion || !('IntersectionObserver' in window)
  })

  useEffect(() => {
    const element = elementRef.current

    if (!element || isVisible || typeof window === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, threshold])

  const sharedProps = {
    ...restProps,
    ref: elementRef,
    className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim(),
    style: {
      '--reveal-delay': `${delay}ms`,
      ...style,
    },
  }

  if (Tag === 'article') {
    return <article {...sharedProps}>{children}</article>
  }

  if (Tag === 'section') {
    return <section {...sharedProps}>{children}</section>
  }

  return <div {...sharedProps}>{children}</div>
}
