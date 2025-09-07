/**
 * @file Benefits.tsx
 * @description Grid of key advantages for the aerospace-focused machine shop.
 */

import React from 'react'
import { Plane, Gauge, Factory, Shield, Cog, ClipboardCheck } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import { useTranslation } from 'react-i18next'

/**
 * @component Benefits
 * @description Highlights 6 core selling points with icons and concise descriptions.
 */
export default function Benefits(): JSX.Element {
  const { t } = useTranslation()

  const items = [
    { icon: Plane, k: 'benefits.items.aerospace' },
    { icon: Gauge, k: 'benefits.items.precision' },
    { icon: Factory, k: 'benefits.items.equipment' },
    { icon: Shield, k: 'benefits.items.standards' },
    { icon: Cog, k: 'benefits.items.materials' },
    { icon: ClipboardCheck, k: 'benefits.items.process' },
  ] as const

  return (
    <section id="benefits" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionTitle
          eyebrow={t('benefits.eyebrow')}
          title={t('benefits.title')}
          subtitle={t('benefits.subtitle')}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, k }) => (
            <div
              key={k}
              className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-blue-50 p-3 text-blue-900">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{t(`${k}.title`)}</h3>
                  <p className="mt-1 text-sm text-gray-700">{t(`${k}.desc`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
