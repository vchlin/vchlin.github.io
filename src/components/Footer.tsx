import { useEffect, useRef } from 'react'

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/vchlin',
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
    {
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      href: 'mailto:your.email@example.com',
      label: 'Email',
    },
  ]

  const footerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) {
      return
    }

    const setOffset = () => {
      document.documentElement.style.setProperty(
        '--footer-offset',
        `${footer.offsetHeight}px`,
      )
    }

    setOffset()

    const resizeObserver = new ResizeObserver(setOffset)
    resizeObserver.observe(footer)

    window.addEventListener('resize', setOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', setOffset)
      document.documentElement.style.removeProperty('--footer-offset')
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-6 text-sm sm:flex-row sm:justify-between">
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 transition-colors dark:text-gray-400">
          {socialLinks.map(({ href, label }) => {
            const isExternal = href.startsWith('http')

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="font-medium hover:text-gray-900 dark:hover:text-gray-100"
              >
                {label}
              </a>
            )
          })}
        </div>
        <p className="text-gray-600 transition-colors dark:text-gray-400">
          © {new Date().getFullYear()} vchlin. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
