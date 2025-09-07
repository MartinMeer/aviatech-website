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
import useSEO from '../hooks/useSEO'

/**
 * @component HomePage
 * @description Composes the landing experience with header, hero, benefits, and footer.
 */
export default function HomePage(): JSX.Element {
  // Set up SEO for the home page
  useSEO({
    title: 'Aviatech - High-Precision Metalworking for Aerospace Industry',
    description: 'Professional metalworking services for aerospace and space industries. CNC machining of aluminum, titanium, and heat-resistant steels. 15+ years experience, ±0.01mm precision.',
    keywords: 'aerospace metalworking, CNC machining, titanium, aluminum, precision manufacturing, aerospace industry, metalworking Moscow',
  })

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
