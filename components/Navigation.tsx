'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Target, Zap, TrendingUp, Globe, BarChart3, Award, GraduationCap, ShieldCheck, User, BadgeCheck } from 'lucide-react'

const navigationItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/seo-fundamentals', label: 'SEO Fundamentals & Glossary', icon: Target },
  { href: '/technical-seo', label: 'Technical SEO Mastery', icon: Zap },
  { href: '/on-page-seo', label: 'On-Page SEO & Content Strategy', icon: TrendingUp },
  { href: '/off-page-seo', label: 'Off-Page SEO & Authority Building', icon: Globe },
  { href: '/data-analysis', label: 'Data Analysis & Performance Tracking', icon: BarChart3 },
  { href: '/advanced-seo', label: 'Advanced & Specialized SEO', icon: Award },
  { href: '/quiz', label: 'Quiz & Certification', icon: GraduationCap },
  { href: '/verify', label: 'Verify Certificate', icon: ShieldCheck },
  { href: '/about', label: 'About', icon: User },
  { href: '/best-seo-expert-in-lebanon', label: 'Best SEO Expert (LB)', icon: BadgeCheck },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className={`hamburger-menu ${scrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''}`}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-obsidian bg-opacity-95 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Navigation Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-obsidian border-l border-system-green transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <h2 className="text-2xl font-bold text-system-green mb-8 text-center">
              SEO MASTER HUB
            </h2>
            
            <nav className="space-y-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon as any
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-4 p-4 rounded-lg border border-dark-grey hover:border-system-green group transition-all duration-200 tap-target"
                  >
                    <IconComponent className="w-5 h-5 text-system-green group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-light-grey group-hover:text-system-green transition-colors duration-200 text-base">
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </nav>

            {/* Contact CTA in Navigation */}
            <div className="mt-12 p-6 bg-dark-grey border border-system-green rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-system-green">
                Strategic Consultation
              </h3>
              <p className="text-sm text-medium-grey mb-4">
                Direct access to expert SEO guidance by Hamza Nabulsii
              </p>
              <a
                href="https://wa.me/96176578651"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center block"
                onClick={closeMenu}
              >
                Contact Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}