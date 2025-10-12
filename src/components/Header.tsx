import { Tab, TabList } from '@headlessui/react'
import { useEffect, useRef } from 'react'
import ThemeSelector, { type Theme } from './ThemeSelector'

interface HeaderProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) {
      return
    }

    const setOffset = () => {
      document.documentElement.style.setProperty(
        '--header-offset',
        `${header.offsetHeight}px`,
      )
    }

    setOffset()

    const resizeObserver = new ResizeObserver(setOffset)
    resizeObserver.observe(header)

    window.addEventListener('resize', setOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', setOffset)
      document.documentElement.style.removeProperty('--header-offset')
    }
  }, [])

  const tabs = ['Blog', 'About']

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white py-4 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">vchlin</h1>
          <ThemeSelector theme={theme} setTheme={setTheme} />
        </div>

        <TabList className="flex gap-6">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className="pb-2 text-sm font-medium transition-colors focus:outline-none data-[selected]:text-gray-900 data-[selected]:dark:text-gray-100 data-[selected]:border-b-2 data-[selected]:border-gray-900 data-[selected]:dark:border-gray-100 text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </div>
    </header>
  )
}
