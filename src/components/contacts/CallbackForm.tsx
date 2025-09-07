/**
 * @file CallbackForm.tsx
 * @description Compact callback request form for the Contacts section.
 */

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

/** Shape of callback form values. */
interface CallbackValues {
  name: string
  phone: string
  time?: string
}

/**
 * @component CallbackForm
 * @description Minimal form with name, phone, and preferred time. Validates with zod and shows toast on success.
 */
export default function CallbackForm(): JSX.Element {
  const { t, i18n } = useTranslation()

  const schema = React.useMemo(
    () =>
      z.object({
        name: z.string().min(1, t('contact.callback.errors.nameRequired')),
        phone: z.string().min(1, t('contact.callback.errors.phoneRequired')),
        time: z.string().optional(),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallbackValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', phone: '', time: '' },
    mode: 'onBlur',
  })

  const onSubmit = async (data: CallbackValues) => {
    await new Promise((r) => setTimeout(r, 500))
    console.info('[Callback] payload:', data)
    toast.success(t('contact.callback.successTitle'), {
      description: t('contact.callback.successDesc'),
    })
    reset()
  }

  return (
    <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="cb-name" className="block text-sm font-medium text-gray-900">
          {t('contact.callback.fields.name')}
        </label>
        <input
          id="cb-name"
          type="text"
          {...register('name')}
          placeholder={t('contact.callback.placeholders.name') ?? ''}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name.message}</p> : null}
      </div>
      <div>
        <label htmlFor="cb-phone" className="block text-sm font-medium text-gray-900">
          {t('contact.callback.fields.phone')}
        </label>
        <input
          id="cb-phone"
          type="tel"
          {...register('phone')}
          placeholder={t('contact.callback.placeholders.phone') ?? ''}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.phone}
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
      </div>
      <div>
        <label htmlFor="cb-time" className="block text-sm font-medium text-gray-900">
          {t('contact.callback.fields.time')}
        </label>
        <input
          id="cb-time"
          type="text"
          {...register('time')}
          placeholder={t('contact.callback.placeholders.time') ?? ''}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>
      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? t('contact.callback.sending') : t('contact.callback.submit')}
        </button>
      </div>
    </form>
  )
}
