import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CodeBlock from '@/components/CodeBlock'

export const metadata = {
  title: 'CWV Field Testing Checklist — LCP, INP, CLS | SEO MASTER HUB',
  description: 'A practical, mobile-first field testing checklist for Core Web Vitals across real devices and networks, with repeatable scenarios and triage steps.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'goals', title: 'Goals & Success Criteria' },
  { id: 'setup', title: 'Test Setup' },
  { id: 'scenarios', title: 'Test Scenarios' },
  { id: 'measure', title: 'Measurements & Tools' },
  { id: 'triage', title: 'Triage & Fixes' },
  { id: 'regression', title: 'Regression & Monitoring' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'CWV Field Testing Checklist',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

export default function CWVFieldTestingChecklist() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/checklists/cwv-field-testing', label: 'CWV Field Testing' },
      ]} />

      <header className="mb-6">
        <h1>Core Web Vitals — Field Testing Checklist</h1>
        <p className="text-medium-grey">Validate real-user performance for LCP, INP, and CLS with repeatable, documented test runs.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="goals" className="mb-10">
          <h2>Goals & Success Criteria</h2>
          <ul>
            <li>LCP &lt; 2.5s (75th percentile field data)</li>
            <li>INP &lt; 200ms for key interactions (navigation, primary CTAs)</li>
            <li>CLS &lt; 0.1 across all critical templates</li>
          </ul>
        </section>

        <section id="setup" className="mb-10">
          <h2>Test Setup</h2>
          <ul>
            <li>Devices: low-mid Android, iPhone, and a budget laptop</li>
            <li>Networks: 4G throttled and Wi‑Fi; test first-load and repeat-view</li>
            <li>Profiles: signed-in vs. signed-out; cache-cold vs. warm</li>
          </ul>
        </section>

        <section id="scenarios" className="mb-10">
          <h2>Test Scenarios</h2>
          <ul>
            <li>Landing → Product/Service CTA flow</li>
            <li>Blog/article → in-article CTA → contact</li>
            <li>Nav open/close; search open/type; accordion/faq interactions</li>
          </ul>
        </section>

        <section id="measure" className="mb-10">
          <h2>Measurements & Tools</h2>
          <ul>
            <li>Field: CrUX dashboard, GSC Core Web Vitals report</li>
            <li>RUM: PerformanceObserver for LCP/INP/CLS, send to analytics</li>
            <li>Lab: Lighthouse, WebPageTest, Performance panel for long tasks</li>
          </ul>
          <p>See the <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/cwv-optimization">CWV Optimization Tutorial</Link> and <Link className="font-semibold text-system-green" href="/technical-seo#core-web-vitals">Technical SEO</Link> pillar for deep fixes.</p>

          <h3>RUM Instrumentation (PerformanceObserver)</h3>
          <p>Capture real-user LCP, INP, and CLS and send them to your analytics endpoint. Run this on production only.</p>
          <CodeBlock
            title="RUM: LCP & CLS"
            language="javascript"
            code={`// Place in a client-side entry loaded on all pages
// Capture LCP
new PerformanceObserver((list) => {
  const entry = list.getEntries().pop();
  if (entry) {
    const lcp = Math.round(entry.startTime);
    navigator.sendBeacon('/rum', JSON.stringify({ metric: 'LCP', value: lcp }));
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });

// Capture CLS
let clsValue = 0;
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) clsValue += entry.value;
  }
  navigator.sendBeacon('/rum', JSON.stringify({ metric: 'CLS', value: Number(clsValue.toFixed(3)) }));
}).observe({ type: 'layout-shift', buffered: true });`}
          />

          <CodeBlock
            title="RUM: INP"
            language="javascript"
            code={`// Capture INP (supported in modern browsers)
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.interactionId) {
      const inp = Math.round(entry.duration);
      navigator.sendBeacon('/rum', JSON.stringify({ metric: 'INP', value: inp }));
    }
  }
}).observe({ type: 'event', buffered: true, durationThreshold: 0 });`}
          />
        </section>

        <section id="triage" className="mb-10">
          <h2>Triage & Fixes</h2>
          <ul>
            <li>LCP: serve hero via CDN; preload key resources; compress and resize media</li>
            <li>INP: split long tasks; defer non-critical JS; avoid layout trashing</li>
            <li>CLS: reserve space; include width/height; avoid late-loading UI shifts</li>
          </ul>
        </section>

        <section id="regression" className="mb-10">
          <h2>Regression & Monitoring</h2>
          <ul>
            <li>Automate RUM beacons; alert on regressions beyond thresholds</li>
            <li>Lock budgets in CI (JS size, image weight, LCP time)</li>
            <li>Monthly field review and quarterly deep-dive</li>
          </ul>
        </section>

        <KeyTakeaways items={[
          'Test on real devices and throttled networks',
          'Instrument RUM for LCP/INP/CLS and alert on regressions',
          'Pair field tests with lab diagnostics to locate bottlenecks',
        ]} />
      </article>

      <StructuredData data={articleSchema} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'CWV Field Testing', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/checklists/cwv-field-testing` },
        ],
      }} />
    </div>
  )
}
