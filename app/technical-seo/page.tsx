import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import CodeBlock from '@/components/CodeBlock'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Technical SEO Mastery — CWV, Speed, Schema, Architecture | SEO MASTER HUB',
  description: 'Master Technical SEO: Core Web Vitals, site speed optimization, schema markup, and clean architecture. Author: Hamza Nabulsi.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'core-web-vitals', title: 'Core Web Vitals' },
  { id: 'site-speed', title: 'Site Speed Optimization' },
  { id: 'schema-markup', title: 'Schema Markup' },
  { id: 'architecture', title: 'Architecture & Crawlability' },
  { id: 'robots-indexation', title: 'Robots, Indexing & Canonicals' },
  { id: 'sitemaps-pagination', title: 'Sitemaps & Pagination' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'Technical SEO Mastery — CWV, Speed, Schema, Architecture',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', position: 1, name: 'Home', item: base },
    { '@type': 'ListItem', position: 2, name: 'Technical SEO', item: `${base}/technical-seo` },
  ],
}

export default function TechnicalSEOPage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/technical-seo', label: 'Technical SEO' },
      ]} />
      <header className="mb-6">
        <h1>Technical SEO Mastery — Build Fast, Crawlable, Structured Sites</h1>
        <p className="text-medium-grey">The technical foundation that unlocks discoverability and superior user experience. Internal links guide you through execution.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="core-web-vitals" className="mb-10">
          <h2>Core Web Vitals</h2>
          <p>Focus on Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Prioritize above-the-fold content and reduce render-blocking resources. Validate improvements with the <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing Checklist</Link>.</p>
          <p>Continue in <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/cwv-optimization">Optimize Core Web Vitals tutorial</Link> to apply fixes step-by-step. Also see <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link> to measure field data and <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO</Link> for content rendering best practices.</p>
        </section>

        <section id="site-speed" className="mb-10">
          <h2>Site Speed Optimization</h2>
          <h3>Quick Wins</h3>
          <ul>
            <li>Serve modern image formats and correct sizes</li>
            <li>Defer non-critical scripts</li>
            <li>Use HTTP/2 and CDN caching</li>
          </ul>
          <p>External reference: <a className="font-semibold text-alert-cyan" href="https://web.dev/" target="_blank" rel="noopener noreferrer">web.dev by Google</a>.</p>
          <h3>Edge Caching Example (Nginx)</h3>
          <CodeBlock title="Nginx caching headers" language="nginx" code={`# Static assets with long cache
location ~* \.(?:js|css|png|jpg|jpeg|gif|svg|woff2?)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}

# HTML with short cache
location ~* \.(?:html)$ {
  add_header Cache-Control "public, max-age=60";
}`} />
        </section>

        <section id="schema-markup" className="mb-10">
          <h2>Schema Markup</h2>
          <p>Implement Article, FAQ, and Breadcrumb schema to improve search appearance.</p>
          <p>Use our components to inject JSON-LD easily and validate with Rich Results Test.</p>
          <h3>Article JSON-LD Example</h3>
          <CodeBlock title="Article JSON-LD" language="json" code={`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "author": {"@type":"Person","name":"Hamza Nabulsi"}
}`} />
        </section>

        <section id="architecture" className="mb-10">
          <h2>Architecture & Crawlability</h2>
          <p>Design clean, shallow site architecture with descriptive URLs and robust internal linking.</p>
          <p>Continue to <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO & Content Strategy</Link> to connect architecture with content hubs. Reinforce with <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page SEO</Link> to distribute authority across clusters.</p>
        </section>

        <section id="robots-indexation" className="mb-10">
          <h2>Robots, Indexing & Canonicals</h2>
          <p>Control discoverability with robots rules, canonical tags, and noindex where needed (e.g., faceted URLs).</p>
          <h3>robots.txt</h3>
          <CodeBlock title="Robots.txt minimal" language="text" code={`User-agent: *
Disallow: /admin/
Allow: /`} />
          <p>Learn more in <Link className="font-semibold text-system-green" href="/faq">FAQ</Link> and check <Link className="font-semibold text-system-green" href="/knowledge-base">Knowledge Base</Link> for implementation tutorials.</p>
        </section>

        <section id="sitemaps-pagination" className="mb-10">
          <h2>Sitemaps & Pagination</h2>
          <p>Generate a dynamic XML sitemap and ensure rel="next/prev" or strong internal linking for paginated series.</p>
          <p>See our <Link className="font-semibold text-system-green" href="/sitemap.xml">sitemap.xml</Link> and <Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO Fundamentals</Link> for discovery basics.</p>
        </section>

        <KeyTakeaways items={[
          'Prioritize Core Web Vitals for real-user performance',
          'Optimize images, scripts, and caching for speed',
          'Add schema to qualify for rich results',
          'Design crawlable architecture with strong internal links',
          'Control indexation with robots, canonicals, and sitemaps',
        ]} />

        <section className="mb-12">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">web.dev — Core Web Vitals</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google — SEO Starter Guide</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/appearance/structured-data/search-gallery" target="_blank" rel="noopener noreferrer">Google — Structured Data Gallery</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/crawling-indexing/overview-google-crawling-indexing" target="_blank" rel="noopener noreferrer">Google — Crawling & Indexing Overview</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://www.sitemaps.org/protocol.html" target="_blank" rel="noopener noreferrer">XML Sitemaps — Protocol</a></li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/tutorials/cwv-optimization">CWV Optimization Tutorial</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Master Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/faq">SEO FAQ</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
    </div>
  )
}
