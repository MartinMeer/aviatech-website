/**
 * @file PhotoStrip.tsx
 * @description Responsive production photo strip with smart placeholders.
 */

import React from 'react'

/**
 * @component PhotoStrip
 * @description Simple responsive image strip for production photos.
 */
export default function PhotoStrip(): JSX.Element {
  const items = [
    { name: 'CNC center', src: 'https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/86a2eb51-efb2-4907-8697-947589d9d075.jpg' },
    { name: 'Turning', src: 'https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/a165484c-9732-4605-b12f-685123c9e292.jpg' },
    { name: 'Inspection', src: 'https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/0d91882d-e491-4110-a81b-6cf5b97f7fcf.jpg' },
    { name: 'Titanium parts', src: 'https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/e9dc1ed7-101d-44bd-98f0-daa9f6c0f999.jpg' },
    { name: 'Aluminum milling', src: 'https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/c9010a4b-1c5d-4dca-8de3-7080ce0f8af1.jpg' },
    { name: 'Team at work', src: 'https://pub-cdn.sider.ai/u/U0GVH7028Y5/web-coder/68bdb75670ddcc6cca2c87f7/resource/4f2506f4-9ed9-4566-a1ca-6ea6380916a9.jpg' },
  ]

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <div key={i} className="aspect-[4/3] w-full overflow-hidden rounded-md">
            <img
              src={item.src}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              decoding="async"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
