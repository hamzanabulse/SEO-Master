import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: 'Internal Linking Audit Checklist — ≥5 Contextual Links Per Pillar | SEO MASTER HUB',
  description: 'A step-by-step internal linking audit to ensure each pillar and article has at least five contextual internal links with descriptive anchors.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'prep', title: 'Preparation' },
  { id: 'page-level', title: 'Page-level Checks' },
  { id: 'pillar-level', title: 'Pillar-level Checks' },
  { id: 'sitewide', title: 'Sitewide Patterns' },
  { id: 'tracking', title: 'Tracking & Iteration' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'Internal Linking Audit Checklist',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

export default function LinkingAuditChecklist() {
  return (
    <div className="content-container">
      <header className="mb-6">
        <h1>Internal Linking Audit Checklist — ≥5 Contextual Links Per Pillar</h1>
        <p className="text-medium-grey">Use this checklist monthly to reinforce topical clusters, distribute authority, and improve crawl paths.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="prep" className="mb-10">
          <h2>Preparation</h2>
          <ul>
            <li>Export all pillar pages and supporting articles</li>
            <li>List target anchors and preferred destinations per pillar</li>
            <li>Identify orphan pages with zero internal links</li>
          </ul>
        </section>

        <section id="page-level" className="mb-10">
          <h2>Page-level Checks</h2>
          <ul>
            <li>≥5 contextual internal links to relevant content</li>
            <li>Anchors are descriptive; avoid generic “click here”</li>
            <li>At least one link to the parent pillar page</li>
            <li>At least one link to a tutorial or glossary term</li>
            <li>External citations open in new tab with rel attributes</li>
          </ul>
        </section>

        <section id="pillar-level" className="mb-10">
          <h2>Pillar-level Checks</h2>
          <ul>
            <li>Cluster hub links out to ≥5 high-value supporting pages</li>
            <li>Supporting pages link back to the pillar hub</li>
            <li>Cross-pillar links when contextually relevant (avoid over-linking)</li>
            <li>Breadcrumbs present and valid (JSON-LD)</li>
          </ul>
        </section>

        <section id="sitewide" className="mb-10">
          <h2>Sitewide Patterns</h2>
          <ul>
            <li>Consistent link styling and accessible focus states</li>
            <li>Navigation covers all pillars and knowledge base</li>
            <li>Sitemap includes all indexable routes</li>
          </ul>
        </section>

        <section id="tracking" className="mb-10">
          <h2>Tracking & Iteration</h2>
          <ul>
            <li>Track clicks via GA4 events on key internal links</li>
            <li>Review top exit pages and add helpful next-step links</li>
            <li>Re-audit monthly; prioritize pages with traffic but low CTR</li>
          </ul>
          <p>Reference: <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link>, <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link>, <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO</Link>.</p>
        </section>

        <KeyTakeaways items={[
          'Every article should link contextually to ≥5 relevant pages',
          'Always include pillar hub and at least one tutorial/glossary link',
          'Iterate monthly based on analytics and user behavior',
        ]} />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'Linking Audit Checklist', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/checklists/linking-audit` },
        ],
      }} />
    </div>
  )
}
