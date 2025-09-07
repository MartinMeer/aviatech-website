/**
 * @file Contact.tsx
 * @description Bilingual Contacts section with a Quick Request form. Uses react-hook-form + zod for validation and sonner for feedback.
 */

import React from 'react'
import SectionTitle from '../common/SectionTitle'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, Toaster } from 'sonner'
import { useTranslation } from 'react-i18next'

/**
 * @interface ContactFormValues
 * @description Shape of quick request form values.
 */
interface ContactFormValues {
  name: string
  phone: string
  email: string
  brief: string
}

/**
 * @component Contact
 * @description Renders contact information and a quick request form with validation and localized labels.
 */
export default function Contact(): JSX.Element {
  const { t, i18n } = useTranslation()

  // Build validation schema using localized messages (recomputed on lang change)
  const schema = React.useMemo(() => {
    return z.object({
      name: z.string().min(1, t('contact.form.errors.nameRequired')),
      phone: z.string().min(1, t('contact.form.errors.phoneRequired')),
      email: z.string().email(t('contact.form.errors.emailInvalid')),
      brief: z
        .string()
        .min(1, t('contact.form.errors.briefRequired'))
        .max(500, t('contact.form.errors.briefTooLong')),
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      brief: '',
    },
    mode: 'onBlur',
  })

  /**
   * @function onSubmit
   * @description Mock submission handler – logs data and shows success toast.
   */
  const onSubmit = async (data: ContactFormValues) => {
    // Simulate async request
    await new Promise((res) => setTimeout(res, 600))
    // Log for debugging/demo; replace with API call later
    console.info('[Quick Request] payload:', data)
    toast.success(t('contact.form.successTitle'), {
      description: t('contact.form.successDesc'),
    })
    reset()
  }

  return (
    <section id="contact" className="bg-gray-50">
      {/* Local Toaster – safe portal; remove if you already mount a global toaster */}
      <Toaster position="top-right" richColors />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionTitle
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Contact info card */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">
              {t('contact.info.title')}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>{t('footer.salesLine')}</li>
              <li>{t('footer.engineeringLine')}</li>
              <li>{t('footer.qualityLine')}</li>
            </ul>

            <div className="mt-6 grid gap-2 text-sm">
              <div className="text-gray-900 font-semibold">{t('contact.info.addressLabel')}</div>
              <div className="text-gray-700">{t('footer.address')}</div>
            </div>

            <div className="mt-4 grid gap-2 text-sm">
              <div className="text-gray-900 font-semibold">{t('contact.info.hoursLabel')}</div>
              <div className="text-gray-700">{t('contact.info.hoursValue')}</div>
            </div>

            <div className="mt-6">
              <a
                href="#ta-form"
                className="inline-flex items-center justify-center rounded-md border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                {t('contact.taLink')}
              </a>
              <p className="mt-2 text-xs text-gray-600">{t('contact.taDesc')}</p>
            </div>
          </div>

          {/* Quick request form */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">{t('contact.form.title')}</h3>
            <p className="mt-1 text-sm text-gray-700">{t('contact.form.subtitle')}</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  {t('contact.form.fields.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  placeholder={t('contact.form.placeholders.name') ?? ''}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name ? (
                  <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                ) : null}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                  {t('contact.form.fields.phone')}
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder={t('contact.form.placeholders.phone') ?? ''}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone ? (
                  <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                ) : null}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  {t('contact.form.fields.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder={t('contact.form.placeholders.email') ?? ''}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email ? (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                ) : null}
              </div>

              {/* Brief */}
              <div>
                <label htmlFor="brief" className="block text-sm font-medium text-gray-900">
                  {t('contact.form.fields.brief')}
                </label>
                <textarea
                  id="brief"
                  rows={4}
                  {...register('brief')}
                  placeholder={t('contact.form.placeholders.brief') ?? ''}
                  className={`mt-1 block w-full resize-y rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                    errors.brief ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.brief}
                />
                <div className="mt-1 flex items-center justify-between">
                  {errors.brief ? (
                    <p className="text-xs text-red-600">{errors.brief.message}</p>
                  ) : (
                    <span className="text-xs text-gray-500">{t('contact.form.helper')}</span>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
