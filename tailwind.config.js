/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Remapped to White & Orange UI
        'obsidian': '#FFFFFF',         // used as background in existing styles
        'system-green': '#FF7A00',     // primary accent remapped to orange
        'alert-cyan': '#1A73E8',       // external link accent (blue)
        'warning-red': '#D93025',
        'light-grey': '#111111',       // text color remapped to near-black
        'medium-grey': '#6B7280',      // neutral text
        'dark-grey': '#E5E7EB',        // card/toc backgrounds
      },
      fontFamily: {
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Mobile-first typography
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'sm': ['0.875rem', { lineHeight: '1.3125rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }], // 16px minimum
        'lg': ['1.125rem', { lineHeight: '1.6875rem' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.8125rem' }],
        '4xl': ['2.25rem', { lineHeight: '3.375rem' }],
      },
      lineHeight: {
        'relaxed': '1.5', // Mandatory 1.5x line height
      },
      spacing: {
        'tap-target': '44px', // Minimum tap target size
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(255, 122, 0, 0.6)'
          },
          '50%': {
            opacity: '.8',
            boxShadow: '0 0 0 10px rgba(255, 122, 0, 0)'
          },
        },
        'glow': {
          'from': {
            boxShadow: '0 0 5px rgba(255, 122, 0, 0.4)',
          },
          'to': {
            boxShadow: '0 0 16px rgba(255, 122, 0, 0.7)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}