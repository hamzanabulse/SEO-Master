import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Navigation from '@/components/Navigation'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ProgressIndicator from '@/components/ProgressIndicator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { getBaseUrl } from '@/lib/site'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: 'SEO MASTER HUB - Ultimate SEO Authority Guide',
  description: 'The definitive, comprehensive SEO guide application. Master Technical SEO, On-Page Optimization, Link Building, and Advanced SEO Strategies with mobile-first design.',
  keywords: 'SEO, Search Engine Optimization, Technical SEO, Link Building, Digital Marketing, SEO Guide, SEO Tools',
  authors: [{ name: 'Hamza Nabulsi', url: 'https://www.linkedin.com/in/hamzanabulsii/' }],
  robots: 'index, follow',
  alternates: {
    languages: {
      en: getBaseUrl(),
      'x-default': getBaseUrl(),
    },
  },
  openGraph: {
    title: 'SEO MASTER HUB - Ultimate SEO Authority Guide',
    description: 'Master SEO with the most comprehensive guide for Technical SEO, Content Strategy, and Authority Building.',
    url: getBaseUrl(),
    siteName: 'SEO MASTER HUB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO MASTER HUB - Ultimate SEO Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO MASTER HUB - Ultimate SEO Authority Guide',
    description: 'Master SEO with the most comprehensive guide for Technical SEO, Content Strategy, and Authority Building.',
    images: ['/twitter-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF7A00',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
  <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0A0A0A" />
        <meta name="theme-color" content="#FF7A00" />
        {(() => {
          const token = process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'J9eAu7DpQGXViJ65p3fbCdhYBlI1TxEWT-vu9LufmzY'
          return token ? (
            <meta name="google-site-verification" content={token} />
          ) : null
        })()}
      </head>
      <body className="bg-obsidian text-light-grey antialiased">
        <ProgressIndicator />
        <Header />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        {/* Site-wide Organization schema */}
        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SEO MASTER HUB',
          url: getBaseUrl(),
          logo: `${getBaseUrl()}/logo.svg`,
          sameAs: [
            'https://www.linkedin.com/in/hamzanabulsii/'
          ]
        }} />
      </body>
    </html>
  )
}