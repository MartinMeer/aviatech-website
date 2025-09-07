/**
 * @file Header.tsx
 * @description Sticky site header with brand, in-page navigation anchors, and language switcher. High-contrast B2B styling.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

/**
 * @component Header
 * @description Provides top navigation with anchors to main sections and language toggle.
 */
export default function Header(): JSX.Element {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2" 
          aria-label={t('aria.home')}
        >
          <div className="h-7 w-7 rounded bg-blue-900" />
          <span className="text-lg font-semibold tracking-wide text-gray-900">{t('brand')}</span>
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Primary" className="hidden gap-6 md:flex">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded px-1 text-sm text-gray-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              {t('nav.home')}
            </a>
            <a
              href="#benefits"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded px-1 text-sm text-gray-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              {t('nav.advantages')}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded px-1 text-sm text-gray-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              {t('nav.contacts')}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
