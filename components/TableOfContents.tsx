'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, List } from 'lucide-react'

interface TocItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false) // Close mobile menu after selection
    }
  }

  return (
    <div className="mb-8">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex items-center justify-between bg-dark-grey border border-system-green rounded-lg p-4 mb-4 tap-target"
        aria-expanded={isOpen}
        aria-label="Toggle table of contents"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-system-green" />
          <span className="font-medium">Table of Contents</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-system-green" />
        ) : (
          <ChevronDown className="w-5 h-5 text-system-green" />
        )}
      </button>

      {/* TOC Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="toc-container">
          <h3 className="text-lg font-semibold mb-4 text-system-green flex items-center gap-2">
            <List className="w-5 h-5" />
            Table of Contents
          </h3>
          
          <nav aria-label="Table of contents">
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-3 py-2 rounded hover:bg-system-green hover:bg-opacity-10 hover:text-system-green transition-colors duration-200 text-sm tap-target"
                  >
                    <span className="text-system-green font-mono text-xs mr-2">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}