/**
 * @file Hero.tsx
 * @description Hero section with industrial background, strong value proposition, and CTAs.
 */

import React from 'react'
import CTAButtons from '../common/CTAButtons'
import { useTranslation } from 'react-i18next'

/**
 * @component Hero
 * @description Presents the primary message for high-precision metalworking tailored to aerospace, with clear actions.
 */
export default function Hero(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image with gradient overlay for contrast */}
      <div className="absolute inset-0">
        <img
          src="https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/8eac362e-aacb-45db-9c38-7ffd0337f5b3.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-gray-900/70 to-gray-900/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 md:px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t('hero.h1')}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-100 sm:text-lg">
            {t('hero.sub')}
          </p>
          <CTAButtons className="mt-8" />
          {/* Quick stats for credibility */}
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-gray-300">{t('hero.stats.experienceLabel')}</dt>
              <dd className="mt-1 font-semibold text-white">{t('hero.stats.experienceValue')}</dd>
            </div>
            <div>
              <dt className="text-gray-300">{t('hero.stats.precisionLabel')}</dt>
              <dd className="mt-1 font-semibold text-white">{t('hero.stats.precisionValue')}</dd>
            </div>
            <div>
              <dt className="text-gray-300">{t('hero.stats.parkLabel')}</dt>
              <dd className="mt-1 font-semibold text-white">{t('hero.stats.parkValue')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
