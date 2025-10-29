import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import StructuredData from '@/components/StructuredData'
import ConsultationCTA from '@/components/ConsultationCTA'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const tocItems = [
  { id: 'general-faq', title: 'General SEO Questions' },
  { id: 'technical-faq', title: 'Technical SEO Questions' },
  { id: 'content-faq', title: 'Content & On-Page Questions' },
  { id: 'offpage-faq', title: 'Off-Page & Link Building' },
  { id: 'local-faq', title: 'Local SEO Questions' },
  { id: 'ecommerce-faq', title: 'E-commerce SEO Questions' },
  { id: 'analytics-faq', title: 'Analytics & Tracking' },
  { id: 'tools-faq', title: 'SEO Tools & Resources' },
  { id: 'consultation-faq', title: 'Consultation & Services' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is SEO MASTER HUB? ',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'SEO MASTER HUB is a mobile-first, authoritative SEO guide and toolkit created to teach Technical SEO, On-Page, Off-Page and Advanced SEO strategies. Author: Hamza Nabulsi.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you offer consultation?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Execute Strategic Consultation (WhatsApp) link is available across the site for direct booking.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How many internal links should a page have?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Aim for at least five contextual internal links per page, pointing to relevant pillar hubs, tutorials, and glossary entries. Prioritize descriptive anchors that help users and bots.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are Core Web Vitals and how do I improve them?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Core Web Vitals are LCP, INP, and CLS — metrics that reflect loading, interactivity, and stability. Improve by inlining critical CSS, preloading hero assets, compressing images, reserving media dimensions, and splitting long tasks. See our CWV Optimization tutorial.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Should I disavow every low-quality link?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. Only disavow links that are clearly spammy or harmful and cannot be removed by outreach. Overuse of the disavow tool can damage rankings.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do I structure titles and meta descriptions?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Place the primary keyword naturally and write for clarity and outcomes. Keep titles under ~60 characters and descriptions compelling, with a clear benefit and CTA.'
      }
    }
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/faq` },
  ],
}

export default function FAQPage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/faq', label: 'FAQ' },
      ]} />
      <header className="mb-6">
        <h1>FAQ — Frequently Asked Questions</h1>
        <p className="text-medium-grey">Answers to common SEO questions, tools, workflows, and how to engage with Hamza Nabulsi for strategic consultation.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="general-faq" className="mb-8">
          <h2>General SEO Questions</h2>

          <h3>What is Search Engine Optimization?</h3>
          <p>Search Engine Optimization is the practice of improving a website to increase its organic visibility in search engines by improving relevance, technical health, and authority.</p>

          <h3>How long does SEO take to show results?</h3>
          <h4>Short Answer</h4>
          <p>Expect meaningful movement in 3–6 months for well-executed campaigns; full authority growth can take 6–18 months depending on competition.</p>

          <h3>Is this guide suitable for beginners?</h3>
          <p>Yes. We provide foundational material plus advanced workflows for experienced practitioners.</p>

          <h3>What's the difference between on-page and off-page SEO?</h3>
          <p>On-page SEO involves optimizing elements on your website (content, HTML, structure). Off-page SEO focuses on external signals like backlinks, brand mentions, and authority building.</p>

          <h3>Is SEO better than paid advertising?</h3>
          <p>SEO provides long-term, sustainable traffic without ongoing ad spend. Paid ads deliver immediate results but stop when you stop paying. The best strategy combines both.</p>

          <h3>Can I do SEO myself or do I need an agency?</h3>
          <p>You can learn and implement SEO yourself using our guides. However, for enterprise-scale sites or competitive industries, professional consultation accelerates results.</p>

          <h3>What are the main ranking factors?</h3>
          <p>Content quality and relevance, technical performance (Core Web Vitals), backlink authority, user experience signals, mobile-friendliness, and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</p>

          <h3>How often should I update my SEO strategy?</h3>
          <p>Review quarterly for major strategy shifts; monitor monthly for performance trends; update content and fix technical issues as they arise.</p>
        </section>

        <section id="technical-faq" className="mb-8">
          <h2>Technical SEO Questions</h2>

          <h3>What are Core Web Vitals?</h3>
          <p>Core Web Vitals are a set of field metrics by Google that measure loading performance (LCP), interactivity (INP), and visual stability (CLS). See our <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link> pillar for full guidance.</p>

          <h3>How do I submit a sitemap?</h3>
          <p>Upload a sitemap.xml to your website root and submit it in Google Search Console. This site includes a generated sitemap at /sitemap.xml.</p>

          <h3>How do I handle canonicals and pagination?</h3>
          <p>Use a canonical tag on preferred URLs and maintain strong internal linking for paginated series. Ensure your dynamic sitemap includes relevant listing pages.</p>

          <h3>What is robots.txt and do I need one?</h3>
          <p>robots.txt tells search engines which pages to crawl or avoid. Every site should have one. Block admin areas, duplicate content, and private sections while allowing public pages.</p>

          <h3>How do I fix crawl errors in Google Search Console?</h3>
          <p>Identify 404 errors, redirect broken URLs to relevant pages, fix server errors (5xx), and ensure critical pages are accessible. Regular audits prevent accumulation.</p>

          <h3>What is schema markup and why does it matter?</h3>
          <p>Schema (structured data) helps search engines understand your content and can enable rich results like star ratings, FAQs, and breadcrumbs in search. See our <Link className="font-semibold text-system-green" href="/technical-seo#schema-markup">Schema Markup guide</Link>.</p>

          <h3>How do I optimize for mobile-first indexing?</h3>
          <p>Ensure mobile and desktop content are identical, test mobile usability, optimize tap targets (44px minimum), use responsive design, and prioritize mobile Core Web Vitals.</p>

          <h3>What's the difference between noindex and nofollow?</h3>
          <p>Noindex prevents a page from appearing in search results. Nofollow tells search engines not to pass authority through a link. Use noindex for duplicate/private pages; nofollow for untrusted links.</p>

          <h3>How do I handle duplicate content?</h3>
          <p>Use canonical tags to specify preferred versions, implement 301 redirects for permanent duplicates, use parameter handling in GSC, and consolidate thin or similar content.</p>
        </section>

        <section id="content-faq" className="mb-8">
          <h2>Content & On-Page Questions</h2>

          <h3>How do I choose keywords?</h3>
          <p>Map keywords to user intent (informational, navigational, transactional, commercial investigation). Prioritize search intent and user value over exact-match phrases. See our <Link className="font-semibold text-system-green" href="/on-page-seo#keyword-intent">Keyword Intent guide</Link>.</p>

          <h3>What is the Neil Patel Flow referenced in the guides?</h3>
          <p>It is a content structuring approach emphasizing engaging H1s, scannability, bolded keywords, and a concise H3 Key Takeaways section.</p>

          <h3>How many internal links per page?</h3>
          <p>We recommend ≥5 contextual internal links per page. See the <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/linking-audit">Internal Linking Audit Checklist</Link>.</p>

          <h3>What is the ideal blog post length for SEO?</h3>
          <p>Aim for 1,500–2,500 words for comprehensive guides. Prioritize depth and value over arbitrary word counts. Shorter posts (800–1,200 words) work for specific, tactical topics.</p>

          <h3>How do I optimize images for SEO?</h3>
          <p>Use descriptive file names, add alt text (avoid keyword stuffing), compress images, serve next-gen formats (WebP, AVIF), set explicit dimensions to prevent layout shift.</p>

          <h3>Should I update old content or create new content?</h3>
          <p>Both. Refresh high-performing pages quarterly to maintain rankings. Create new content to expand topical coverage and capture new keywords.</p>

          <h3>How do I write meta descriptions that get clicks?</h3>
          <p>Include primary keyword, state clear benefit, add proof or urgency, include call-to-action. Keep under 155 characters. See our <Link className="font-semibold text-system-green" href="/on-page-seo#title-optimization">Title & Meta guide</Link>.</p>

          <h3>What is content pruning and when should I do it?</h3>
          <p>Content pruning removes or consolidates low-performing, thin, or outdated pages. Do this annually to improve site quality signals and crawl efficiency.</p>

          <h3>How important is readability for SEO?</h3>
          <p>Very important. Use short paragraphs (2–3 lines), clear headings, bullet points, and conversational language. Aim for 8th-grade reading level for broad audiences.</p>
        </section>

        <section id="offpage-faq" className="mb-8">
          <h2>Off-Page & Link Building</h2>

          <h3>Are guest posts still valuable?</h3>
          <p>Yes—when they provide unique, non-promotional value and appear on relevant, authoritative sites. Focus on audience fit and content quality.</p>

          <h3>When should I use the disavow tool?</h3>
          <p>Only after attempting manual removal and when links are clearly spammy or harmful. Use our Disavow File Template as a starting point. See <Link className="font-semibold text-system-green" href="/off-page-seo#backlink-analysis">Backlink Analysis</Link>.</p>

          <h3>How do I convert unlinked brand mentions?</h3>
          <p>Monitor brand mentions, qualify opportunities, send personalized outreach to request a link, and follow up politely. See <Link className="font-semibold text-system-green" href="/off-page-seo#digital-pr-mentions">Off-Page SEO — Unlinked Mentions</Link> workflow.</p>

          <h3>What makes a high-quality backlink?</h3>
          <p>Relevance to your industry, high domain authority (DA 40+), editorial placement in content, natural anchor text, dofollow attribute, and organic context.</p>

          <h3>How many backlinks do I need to rank?</h3>
          <p>Quality matters more than quantity. Focus on earning 5–10 highly relevant, authoritative links rather than 100 low-quality directory links.</p>

          <h3>Are social media signals a ranking factor?</h3>
          <p>Not directly, but social media drives brand awareness, traffic, and can lead to natural backlinks. Treat social as part of holistic digital PR strategy.</p>

          <h3>What is link velocity and does it matter?</h3>
          <p>Link velocity is the rate at which you acquire backlinks. Sudden spikes can trigger scrutiny. Aim for steady, natural growth aligned with content publishing.</p>

          <h3>Should I remove all low-quality links?</h3>
          <p>No need to obsess over every low-DA link. Focus on removing clearly spammy, hacked, or adult-content links. Google is good at ignoring low-quality links naturally.</p>
        </section>

        <section id="local-faq" className="mb-8">
          <h2>Local SEO Questions</h2>

          <h3>How do I optimize my Google Business Profile?</h3>
          <p>Complete every section, choose accurate categories, upload high-quality photos, encourage reviews, respond to all reviews, post weekly updates, and ensure NAP (Name, Address, Phone) consistency.</p>

          <h3>What are local citations and why do they matter?</h3>
          <p>Local citations are online mentions of your business name, address, and phone number. They build local authority and help Google verify your business legitimacy.</p>

          <h3>How important are reviews for local SEO?</h3>
          <p>Critical. Reviews influence rankings, click-through rates, and conversions. Aim for 50+ reviews with 4+ star average. Respond to every review promptly and professionally.</p>

          <h3>What is the local pack and how do I get in it?</h3>
          <p>The local pack is the map with 3 business listings shown for local searches. Optimize GBP, build citations, earn reviews, and ensure proximity to searcher location.</p>

          <h3>Do I need separate pages for each location?</h3>
          <p>Yes, for multi-location businesses. Create unique, valuable content for each location page with local landmarks, testimonials, and area-specific services.</p>
        </section>

        <section id="ecommerce-faq" className="mb-8">
          <h2>E-commerce SEO Questions</h2>

          <h3>How do I optimize product pages for SEO?</h3>
          <p>Write unique descriptions (avoid manufacturer content), use high-quality images with alt text, implement Product schema, include reviews, optimize for long-tail keywords, and add structured data.</p>

          <h3>What is faceted navigation and how do I handle it?</h3>
          <p>Faceted navigation (filters/sorts) creates URL parameters. Use canonical tags, robots.txt rules, or parameter handling in GSC to prevent index bloat and duplicate content.</p>

          <h3>Should I index category or product pages?</h3>
          <p>Both, if they provide unique value. Index category pages for broad keywords; product pages for specific searches. Noindex thin categories with few products.</p>

          <h3>How do I handle out-of-stock products?</h3>
          <p>Keep pages indexed with "out of stock" messaging, suggest alternatives, allow backorders if possible. Only remove page if product is permanently discontinued.</p>

          <h3>What schema should I use for e-commerce?</h3>
          <p>Product, Offer, AggregateRating, Review, BreadcrumbList, and Organization schema. See our <Link className="font-semibold text-system-green" href="/advanced-seo#ecommerce-seo">E-commerce SEO guide</Link>.</p>
        </section>

        <section id="analytics-faq" className="mb-8">
          <h2>Analytics & Tracking</h2>

          <h3>What's the difference between Google Analytics and Search Console?</h3>
          <p>GA4 tracks all traffic sources and user behavior. GSC shows only organic search performance, indexing status, and crawl data. Use both for complete visibility.</p>

          <h3>What SEO KPIs should I track?</h3>
          <p>Organic sessions, keyword rankings, click-through rate (CTR), conversion rate, pages indexed, Core Web Vitals scores, and backlink growth. See our <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis guide</Link>.</p>

          <h3>How often should I check my SEO metrics?</h3>
          <p>Check GSC weekly for critical errors, review rankings monthly, analyze comprehensive performance quarterly. Set up alerts for traffic drops or indexing issues.</p>

          <h3>What is a good organic CTR?</h3>
          <p>Position 1: 20–40%, Position 2–3: 10–20%, Position 4–10: 3–10%. Featured snippets can achieve 40–50%. Industry and query type affect these benchmarks.</p>

          <h3>How do I track conversions from organic traffic?</h3>
          <p>Set up GA4 conversion events, use UTM parameters for campaign tracking, enable e-commerce tracking, and create custom reports filtering by organic channel.</p>
        </section>

        <section id="tools-faq" className="mb-8">
          <h2>SEO Tools & Resources</h2>

          <h3>What SEO tools do you recommend?</h3>
          <p>Essential: Google Search Console (free), Google Analytics 4 (free). Premium: Ahrefs or Semrush for backlinks and keywords, Screaming Frog for technical audits, Looker Studio for dashboards.</p>

          <h3>Do I need paid SEO tools?</h3>
          <p>Not to start. Free tools (GSC, GA4, PageSpeed Insights) cover fundamentals. Invest in paid tools when scaling or competing in difficult niches.</p>

          <h3>What's the best keyword research tool?</h3>
          <p>Ahrefs and Semrush are industry leaders. Free alternatives: Google Keyword Planner, Google Trends, AnswerThePublic for question-based keywords.</p>

          <h3>How do I check my site's technical health?</h3>
          <p>Use Screaming Frog for comprehensive crawls, Google Search Console for Google-specific issues, and our <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit checklist</Link>.</p>

          <h3>What tools track Core Web Vitals?</h3>
          <p>CrUX Dashboard (field data), Google Search Console, PageSpeed Insights, Lighthouse, WebPageTest. For RUM, use our <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing guide</Link>.</p>
        </section>

        <section id="consultation-faq" className="mb-8">
          <h2>Consultation & Services</h2>

          <h3>How to contact Hamza Nabulsi?</h3>
          <p>Use the EXECUTE STRATEGIC CONSULTATION (WhatsApp) CTA which links to https://wa.me/96176578651 or visit the LinkedIn profile linked site-wide.</p>

          <h3>What does a consultation include?</h3>
          <p>Strategic audit, technical recommendations, prioritized action plan, and high-level outreach strategy tailored to enterprise needs.</p>
        </section>

        <section className="mb-10">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer">Google — Search Essentials</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google — SEO Starter Guide</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://web.dev/" target="_blank" rel="noopener noreferrer">web.dev — Performance & CWV</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://support.google.com/webmasters/answer/9128668" target="_blank" rel="noopener noreferrer">Google Search Console — Index Coverage</a></li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/seo-fundamentals">SEO Fundamentals</Link></li>
            <li><Link className="text-system-green font-semibold" href="/technical-seo">Technical SEO</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base">Knowledge Base</Link></li>
            <li><Link className="text-system-green font-semibold" href="/ultimate-seo-guide">Ultimate SEO Guide</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      {/* FAQ Schema structured data + BreadcrumbList */}
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />
    </div>
  )
}
