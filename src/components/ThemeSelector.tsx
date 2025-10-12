import { Sun, Moon, Monitor } from 'lucide-react'

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
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1 rounded transition-colors ${theme === 'dark' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Dark theme"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`px-3 py-1 rounded transition-colors ${theme === 'system' ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="System theme"
      >
        <Monitor size={18} />
      </button>
    </div>
  )
}

export type { Theme }
