/**
 * @file Home.tsx
 * @description Home page assembly for Aviatech. Uses modular components and Tailwind styling.
 */

import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import Benefits from '../components/home/Benefits'
import Contact from '../components/home/Contact'
import Footer from '../components/layout/Footer'

/**
 * @component HomePage
 * @description Composes the landing experience with header, hero, benefits, and footer.
 */
export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Contact />
        {/* Future sections: services, equipment, industries, technical info, forms */}
      </main>
      <Footer />
    </div>
  )
}
