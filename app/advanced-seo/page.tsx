import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import CodeBlock from '@/components/CodeBlock'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Advanced & Specialized SEO — Local, Video, E‑commerce | SEO MASTER HUB',
  description: 'Specialized SEO tactics for Local SEO, Video SEO, and E‑commerce SEO. Author: Hamza Nabulsi.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'local-seo', title: 'Local SEO' },
  { id: 'video-seo', title: 'Video SEO' },
  { id: 'ecommerce-seo', title: 'E‑commerce SEO' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'Advanced & Specialized SEO — Local, Video, E‑commerce',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', position: 1, name: 'Home', item: base },
    { '@type': 'ListItem', position: 2, name: 'Advanced SEO', item: `${base}/advanced-seo` },
  ],
}

export default function AdvancedSEOPage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/advanced-seo', label: 'Advanced SEO' },
      ]} />
      <header className="mb-6">
        <h1>Advanced & Specialized SEO — Dominate Niches</h1>
        <p className="text-medium-grey">Go beyond basics with specialized playbooks that create outsized results in your business model.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="local-seo" className="mb-10">
          <h2>Local SEO</h2>
          <p>Optimize your Google Business Profile, local citations, and location pages. Capture map pack visibility. Build local authority through <Link className="font-semibold text-system-green" href="/off-page-seo">Off‑Page SEO</Link> partnerships and mentions.</p>
          <p>Cross-link with <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO</Link> to strengthen location relevance and measure outcomes in <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link>.</p>
        </section>

        <section id="video-seo" className="mb-10">
          <h2>Video SEO</h2>
          <p>Use descriptive titles, rich descriptions, and chapters. Add VideoObject schema on hosted pages.</p>
          <p>External: <a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/appearance/video" target="_blank" rel="noopener noreferrer">Google Video Best Practices</a>.</p>
          <h3>VideoObject JSON-LD</h3>
          <CodeBlock title="VideoObject" language="json" code={`{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How to Speed Up Your Site",
  "description": "Practical steps to improve Core Web Vitals.",
  "thumbnailUrl": ["https://example.com/thumb.jpg"],
  "uploadDate": "2025-01-15",
  "contentUrl": "https://example.com/video.mp4",
  "embedUrl": "https://player.example.com/embed/123"
}`} />
        </section>

        <section id="ecommerce-seo" className="mb-10">
          <h2>E‑commerce SEO</h2>
          <p>Implement Product and Review schema, optimize faceted navigation, and scale category page content.</p>
          <p>Internal: read <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link> for product revenue attribution.</p>
          <h3>Product JSON-LD</h3>
          <CodeBlock title="Product" language="json" code={`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Widget Pro",
  "image": ["https://example.com/widget.jpg"],
  "description": "Durable widget with lifetime warranty.",
  "brand": {"@type":"Brand","name":"Acme"},
  "offers": {"@type":"Offer","priceCurrency":"USD","price":"49.00","availability":"https://schema.org/InStock"}
}`} />
        </section>

        <KeyTakeaways items={[
          'Tailor strategies to your business model',
          'Use domain-specific schema (Video, Product, Review)',
          'Close the loop with analytics for ROI measurement',
        ]} />

        <section className="mb-12">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer">Google — Guidelines for Representing Your Business on Google</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/appearance/structured-data/product" target="_blank" rel="noopener noreferrer">Google — Product Structured Data</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/appearance/structured-data/review-snippet" target="_blank" rel="noopener noreferrer">Google — Review Snippet</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://www.searchenginejournal.com/ecommerce-seo-guide/" target="_blank" rel="noopener noreferrer">Search Engine Journal — E‑commerce SEO Guide</a></li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/on-page-seo">On‑Page SEO</Link></li>
            <li><Link className="text-system-green font-semibold" href="/technical-seo">Technical SEO</Link></li>
            <li><Link className="text-system-green font-semibold" href="/data-analysis">Data Analysis</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Master Checklist</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
    </div>
  )
}
