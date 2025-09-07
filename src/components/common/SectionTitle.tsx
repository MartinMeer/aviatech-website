/**
 * @file SectionTitle.tsx
 * @description Small reusable section title with optional eyebrow text.
 */

import React from 'react'

/**
 * @interface SectionTitleProps
 * @description Props for SectionTitle component.
 */
export interface SectionTitleProps {
  /** Eyebrow label shown above the main title */
  eyebrow?: string
  /** Main section title */
  title: string
  /** Optional subtitle text */
  subtitle?: string
  /** Optional additional classes */
  className?: string
}

/**
 * @component SectionTitle
 * @description Displays a section header with eyebrow, title, and subtitle for consistent layout rhythm.
 */
export default function SectionTitle({ eyebrow, title, subtitle, className = '' }: SectionTitleProps): JSX.Element {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wider text-blue-900">{eyebrow}</p> : null}
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-gray-700 sm:text-base">{subtitle}</p> : null}
    </div>
  )
}
