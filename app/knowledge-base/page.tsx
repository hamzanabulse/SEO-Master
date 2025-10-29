import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import AuthorBadge from '@/components/AuthorBadge'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const tocItems = [
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'technical-tutorials', title: 'Technical Tutorials' },
  { id: 'content-tutorials', title: 'Content Tutorials' },
  { id: 'articles', title: 'In-Depth Articles' },
  { id: 'authority-tutorials', title: 'Authority & PR Tutorials' },
  { id: 'checklists', title: 'Checklists' },
  { id: 'certification', title: 'SEO Certification' },
]

export default function KnowledgeBasePage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
      ]} />
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1>Knowledge Base — SEO Tutorials</h1>
          <p className="text-medium-grey">Hands-on, mobile-first tutorials to implement SEO with precision. Internal linking connects each tutorial to relevant pillar content.</p>
        </div>
        <AuthorBadge />
      </header>

      <TableOfContents items={tocItems} />

  <article className="prose max-w-none">
        <section id="getting-started" className="mb-10">
          <h2>Getting Started</h2>
          <h3>Read First</h3>
          <p>Begin with the foundation: <Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO Fundamentals & Glossary</Link>. Then continue with <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO Mastery</Link>.</p>
        </section>

        <section id="technical-tutorials" className="mb-10">
          <h2>Technical Tutorials</h2>
          <ul>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/gsc-setup">Google Search Console Setup</Link> — connect your site, submit sitemap, and validate ownership.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/cwv-optimization">Optimize Core Web Vitals</Link> — step-by-step LCP/CLS/INP fixes.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/schema-implementation">Complete Schema Implementation Guide</Link> — JSON-LD structured data for Article, Product, FAQ, and more.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/mobile-seo">Mobile SEO Complete Guide</Link> — mobile-first indexing, responsive design, and mobile UX.
            </li>
          </ul>
        </section>

        <section id="content-tutorials" className="mb-10">
          <h2>Content Tutorials</h2>
          <ul>
            <li>
              <Link className="font-semibold text-system-green" href="/on-page-seo#keyword-research">Keyword Research Mastery</Link> — map keywords to search intent with precision.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/on-page-seo#title-optimization">Title & Meta Optimization</Link> — craft click-driving titles and meta descriptions.
            </li>
          </ul>
        </section>

        <section id="articles" className="mb-10">
          <h2>In-Depth Articles</h2>
          <ul>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/articles/keyword-research-guide">Complete Keyword Research Guide</Link> — intent mapping, competitive analysis, prioritization framework.
            </li>
          </ul>
        </section>

        <section id="authority-tutorials" className="mb-10">
          <h2>Authority & PR Tutorials</h2>
          <ul>
            <li>
              <Link className="font-semibold text-system-green" href="/off-page-seo#digital-pr-mentions">Convert Unlinked Mentions</Link> — monitoring and outreach workflow.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/off-page-seo#guest-posting-collaboration">Guest Post Pitching</Link> — templates and acceptance strategies.
            </li>
          </ul>
        </section>

        <section id="checklists" className="mb-10">
          <h2>Checklists</h2>
          <ul>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/linking-audit">Internal Linking Audit (≥5 links/page)</Link> — ensure contextual coverage and pillar reinforcement.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Master Checklist</Link> — end-to-end audit of technical, content, links, and CWV.
            </li>
            <li>
              <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/cwv-field-testing">Core Web Vitals Field Testing</Link> — validate LCP/INP/CLS on real devices and networks.
            </li>
          </ul>
        </section>

        <section id="certification" className="mb-10">
          <h2>SEO Certification</h2>
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Test Your SEO Knowledge</h3>
            <p className="text-gray-700 mb-4">
              Take our comprehensive SEO certification quiz covering all aspects of search engine optimization. Score 70% or higher to earn your certificate!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link 
                href="/quiz" 
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Start SEO Quiz →
              </Link>
              <Link
                href="/verify"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                aria-label="Verify an existing certificate"
              >
                Verify a Certificate
              </Link>
            </div>
          </div>
          <ul>
            <li>20 multiple-choice questions covering fundamentals, technical SEO, content optimization, and analytics</li>
            <li>Instant results with detailed explanations for each answer</li>
            <li>Downloadable PDF certificate upon passing (70% or higher)</li>
            <li>Share your achievement on LinkedIn and professional profiles</li>
          </ul>
        </section>
      </article>
          <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Knowledge Base — SEO Tutorials & How-Tos',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
      }} />
          {/* FAQ rich results for the Certification section teaser */}
          <StructuredData data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                name: 'How many questions are in the SEO certification quiz?',
                acceptedAnswer: { '@type': 'Answer', text: 'There are 20 multiple-choice questions covering fundamentals, technical, content, and analytics.' }
              },
              {
                '@type': 'Question',
                name: 'What score do I need to pass?',
                acceptedAnswer: { '@type': 'Answer', text: 'You must score at least 70% to earn your certificate.' }
              },
              {
                '@type': 'Question',
                name: 'Do I get a downloadable certificate?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can download a PDF certificate and verify it via a QR code.' }
              }
            ]
          }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
        ],
      }} />
    </div>
  )
}
