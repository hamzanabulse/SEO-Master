import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import CodeBlock from '@/components/CodeBlock'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'On-Page SEO & Content Strategy — Keywords, Titles, Quality | SEO MASTER HUB',
  description: 'Master on-page SEO: keyword intent mapping, title & meta optimization, and content quality signals. Author: Hamza Nabulsi.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'keyword-intent', title: 'Keyword Intent Mapping' },
  { id: 'title-optimization', title: 'Title & Meta Optimization' },
  { id: 'content-quality', title: 'Content Quality Signals' },
  { id: 'headings-structure', title: 'Headings & Structure' },
  { id: 'media-seo', title: 'Images, Alt Text & Media' },
  { id: 'content-refresh', title: 'Content Refresh & Canonicals' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'On-Page SEO & Content Strategy — Keywords, Titles, Quality',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', position: 1, name: 'Home', item: base },
    { '@type': 'ListItem', position: 2, name: 'On-Page SEO', item: `${base}/on-page-seo` },
  ],
}

export default function OnPageSEOPage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/on-page-seo', label: 'On-Page SEO' },
      ]} />
      <header className="mb-6">
        <h1>On-Page SEO & Content Strategy — Serve Intent, Win Clicks</h1>
        <p className="text-medium-grey">Translate user intent into content that ranks and converts with compelling titles and scannable structure.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="keyword-intent" className="mb-10">
          <h2>Keyword Intent Mapping</h2>
          <p>Group queries by informational, navigational, transactional, and commercial investigation. Create content that fully satisfies searcher goals.</p>
          <p>Then connect to <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page Authority Building</Link> to amplify reach.</p>
        </section>

        <section id="title-optimization" className="mb-10">
          <h2>Title & Meta Optimization</h2>
          <h3>Winning Titles</h3>
          <ul>
            <li>Place the primary keyword naturally</li>
            <li>Use numbers, outcomes, or clarity to boost CTR</li>
            <li>Keep under ~60 characters when possible</li>
          </ul>
          <h3>Meta Description Template</h3>
          <CodeBlock title="High-CTR meta" language="text" code={`{Primary keyword}: {clear benefit}. {proof or stat}. {CTA verb}.`} />
        </section>

        <section id="content-quality" className="mb-10">
          <h2>Content Quality Signals</h2>
          <ul>
            <li>Clear headings and short paragraphs (2–3 lines)</li>
            <li>Strong internal links using descriptive anchor text</li>
            <li>Credible external citations to high-authority sources</li>
          </ul>
          <p>See <Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO Fundamentals</Link> for E‑E‑A‑T and <Link className="font-semibold text-system-green" href="/advanced-seo">Advanced SEO</Link> for niche-specific enhancements. Clarify terminology in the <Link className="font-semibold text-system-green" href="/glossary">SEO Glossary</Link>.</p>
        </section>

        <section id="headings-structure" className="mb-10">
          <h2>Headings & Structure</h2>
          <p>Use one H1, then logical H2/H3s that mirror user tasks. Keep paragraphs scannable (2–3 lines) and front-load value.</p>
          <p>Link out to <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link> for performance-driven rendering that supports readability.</p>
        </section>

        <section id="media-seo" className="mb-10">
          <h2>Images, Alt Text & Media</h2>
          <ul>
            <li>Add descriptive alt text; avoid keyword stuffing</li>
            <li>Compress images and set explicit dimensions to reduce CLS</li>
            <li>Use captions for complex figures and charts</li>
          </ul>
          <p>Cross-reference <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/cwv-optimization">CWV Optimization</Link> for rendering stability.</p>
        </section>

        <section id="content-refresh" className="mb-10">
          <h2>Content Refresh & Canonicals</h2>
          <p>Refresh evergreen pieces quarterly. Consolidate overlapping articles and use canonicals to avoid duplication.</p>
          <p>Measure impact in <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link> and amplify with <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page SEO</Link>.</p>
        </section>

        <KeyTakeaways items={[
          'Map content to precise search intent',
          'Write compelling titles and concise meta descriptions',
          'Structure articles for mobile scannability',
          'Use internal links to distribute authority',
          'Refresh content and consolidate duplicates with canonicals',
        ]} />

        <section className="mb-12">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google — Creating Helpful, Reliable, People‑First Content</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener noreferrer">Google — Control Titles in Search Results</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer">Google — Snippets and Meta Descriptions</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer">Moz — Beginner’s Guide to SEO</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://ahrefs.com/blog/on-page-seo/" target="_blank" rel="noopener noreferrer">Ahrefs — On‑Page SEO</a></li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/ultimate-seo-guide">Ultimate SEO Guide</Link></li>
            <li><Link className="text-system-green font-semibold" href="/glossary">SEO Glossary</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/linking-audit">Internal Linking Audit Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/off-page-seo">Off‑Page SEO</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
    </div>
  )
}
