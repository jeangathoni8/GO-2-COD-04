import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Theme } from '../types/theme';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {[
        { value: 'light' as Theme, icon: Sun },
        { value: 'dark' as Theme, icon: Moon },
        { value: 'system' as Theme, icon: Monitor }
      ].map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`p-2 rounded-md transition-colors ${
            theme === value
              ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400'
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
          title={`${value.charAt(0).toUpperCase() + value.slice(1)} theme`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};