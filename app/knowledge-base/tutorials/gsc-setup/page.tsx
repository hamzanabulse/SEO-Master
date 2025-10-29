import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Google Search Console Setup — Step-by-Step Tutorial | SEO MASTER HUB',
  description: 'Connect your site to Google Search Console, verify ownership, submit sitemap, and enable performance tracking. Author: Hamza Nabulsi.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'verify-site', title: 'Verify Site Ownership' },
  { id: 'submit-sitemap', title: 'Submit Sitemap' },
  { id: 'link-ga4', title: 'Link GA4 for Insights' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'Google Search Console Setup — Step-by-Step Tutorial',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

export default function GscSetupTutorial() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/tutorials/gsc-setup', label: 'GSC Setup' },
      ]} />
      <header className="mb-6">
        <h1>Google Search Console Setup — Step-by-Step Tutorial</h1>
        <p className="text-medium-grey">Connect your website, verify ownership, submit the sitemap, and enable rich performance tracking.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose prose-invert max-w-none">
        <section id="verify-site" className="mb-8">
          <h2>Verify Site Ownership</h2>
          <h3>Recommended: DNS Verification</h3>
          <p>Add the TXT record provided by Google to your domain DNS. This method is reliable and persists across site changes.</p>
          <h4>Alternative Methods</h4>
          <p>HTML file upload or meta tag can work but may break if your deployment changes.</p>
        </section>

        <section id="submit-sitemap" className="mb-8">
          <h2>Submit Sitemap</h2>
          <p>Submit the sitemap located at /sitemap.xml. In production replace domain with your live hostname.</p>
          <h3>Validation</h3>
          <p>Ensure the status reads Success and that URLs are discovered.</p>
        </section>

        <section id="link-ga4" className="mb-8">
          <h2>Link GA4 for Insights</h2>
          <p>Link Google Analytics 4 to combine search queries with on-site behavior for deeper insights.</p>
        </section>

        <section id="key-takeaways" className="key-takeaways">
          <h3>Key Takeaways</h3>
          <ul>
            <li>Use DNS verification for stability</li>
            <li>Submit sitemap.xml and monitor coverage</li>
            <li>Connect GA4 to enrich analysis</li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={articleSchema} />
      {/* HowTo schema for step-by-step setup */}
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Google Search Console Setup',
        description: 'Verify site ownership, submit sitemap, and link GA4 for insights.',
        totalTime: 'PT20M',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Verify Site Ownership',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/gsc-setup#verify-site`,
            itemListElement: [
              { '@type': 'HowToDirection', text: 'Open Google Search Console and choose Domain property.' },
              { '@type': 'HowToDirection', text: 'Add TXT DNS record from Google to your domain registrar.' },
              { '@type': 'HowToDirection', text: 'Click Verify after DNS propagates.' },
            ]
          },
          {
            '@type': 'HowToStep',
            name: 'Submit Sitemap',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/gsc-setup#submit-sitemap`,
            itemListElement: [
              { '@type': 'HowToDirection', text: 'Open Indexing → Sitemaps.' },
              { '@type': 'HowToDirection', text: 'Enter your sitemap URL (e.g., /sitemap.xml) and submit.' },
            ]
          },
          {
            '@type': 'HowToStep',
            name: 'Link GA4 for Insights',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/gsc-setup#link-ga4`,
            itemListElement: [
              { '@type': 'HowToDirection', text: 'In GSC, connect Google Analytics 4 under Associations.' },
              { '@type': 'HowToDirection', text: 'Verify data sharing and confirm link.' },
            ]
          }
        ]
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'GSC Setup', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/gsc-setup` },
        ]
      }} />
    </div>
  )
}
