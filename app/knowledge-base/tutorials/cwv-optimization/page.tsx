import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Optimize Core Web Vitals — Practical Fixes | SEO MASTER HUB',
  description: 'Reduce LCP, stabilize CLS, and improve INP with practical, mobile-first optimizations. Author: Hamza Nabulsi.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'lcp', title: 'Largest Contentful Paint (LCP)' },
  { id: 'cls', title: 'Cumulative Layout Shift (CLS)' },
  { id: 'inp', title: 'Interaction to Next Paint (INP)' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
]

export default function CWVOptimizationTutorial() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/tutorials/cwv-optimization', label: 'CWV Optimization' },
      ]} />
      <header className="mb-6">
        <h1>Optimize Core Web Vitals — Practical Fixes</h1>
        <p className="text-medium-grey">Implement quick wins for LCP, CLS, and INP to boost user experience and rankings.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="lcp" className="mb-8">
          <h2>Largest Contentful Paint (LCP)</h2>
          <h3>Actions</h3>
          <ul>
            <li>Inline critical CSS and defer non-critical CSS</li>
            <li>Preload hero image and set explicit width/height</li>
            <li>Serve compressed images in next-gen formats</li>
          </ul>
        </section>

        <section id="cls" className="mb-8">
          <h2>Cumulative Layout Shift (CLS)</h2>
          <ul>
            <li>Reserve space for images/ads with width and height</li>
            <li>Avoid inserting content above existing content except on user interaction</li>
          </ul>
        </section>

        <section id="inp" className="mb-8">
          <h2>Interaction to Next Paint (INP)</h2>
          <ul>
            <li>Reduce main-thread blocking tasks</li>
            <li>Split long tasks and lazy-load non-critical code</li>
          </ul>
        </section>

        <section id="key-takeaways" className="key-takeaways">
          <h3>Key Takeaways</h3>
          <ul>
            <li>Prioritize above-the-fold rendering</li>
            <li>Preload critical assets; lazy-load the rest</li>
            <li>Measure in the field; iterate monthly</li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Optimize Core Web Vitals — Practical Fixes',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
      }} />
      {/* HowTo schema highlighting LCP/CLS/INP steps */}
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Improve Core Web Vitals',
        description: 'Step-by-step actions to improve LCP, CLS and INP.',
        totalTime: 'PT30M',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Largest Contentful Paint (LCP)',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/cwv-optimization#lcp`,
            itemListElement: [
              { '@type': 'HowToDirection', text: 'Inline critical CSS and defer the rest.' },
              { '@type': 'HowToDirection', text: 'Preload hero image and specify dimensions.' },
            ]
          },
          {
            '@type': 'HowToStep',
            name: 'Cumulative Layout Shift (CLS)',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/cwv-optimization#cls`,
            itemListElement: [
              { '@type': 'HowToDirection', text: 'Reserve space with width/height attributes.' },
              { '@type': 'HowToDirection', text: 'Avoid inserting content above existing content.' },
            ]
          },
          {
            '@type': 'HowToStep',
            name: 'Interaction to Next Paint (INP)',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/cwv-optimization#inp`,
            itemListElement: [
              { '@type': 'HowToDirection', text: 'Reduce main-thread blocking and split long tasks.' },
              { '@type': 'HowToDirection', text: 'Lazy-load non-critical code.' },
            ]
          }
        ]
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'CWV Optimization', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/cwv-optimization` },
        ]
      }} />
    </div>
  )
}
