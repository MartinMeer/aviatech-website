/**
 * @file LanguageSwitcher.tsx
 * @description Compact language switcher (EN/RU) for the header. Accessible and high-contrast.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * @interface LanguageSwitcherProps
 * @description Props for LanguageSwitcher component.
 */
export interface LanguageSwitcherProps {
  /** Optional container className for alignment within header */
  className?: string
}

/**
 * @component LanguageSwitcher
 * @description Renders two-segment toggle to switch between English and Russian.
 */
export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps): JSX.Element {
  const { i18n, t } = useTranslation()
  const current = i18n.language.startsWith('ru') ? 'ru' : 'en'

  const setLang = (lng: 'en' | 'ru') => {
    if (lng !== current) i18n.changeLanguage(lng)
  }

  return (
    <div
      className={`inline-flex items-center rounded-md border border-gray-300 bg-white p-0.5 shadow-sm ${className}`}
      role="group"
      aria-label={t('aria.switchLanguage')}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 text-xs font-semibold ${
          current === 'en' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900'
        } rounded-l`}
        aria-pressed={current === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ru')}
        className={`px-2.5 py-1 text-xs font-semibold ${
          current === 'ru' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900'
        } rounded-r`}
        aria-pressed={current === 'ru'}
      >
        RU
      </button>
    </div>
  )
}
