/**
 * @file Footer.tsx
 * @description Footer with contacts and quick anchors. Neutral industrial palette.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * @component Footer
 * @description Displays contact information and quick links for the corporate B2B website.
 */
export default function Footer(): JSX.Element {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-gray-800/50 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{t('brand')}</h3>
          <p className="mt-2 text-sm text-gray-700">{t('footer.companyDesc')}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{t('footer.contacts')}</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            <li>{t('footer.salesLine')}</li>
            <li>{t('footer.engineeringLine')}</li>
            <li>{t('footer.qualityLine')}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{t('footer.quickLinks')}</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-blue-900 hover:underline"
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a 
                href="#benefits" 
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-blue-900 hover:underline"
              >
                {t('nav.advantages')}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-blue-900 hover:underline"
              >
                {t('nav.contacts')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-gray-600 md:px-6">
          <span>{t('footer.copyright', { year })}</span>
          <span>{t('footer.address')}</span>
        </div>
      </div>
    </footer>
  )
}
