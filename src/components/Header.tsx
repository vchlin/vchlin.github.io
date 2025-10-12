import { useEffect, useState } from 'react'
import ThemeSelector, { type Theme } from './ThemeSelector'

interface HeaderProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <h1
          className={`font-semibold transition-all duration-300 ${
            isScrolled ? 'text-lg' : 'text-xl'
          }`}
        >
          vchlin
        </h1>
        <ThemeSelector theme={theme} setTheme={setTheme} />
      </div>
    </header>
  )
}
