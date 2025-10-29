import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'SEO Site Audit Master Checklist — Technical, Content, Authority | SEO MASTER HUB',
  description: 'A comprehensive, step-by-step audit covering technical health, on-page quality, internal linking, Core Web Vitals, and authority signals.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'technical', title: 'Technical Health' },
  { id: 'onpage', title: 'On-Page Quality' },
  { id: 'internal-linking', title: 'Internal Linking' },
  { id: 'performance', title: 'Performance & CWV' },
  { id: 'authority', title: 'Authority & Off-Page' },
  { id: 'reporting', title: 'Reporting & Monitoring' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'SEO Site Audit Master Checklist',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

export default function SeoSiteAuditChecklist() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/checklists/seo-site-audit', label: 'SEO Site Audit' },
      ]} />

      <header className="mb-6">
        <h1>SEO Site Audit Master Checklist</h1>
        <p className="text-medium-grey">Use this to run predictable, end-to-end audits and prioritize fixes that move the needle.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="technical" className="mb-10">
          <h2>Technical Health</h2>
          <ul>
            <li>Indexation: robots rules, canonical tags, XML sitemap generated and submitted</li>
            <li>Crawlability: no orphan pages; logical architecture with shallow depth</li>
            <li>Status codes: 200s for key pages; fix 4xx/5xx; redirect chains removed</li>
            <li>Internationalization (if applicable): hreflang correctness and return tags</li>
          </ul>
        </section>

        <section id="onpage" className="mb-10">
          <h2>On-Page Quality</h2>
          <ul>
            <li>Titles concise with primary topic; compelling meta descriptions</li>
            <li>Clear H1 then H2/H3 hierarchy; 2–3 line paragraphs; media with alt text</li>
            <li>Content satisfies intent (informational / navigational / transactional / commercial)</li>
          </ul>
        </section>

        <section id="internal-linking" className="mb-10">
          <h2>Internal Linking</h2>
          <ul>
            <li>≥5 contextual internal links per page with descriptive anchors</li>
            <li>Pillar hubs link to ≥5 supporting assets; supporting pages link back to hub</li>
            <li>Breadcrumbs present (UI + JSON-LD)</li>
          </ul>
          <p>See also the <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/linking-audit">Internal Linking Audit Checklist</Link>.</p>
        </section>

        <section id="performance" className="mb-10">
          <h2>Performance & CWV</h2>
          <ul>
            <li>LCP &lt; 2.5s; INP &lt; 200ms; CLS &lt; 0.1 (field data)</li>
            <li>Images: next-gen formats, explicit dimensions; critical CSS inlined</li>
            <li>Split long tasks; defer non-critical scripts; cache policy set</li>
          </ul>
        </section>

        <section id="authority" className="mb-10">
          <h2>Authority & Off-Page</h2>
          <ul>
            <li>Digital PR and unlinked mentions workflow in place</li>
            <li>Guest posting and partnerships: value-first contributions</li>
            <li>Backlink audit: toxic links reviewed quarterly; disavow only as last resort</li>
          </ul>
        </section>

        <section id="reporting" className="mb-10">
          <h2>Reporting & Monitoring</h2>
          <ul>
            <li>GA4 + GSC linked; dashboards for sessions, CTR, conversions, cluster coverage</li>
            <li>UTM governance standard; clean URLs to avoid index bloat</li>
            <li>Monthly review cadence; track KPIs by pillar</li>
          </ul>
        </section>

        <KeyTakeaways items={[
          'Fix indexation and status codes before content work',
          'Enforce ≥5 contextual internal links per page',
          'Track field CWV and optimize monthly',
        ]} />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'SEO Site Audit', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/checklists/seo-site-audit` },
        ],
      }} />
    </div>
  )
}
