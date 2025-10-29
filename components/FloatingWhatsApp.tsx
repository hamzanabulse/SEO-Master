'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating button after scrolling 50% of the page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/96176578651"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </a>
  )
}