import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import { getBaseUrl } from '@/lib/site'

export const metadata = {
  title: 'What Is SEO? How Search Engine Optimization Works (Beginner-Friendly Guide) | SEO MASTER HUB',
  description: 'A clear, original guide to SEO: what it is, how it works, and how to start. Learn on-page, off-page, and technical SEO with practical steps and internal links to go deeper.',
  keywords: 'what is SEO, SEO guide, SEO basics, search engine optimization explained, on-page SEO, off-page SEO, technical SEO',
}

const base = getBaseUrl()

export default function WhatIsSEOArticle() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/articles/what-is-seo', label: 'What is SEO?' },
      ]} />

      <header className="mb-6">
        <h1>What Is SEO? How It Works and How To Start</h1>
        <p className="text-medium-grey">A practical, beginner-friendly explanation of Search Engine Optimization with clear steps, examples, and the exact next pages to read.</p>
      </header>

  <article className="prose max-w-none">
        <section className="mb-8">
          <h2>SEO in One Sentence</h2>
          <p><strong>Search Engine Optimization (SEO)</strong> is the process of improving your website so people can discover it in search engines like Google for the topics you cover—and trust it enough to click, stay, and convert.</p>
          <p>Great SEO aligns three things: what searchers want, what your page offers, and what search engines can crawl, understand, and rank.</p>
        </section>

        <section className="mb-8">
          <h2>How Search Engines Work (Quick)</h2>
          <ul>
            <li><strong>Crawling:</strong> Bots find pages via links and sitemaps.</li>
            <li><strong>Indexing:</strong> Google stores, understands, and classifies pages.</li>
            <li><strong>Ranking:</strong> For a query, Google orders results by relevance, quality, and experience (E-E-A-T).</li>
          </ul>
          <p>Want a deeper dive? Read <Link className="font-semibold text-system-green" href="/seo-fundamentals">SEO Fundamentals</Link> and check the <Link className="font-semibold text-system-green" href="/glossary">SEO Glossary</Link>.</p>
        </section>

        <section className="mb-8">
          <h2>The 3 Pillars of SEO</h2>
          <h3>1) On-Page SEO</h3>
          <p>Make individual pages satisfy search intent and read beautifully. Focus on titles, headings, internal linking, copy clarity, and structured data.</p>
          <p>Explore our <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO guide</Link>.</p>

          <h3>2) Off-Page SEO</h3>
          <p>Build trust and authority with quality mentions and links. Earn links by creating genuinely useful content and through ethical digital PR.</p>
          <p>Learn proven tactics in <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page & Authority Building</Link>.</p>

          <h3>3) Technical SEO</h3>
          <p>Ensure your site is fast, mobile-friendly, crawlable, and well-structured. Fix Core Web Vitals, clean URLs, canonicals, and schema markup.</p>
          <p>Start with <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO Mastery</Link> and our <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Checklist</Link>.</p>
        </section>

        <section className="mb-8">
          <h2>Why SEO Matters</h2>
          <ul>
            <li><strong>Compounding ROI:</strong> Content that ranks can drive traffic for months or years.</li>
            <li><strong>Qualified Demand:</strong> You show up exactly when people search for your solution.</li>
            <li><strong>Brand Authority:</strong> Rankings signal credibility and build trust.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How To Start (Practical 7-Step Plan)</h2>
          <ol>
            <li>Define goals and ICP. Know the problems you solve.</li>
            <li>Do <Link className="font-semibold text-system-green" href="/knowledge-base/articles/keyword-research-guide">Keyword Research</Link> and map intent.</li>
            <li>Plan a <strong>Pillar + Cluster</strong> structure from our <Link className="font-semibold text-system-green" href="/seo-fundamentals">Fundamentals</Link>.</li>
            <li>Build or improve your <Link className="font-semibold text-system-green" href="/on-page-seo">on-page</Link> content.</li>
            <li>Fix tech issues using <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link> and <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing</Link>.</li>
            <li>Promote content to earn links: see <Link className="font-semibold text-system-green" href="/off-page-seo">Off-Page SEO</Link>.</li>
            <li>Track results in <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis & KPIs</Link> and iterate.</li>
          </ol>
          <div className="mt-6 p-4 rounded-lg border border-alert-cyan bg-obsidian">
            <p className="mb-2"><strong>Need expert help?</strong> Get a tailored digital marketing and SEO consultation from Fatcow Digital.</p>
            <a className="cta-primary inline-block" href="https://fatcowdigital.com" target="_blank" rel="noopener noreferrer">Talk to Fatcow Digital</a>
          </div>
        </section>

        <section className="mb-8">
          <h2>Smart Internal Linking (Do This Today)</h2>
          <p>Link related pages together to help users and search engines. From this article, visit:</p>
          <ul>
            <li><Link className="font-semibold text-system-green" href="/glossary">SEO Glossary</Link> for terminology.</li>
            <li><Link className="font-semibold text-system-green" href="/knowledge-base">Knowledge Base</Link> for tutorials and checklists.</li>
            <li><Link className="font-semibold text-system-green" href="/quiz">SEO Quiz</Link> to assess your skills and get a certificate.</li>
            <li><Link className="font-semibold text-system-green" href="/certification">Certification</Link> to generate your PDF and share it.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>FAQ</h2>
          <p><strong>Is SEO still worth it?</strong> Yes—done right, it’s one of the most cost-effective channels for compounding growth.</p>
          <p><strong>How long to see results?</strong> Often 3–6 months for new sites; faster if you already have authority and fix technical issues early.</p>
          <p><strong>Do I need backlinks?</strong> High-quality content can rank on low-competition topics, but authoritative links accelerate growth.</p>
        </section>
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'What Is SEO? How It Works and How To Start',
        description: 'A beginner-friendly explanation of SEO with practical steps and internal resources to master on-page, off-page, and technical SEO.',
        author: { '@type': 'Person', name: 'Hamza Nabulsi' },
        datePublished: '2025-11-03T00:00:00.000Z',
        dateModified: '2025-11-03T00:00:00.000Z',
        image: [`${base}/opengraph-image`],
        mainEntityOfPage: `${base}/knowledge-base/articles/what-is-seo`,
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
          { '@type': 'ListItem', position: 3, name: 'What is SEO?', item: `${base}/knowledge-base/articles/what-is-seo` },
        ],
      }} />
    </div>
  )
}
