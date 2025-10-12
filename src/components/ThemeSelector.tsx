import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

type Theme = 'light' | 'dark' | 'system'

interface ThemeSelectorProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export default function ThemeSelector({
  theme,
  setTheme,
}: ThemeSelectorProps) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-1 rounded transition-colors ${theme === 'light' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Light theme"
      >
        <SunIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1 rounded transition-colors ${theme === 'dark' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Dark theme"
      >
        <MoonIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`px-3 py-1 rounded transition-colors ${theme === 'system' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="System theme"
      >
        <ComputerDesktopIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

export type { Theme }
