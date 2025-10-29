import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import CodeBlock from '@/components/CodeBlock'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Data Analysis & Performance Tracking — Analytics, GSC, KPIs | SEO MASTER HUB',
  description: 'Measure what matters: Google Analytics, Search Console, KPI selection, and reporting workflows. Author: Hamza Nabulsi.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'analytics-setup', title: 'Analytics Setup' },
  { id: 'gsc-performance', title: 'GSC Performance & Coverage' },
  { id: 'kpis', title: 'KPIs & Reporting' },
  { id: 'utm-governance', title: 'UTM Governance' },
  { id: 'looker-dashboards', title: 'Looker Studio Dashboards' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'Data Analysis & Performance Tracking — Analytics, GSC, KPIs',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', position: 1, name: 'Home', item: base },
    { '@type': 'ListItem', position: 2, name: 'Data Analysis', item: `${base}/data-analysis` },
  ],
}

export default function DataAnalysisPage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/data-analysis', label: 'Data Analysis' },
      ]} />
      <header className="mb-6">
        <h1>Data Analysis & Performance Tracking — Measure, Learn, Iterate</h1>
        <p className="text-medium-grey">Instrument your site, track KPIs, and build a feedback loop that accelerates SEO growth.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="analytics-setup" className="mb-10">
          <h2>Analytics Setup</h2>
          <p>Implement Google Analytics 4 with server-side tagging where possible. Track conversions aligned with your growth model.</p>
          <p>Internal: see <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/gsc-setup">GSC Setup Tutorial</Link> for search data visibility.</p>
          <h3>Recommended Events</h3>
          <ul>
            <li>generate_lead, purchase, begin_checkout</li>
            <li>view_item, view_item_list, select_item</li>
            <li>search, view_search_results</li>
          </ul>
        </section>

        <section id="gsc-performance" className="mb-10">
          <h2>GSC Performance & Coverage</h2>
          <p>Use the Performance report to track queries, pages, and CTR. Monitor Index Coverage to fix discoverability issues quickly.</p>
        </section>

        <section id="kpis" className="mb-10">
          <h2>KPIs & Reporting</h2>
          <ul>
            <li>Organic sessions and click-through rate</li>
            <li>Topical coverage growth across pillar clusters</li>
            <li>Revenue or conversions attributed to organic</li>
          </ul>
          <p>Connect to <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO</Link> for content changes and <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link> for performance work. Close the loop with <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page SEO</Link>. For a periodic governance pass, run the <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit</Link>.</p>
        </section>

        <section id="utm-governance" className="mb-10">
          <h2>UTM Governance</h2>
          <p>Standardize UTM parameters to ensure clean attribution and avoid duplicate URLs being indexed.</p>
          <CodeBlock title="UTM Scheme" language="text" code={`utm_source={channel}&utm_medium={placement}&utm_campaign={campaign}&utm_content={creative}`}/>
        </section>

        <section id="looker-dashboards" className="mb-10">
          <h2>Looker Studio Dashboards</h2>
          <p>Build a simple dashboard: sessions by landing page, CTR by query, and conversions by page. Filter by pillar clusters.</p>
          <p>For BigQuery exports, you can join GA4 and GSC to analyze query-to-revenue paths.</p>
          <CodeBlock title="Sample SQL (BigQuery)" language="sql" code={`-- pseudo: sessions and revenue by landing page
SELECT landing_page, SUM(sessions) AS sessions, SUM(revenue) AS revenue
FROM analytics.ga4_sessions
GROUP BY 1
ORDER BY revenue DESC`} />
        </section>

        <KeyTakeaways items={[
          'Combine GA4 + GSC + revenue to understand ROI',
          'Govern UTMs and keep URLs clean for SEO',
          'Instrument dashboards that reflect pillar performance',
        ]} />

        <section className="mb-12">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/analytics" target="_blank" rel="noopener noreferrer">Google Analytics — Developer Resources</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://support.google.com/webmasters/answer/7576553" target="_blank" rel="noopener noreferrer">Google Search Console — Performance Report</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developer.chrome.com/docs/crux/bigquery/" target="_blank" rel="noopener noreferrer">Chrome UX Report (CrUX) on BigQuery</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://lookerstudio.google.com/" target="_blank" rel="noopener noreferrer">Looker Studio</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://support.google.com/analytics/answer/10917952" target="_blank" rel="noopener noreferrer">GA4 — Campaign Tagging (UTM) Guide</a></li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/tutorials/gsc-setup">GSC Setup Tutorial</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/tutorials/cwv-optimization">CWV Optimization Tutorial</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/ultimate-seo-guide">Ultimate SEO Guide</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
    </div>
  )
}
