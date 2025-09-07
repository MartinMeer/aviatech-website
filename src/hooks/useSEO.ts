/**
 * @file useSEO.ts
 * @description Custom hook for managing SEO meta tags dynamically
 */

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

/**
 * @hook useSEO
 * @description Updates document title and meta tags for SEO
 */
export function useSEO({
  title,
  description,
  keywords,
  image = 'https://aviatech.ru/og-image.jpg',
  url = 'https://aviatech.ru/'
}: SEOProps = {}) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Update document title
    const baseTitle = 'Aviatech - High-Precision Metalworking for Aerospace Industry'
    const pageTitle = title ? `${title} | ${baseTitle}` : baseTitle
    document.title = pageTitle

    // Update meta description
    const metaDescription = description || t('seo.description')
    updateMetaTag('name', 'description', metaDescription)
    updateMetaTag('property', 'og:description', metaDescription)
    updateMetaTag('property', 'twitter:description', metaDescription)

    // Update meta title
    updateMetaTag('name', 'title', pageTitle)
    updateMetaTag('property', 'og:title', pageTitle)
    updateMetaTag('property', 'twitter:title', pageTitle)

    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords)
    }

    // Update Open Graph image
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'twitter:image', image)

    // Update URL
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'twitter:url', url)

    // Update language
    const lang = i18n.language === 'ru' ? 'ru_RU' : 'en_US'
    updateMetaTag('property', 'og:locale', lang)

  }, [title, description, keywords, image, url, t, i18n.language])
}

/**
 * @function updateMetaTag
 * @description Helper function to update or create meta tags
 */
function updateMetaTag(attribute: string, name: string, content: string) {
  const selector = `meta[${attribute}="${name}"]`
  let metaTag = document.querySelector(selector) as HTMLMetaElement

  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attribute, name)
    document.head.appendChild(metaTag)
  }

  metaTag.setAttribute('content', content)
}

export default useSEO
