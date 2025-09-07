/**
 * @file CTAButtons.tsx
 * @description Reusable CTA button group for primary and secondary actions.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * @interface CTAButtonsProps
 * @description Props for CTAButtons component.
 */
export interface CTAButtonsProps {
  /** Optional className for external spacing/layout control */
  className?: string
}

/**
 * @component CTAButtons
 * @description Renders primary and secondary call-to-action buttons. Accessible and keyboard-focusable.
 */
export default function CTAButtons({ className = '' }: CTAButtonsProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="inline-flex items-center justify-center rounded-md bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
      >
        {t('cta.primary')}
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="inline-flex items-center justify-center rounded-md border border-blue-900 px-5 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
      >
        {t('cta.secondary')}
      </a>
      <a
        href="#"
        download
        className="inline-flex items-center justify-center rounded-md border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
      >
        {t('cta.download')}
      </a>
    </div>
  )
}
