import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import { getBaseUrl } from '@/lib/site'

export const metadata = {
  title: 'Google AI Overviews and AI Mode — How They Work, Eligibility, and SEO Best Practices | SEO MASTER HUB',
  description: 'A practical guide to Google AI Overviews and AI Mode: how they generate answers, how to appear, technical requirements, measurement, controls, and four real-world case studies, authored by Hamza Nabulsi.',
  keywords: 'Google AI Overviews, AI Mode, SGE, Search Generative Experience, how AI Overviews work, SEO best practices for AI Overviews',
}

const base = getBaseUrl()
const YT_ID = 'AnKaUXbwL20'

export default function GoogleAIOverviewsArticle() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/articles/google-ai-overviews', label: 'Google AI Overviews' },
      ]} />

      <header className="mb-6">
        <h1>Google AI Overviews and AI Mode: How They Work and How To Optimize</h1>
        <p className="text-medium-grey">Authored by <strong>Hamza Nabulsi</strong>. Understand how AI answers are assembled, how eligibility works, and what to do to earn citations and clicks.</p>
      </header>

      <article className="prose max-w-none">
        <section className="mb-8">
          <h2>How AI Overviews Work (In Plain English)</h2>
          <p>Google uses AI to summarize complex queries into a concise answer, then cites helpful webpages for deeper reading. Behind the scenes, systems may <strong>fan out</strong> across related sub‑queries to gather context, compare sources, and assemble a response. The result: an overview plus a wider, more diverse set of links than a classic 10‑blue‑links result.</p>
          <ul>
            <li><strong>When they appear:</strong> For queries where a summary adds value beyond classic results.</li>
            <li><strong>What users see:</strong> A short AI answer with prominent links to supporting pages.</li>
            <li><strong>Why this matters:</strong> More opportunities for useful sites to be discovered.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Video: Query Fan‑Out in Action</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-system-green">
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}`}
              title="AI Mode Query Fan-Out"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="mt-3">The video illustrates how AI systems branch into related sub‑topics, then surface links that best explain each angle. Your job: publish <em>genuinely helpful</em> resources that satisfy those angles better than alternatives.</p>
        </section>

        <section className="mb-8">
          <h2>How To Appear in AI Features</h2>
          <p>You don’t need special markup or “AI files.” The same <Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO fundamentals</Link> apply:</p>
          <ul>
            <li><strong>Be indexable:</strong> Allow crawling in <code>robots.txt</code> and don’t block key pages. Serve text content.</li>
            <li><strong>Make discovery easy:</strong> Use clear <Link className="font-semibold text-system-green" href="/knowledge-base">internal links</Link> and logical navigation.</li>
            <li><strong>Optimize experience:</strong> Mobile, Core Web Vitals, and accessibility—see <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link>.</li>
            <li><strong>Be helpful and reliable:</strong> Demonstrate E‑E‑A‑T, cite sources, and keep content fresh—see <Link className="font-semibold text-system-green" href="/on-page-seo">On‑Page SEO</Link>.</li>
            <li><strong>Structured data:</strong> Use schema that matches visible content to help systems understand entities and intent.</li>
          </ul>
          <div className="mt-4 p-4 rounded-lg border border-alert-cyan bg-obsidian">
            <p className="mb-2"><strong>Pro tip:</strong> Think in <em>angles</em>. For a complex topic, publish pages that cover definitions, comparisons, steps, pitfalls, tools, and examples—so fan‑out has a reason to cite you.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2>Technical Eligibility and Controls</h2>
          <ul>
            <li>Pages must be eligible for Search with a snippet (meet <Link className="font-semibold text-system-green" href="/seo-fundamentals">technical requirements</Link>).</li>
            <li>To limit previews in Search, use <code>nosnippet</code>, <code>data-nosnippet</code>, or <code>max-snippet</code>. To prevent indexing, use <code>noindex</code>.</li>
            <li>To limit training/grounding in other Google systems, review <a className="font-semibold text-system-green" href="https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#google-extended" target="_blank" rel="noopener noreferrer">Google‑Extended</a>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Measuring Performance</h2>
          <p>Traffic from AI features is included in Search Console’s “Web” search type. Use the <strong>Performance</strong> report to track clicks, impressions, and CTR. Pair this with <Link className="font-semibold text-system-green" href="/data-analysis">Analytics</Link> to evaluate engagement and conversions.</p>
        </section>

        <section className="mb-10">
          <h2>4 Case Studies: Winning With AI Overviews</h2>
          <div className="space-y-6">
            <div className="bg-dark-grey border border-system-green rounded-lg p-5">
              <h3 className="font-semibold">1) Complex Comparison Query</h3>
              <p>A B2B SaaS vendor publishes a rigorous <em>Product A vs Product B</em> comparison with specs, scenarios, and migration tips. AI Overview fans out to sub‑topics (pricing tiers, integrations, security) and includes the page because it comprehensively answers those angles with credible sources and clear tables.</p>
              <p className="text-sm text-medium-grey">What made it win: topic depth, transparent criteria, schema for Product/FAQ, and a fast, mobile‑friendly layout.</p>
            </div>
            <div className="bg-dark-grey border border-alert-cyan rounded-lg p-5">
              <h3 className="font-semibold">2) How‑To With Safety Considerations</h3>
              <p>A health publisher builds a step‑by‑step tutorial for a home exercise program, including risks, contraindications, and expert review. AI Overview cites it because it balances clarity with safety and references authoritative sources.</p>
              <p className="text-sm text-medium-grey">What made it win: expert validation (E‑E‑A‑T), clear steps, alt text for images/video, and helpful outbound citations.</p>
            </div>
            <div className="bg-dark-grey border border-system-green rounded-lg p-5">
              <h3 className="font-semibold">3) Local Services Query</h3>
              <p>A local clinic creates a hub page for “sports physio in Beirut” with service details, insurance info, neighborhood coverage, appointment availability, and reviews. AI Overview includes it because it resolves practical sub‑questions users typically ask.</p>
              <p className="text-sm text-medium-grey">What made it win: clear NAP info, reviews, FAQ, LocalBusiness schema, and internal links to service pages.</p>
            </div>
            <div className="bg-dark-grey border border-alert-cyan rounded-lg p-5">
              <h3 className="font-semibold">4) Tools and Checklist Resource</h3>
              <p>An e‑commerce operator ships a <em>holiday readiness checklist</em> plus a calculator tool for inventory planning. AI Overview cites it for seasonal queries because it covers tasks, timelines, edge cases, and embeds a practical calculator.</p>
              <p className="text-sm text-medium-grey">What made it win: original utility, structured sections, internal links to deeper guides, and crisp performance on mobile.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2>Best Practices Checklist</h2>
          <ul>
            <li>Target user intent; cover sub‑topics thoroughly with headings and internal links.</li>
            <li>Demonstrate E‑E‑A‑T: show credentials, cite sources, and keep content updated.</li>
            <li>Ship fast pages with excellent mobile UX and strong Core Web Vitals.</li>
            <li>Use schema aligned to visible content (Article, FAQ, Product, LocalBusiness).</li>
            <li>Make discovery easy: logical IA, breadcrumbs, and crawlable links.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Where To Go Next</h2>
          <p>Build durable visibility by mastering the pillars:</p>
          <ul>
            <li><Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO Fundamentals</Link></li>
            <li><Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link></li>
            <li><Link className="font-semibold text-system-green" href="/on-page-seo">On‑Page SEO</Link></li>
            <li><Link className="font-semibold text-system-green" href="/off-page-seo">Off‑Page & Authority</Link></li>
            <li><Link className="font-semibold text-system-green" href="/knowledge-base">Knowledge Base</Link></li>
          </ul>
          <div className="mt-4 p-4 rounded-lg border border-system-green bg-obsidian">
            <p className="mb-2">Want expert guidance tailored to your site? Book a consultation.</p>
            <a className="cta-primary inline-block" href="https://fatcowdigital.com" target="_blank" rel="noopener noreferrer">Talk to Fatcow Digital</a>
          </div>
        </section>
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Google AI Overviews and AI Mode — How They Work and How To Optimize',
        description: 'How Google AI Overviews and AI Mode assemble answers, how eligibility works, and what to do to earn citations and clicks—plus four case studies and an embedded video.',
        author: { '@type': 'Person', name: 'Hamza Nabulsi' },
        datePublished: '2025-11-03T00:00:00.000Z',
        dateModified: '2025-11-03T00:00:00.000Z',
        image: [`${base}/knowledge-base/opengraph-image`],
        mainEntityOfPage: `${base}/knowledge-base/articles/google-ai-overviews`,
        publisher: {
          '@type': 'Organization',
          name: 'Fatcow Digital',
          url: 'https://fatcowdigital.com'
        },
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${base}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'Google AI Overviews', item: `${base}/knowledge-base/articles/google-ai-overviews` },
        ],
      }} />
    </div>
  )
}
