import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'The Ultimate SEO Guide — Strategy to Execution | SEO MASTER HUB',
  description: 'A consolidated, mobile-first manual covering strategy, technical, content, authority, and analytics with links to deep dives and templates.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'strategy', title: 'Strategy & Pillar Planning' },
  { id: 'technical', title: 'Technical SEO' },
  { id: 'content', title: 'On-Page & Content' },
  { id: 'authority', title: 'Off-Page & PR' },
  { id: 'analytics', title: 'Analytics & Reporting' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'The Ultimate SEO Guide — Strategy to Execution',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

export default function UltimateGuidePage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/ultimate-seo-guide', label: 'Ultimate SEO Guide' },
      ]} />
      <header className="mb-6">
        <h1>The Ultimate SEO Guide — Strategy to Execution</h1>
        <p className="text-medium-grey">Use this as your master playbook. Each section links to deep, hands-on tutorials and pillar pages.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="strategy" className="mb-10">
          <h2>Strategy & Pillar Planning</h2>
          <p>Define topical clusters and pillars that match business objectives.</p>
          <p>Start with <Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO Fundamentals</Link> then flesh out clusters across <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page</Link> and <Link className="font-semibold text-system-green" href="/technical-seo">Technical</Link>.</p>
        </section>

        <section id="technical" className="mb-10">
          <h2>Technical SEO</h2>
          <p>Focus on CWV, crawlability, sitemaps, robots, and structured data.</p>
          <p>Apply the <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/cwv-optimization">CWV Optimization tutorial</Link> and validate with Search Console.</p>
        </section>

        <section id="content" className="mb-10">
          <h2>On-Page & Content</h2>
          <p>Map intent to pages, write compelling titles, and keep content scannable. Use media with descriptive alt text and secure internal links.</p>
          <p>See <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO</Link> for templates and <Link className="font-semibold text-system-green" href="/glossary">Glossary</Link> for terminology.</p>
        </section>

        <section id="authority" className="mb-10">
          <h2>Off-Page & PR</h2>
          <p>Build relationships and brand signals with digital PR, guest collaborations, and unlinked mention reclamation.</p>
          <p>Go to <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page SEO</Link> for scripts and outreach frameworks.</p>
        </section>

        <section id="analytics" className="mb-10">
          <h2>Analytics & Reporting</h2>
          <p>Track KPIs that reflect growth: organic sessions, CTR, conversions, and cluster coverage.</p>
          <p>Use <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link> and the <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/gsc-setup">GSC Setup tutorial</Link>.</p>
        </section>

        <KeyTakeaways items={[
          'Plan around pillars and clusters',
          'Ship fast, measure, iterate monthly',
          'Invest in authority with PR and partnerships',
          'Document dashboards that match business goals',
        ]} />

        <section className="mb-10">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google — SEO Starter Guide</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer">Google — Search Essentials</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://web.dev/learn/performance/" target="_blank" rel="noopener noreferrer">web.dev — Learn Performance</a></li>
          </ul>
          <h3 className="mt-6">Related Checklists</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Master Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing Checklist</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Ultimate SEO Guide', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/ultimate-seo-guide` },
        ],
      }} />
    </div>
  )
}
