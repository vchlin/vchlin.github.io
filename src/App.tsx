import { TabGroup, TabPanel, TabPanels } from '@headlessui/react'
import { useEffect, useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import RecentPosts from './components/RecentPosts'
import type { Theme } from './components/ThemeSelector'

const ANIMATION_STYLE = { animation: 'fadeSlideIn 0.3s ease-out' }

export default function App() {
  const [theme, setTheme] = useState<Theme>('system')
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeSlideIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

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
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex} className="flex flex-1 flex-col">
        <Header theme={theme} setTheme={setTheme} />

        <main
          className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6"
          style={{
            paddingTop: 'calc(var(--header-offset, 80px) + 2rem)',
            paddingBottom: 'calc(var(--footer-offset, 80px) + 2rem)',
          }}
        >
          <TabPanels className="flex-1">
            <TabPanel
              key={selectedIndex === 0 ? selectedIndex : undefined}
              className="focus:outline-none"
              style={ANIMATION_STYLE}
            >
              <RecentPosts />
            </TabPanel>

            <TabPanel
              key={selectedIndex === 1 ? selectedIndex : undefined}
              className="focus:outline-none"
              style={ANIMATION_STYLE}
            >
              <About />
            </TabPanel>
          </TabPanels>
        </main>

        <Footer />
      </TabGroup>
    </div>
  )
}
