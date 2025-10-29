'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  title: string
  language: string
  code: string
}

export default function CodeBlock({ title, language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="relative bg-obsidian border border-system-green rounded-lg my-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-dark-grey px-4 py-2 border-b border-system-green">
        <div className="flex items-center gap-2">
          <span className="text-system-green font-mono text-sm">{title}</span>
          <span className="text-xs text-medium-grey bg-obsidian px-2 py-1 rounded">
            {language}
          </span>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="copy-button flex items-center gap-1"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code className="text-system-green font-mono whitespace-pre-wrap">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}