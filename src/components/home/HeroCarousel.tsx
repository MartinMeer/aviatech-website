/**
 * @file HeroCarousel.tsx
 * @description Full-bleed background carousel for the Hero section using Embla. Includes autoplay, arrows, and dots.
 */

import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * @interface HeroCarouselItem
 * @description Image item for the hero carousel.
 */
export interface HeroCarouselItem {
  /** Image URL (placeholder or real). */
  src: string
  /** Optional alt text. Use '' for decorative usage. */
  alt?: string
}

/**
 * @interface HeroCarouselProps
 * @description Props for the HeroCarousel component.
 */
export interface HeroCarouselProps {
  /** Array of slide images. */
  images: HeroCarouselItem[]
  /** Enable autoplay. */
  autoPlay?: boolean
  /** Interval for autoplay in ms. */
  intervalMs?: number
  /** Tailwind classes for size/position. */
  className?: string
  /** Embla options if custom behavior needed. */
  options?: EmblaOptionsType
}

/**
 * @component HeroCarousel
 * @description Responsive, accessible background carousel for the hero area.
 */
export default function HeroCarousel({
  images,
  autoPlay = true,
  intervalMs = 5000,
  className = '',
  options = { loop: true, align: 'start', skipSnaps: false },
}: HeroCarouselProps): JSX.Element {
  const [viewportRef, emblaApi] = useEmblaCarousel(options)
  const [selected, setSelected] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const timerRef = React.useRef<number | null>(null)
  const isInteractingRef = React.useRef(false)

  /** Update UI state on selection changes. */
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  /** Setup listeners when API is ready. */
  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  /** Autoplay with pause on user interaction. */
  React.useEffect(() => {
    if (!emblaApi || !autoPlay) return

    const start = () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(() => {
        if (!isInteractingRef.current) emblaApi.scrollNext()
      }, intervalMs)
    }
    const stop = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }

    start()
    return () => stop()
  }, [emblaApi, autoPlay, intervalMs])

  const handlePrev = () => emblaApi?.scrollPrev()
  const handleNext = () => emblaApi?.scrollNext()
  const handleDot = (index: number) => emblaApi?.scrollTo(index)

  const onEnter = () => {
    isInteractingRef.current = true
  }
  const onLeave = () => {
    isInteractingRef.current = false
  }

  return (
    <div
      className={`relative h-full w-full select-none ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocusCapture={onEnter}
      onBlurCapture={onLeave}
      aria-roledescription="carousel"
    >
      {/* Viewport */}
      <div ref={viewportRef} className="h-full w-full overflow-hidden">
        <div className="flex h-full">
          {images.map((item, idx) => (
            <div key={idx} className="relative h-full flex-[0_0_100%]">
              {/* Slide image */}
              <img src={item.src} alt={item.alt ?? ''} className="h-full w-full object-cover" />
              {/* Contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-gray-900/60 to-gray-900/70" />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            disabled={!canScrollPrev && images.length <= 1}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-gray-900 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={handleNext}
            disabled={!canScrollNext && images.length <= 1}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-gray-900 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 md:px-6">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected}
              onClick={() => handleDot(i)}
              className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition ${
                i === selected ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
