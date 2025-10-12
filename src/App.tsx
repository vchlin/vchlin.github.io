import { useEffect, useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import RecentPosts from './components/RecentPosts'
import type { Theme } from './components/ThemeSelector'

export default function App() {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const root = document.documentElement

    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    } else if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header theme={theme} setTheme={setTheme} />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <About />
        <RecentPosts />
      </main>

      <Footer />
    </div>
  )
}
