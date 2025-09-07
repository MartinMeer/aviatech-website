/**
 * @file ProcessSteps.tsx
 * @description Horizontal/stacked process timeline for the Advantages section.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { ClipboardList, Cog, PackageCheck, Truck, Wrench, ZoomIn } from 'lucide-react'

/**
 * @component ProcessSteps
 * @description Renders a 6-step process timeline using localized strings and icons.
 */
export default function ProcessSteps(): JSX.Element {
  const { t } = useTranslation()

  const steps = [
    { icon: ClipboardList, title: t('benefits.processSteps.1.title'), desc: t('benefits.processSteps.1.desc') },
    { icon: ZoomIn, title: t('benefits.processSteps.2.title'), desc: t('benefits.processSteps.2.desc') },
    { icon: Wrench, title: t('benefits.processSteps.3.title'), desc: t('benefits.processSteps.3.desc') },
    { icon: Cog, title: t('benefits.processSteps.4.title'), desc: t('benefits.processSteps.4.desc') },
    { icon: PackageCheck, title: t('benefits.processSteps.5.title'), desc: t('benefits.processSteps.5.desc') },
    { icon: Truck, title: t('benefits.processSteps.6.title'), desc: t('benefits.processSteps.6.desc') },
  ] as const

  return (
    <div className="mt-14">
      <h3 className="text-lg font-semibold text-gray-900">{t('benefits.processSteps.title')}</h3>
      <p className="mt-1 text-sm text-gray-700">{t('benefits.processSteps.subtitle')}</p>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ icon: Icon, title, desc }, idx) => (
          <li key={idx} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="text-sm font-semibold text-gray-900">{title}</div>
                <p className="mt-1 text-sm text-gray-700">{desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
