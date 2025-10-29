import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import CodeBlock from '@/components/CodeBlock'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Complete Schema Implementation Guide — JSON-LD for SEO | SEO MASTER HUB',
  description: 'Step-by-step guide to implementing schema markup (JSON-LD) for Article, Product, FAQ, Local Business, and more. Boost rich results visibility.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'intro', title: 'What is Schema Markup?' },
  { id: 'types', title: 'Essential Schema Types' },
  { id: 'article', title: 'Article Schema' },
  { id: 'product', title: 'Product & Review Schema' },
  { id: 'faq', title: 'FAQ Schema' },
  { id: 'local', title: 'Local Business Schema' },
  { id: 'validation', title: 'Testing & Validation' },
  { id: 'common-errors', title: 'Common Errors & Fixes' },
]

export default function SchemaImplementationTutorial() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/tutorials/schema-implementation', label: 'Schema Implementation' },
      ]} />

      <header className="mb-6">
        <h1>Complete Schema Implementation Guide</h1>
        <p className="text-medium-grey">Master JSON-LD structured data to unlock rich results, improve click-through rates, and help search engines understand your content.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="intro" className="mb-10">
          <h2>What is Schema Markup?</h2>
          <p><strong>Schema markup</strong> (structured data) is code that helps search engines understand your content's meaning and context. It enables <strong>rich results</strong> like star ratings, FAQs, breadcrumbs, and event listings in search.</p>
          
          <p>We use <strong>JSON-LD</strong> (JavaScript Object Notation for Linked Data) because it's Google's recommended format, easy to implement, and doesn't clutter HTML.</p>

          <div className="bg-system-green bg-opacity-10 border border-system-green rounded-lg p-4 my-6">
            <h4 className="text-system-green font-semibold mb-2">✓ Benefits of Schema Markup</h4>
            <ul className="text-sm space-y-1">
              <li>• Enhanced search appearance with rich snippets</li>
              <li>• Higher click-through rates (CTR)</li>
              <li>• Better content understanding by search engines</li>
              <li>• Competitive advantage in SERPs</li>
              <li>• Eligibility for Google's specialized results</li>
            </ul>
          </div>
        </section>

        <section id="types" className="mb-10">
          <h2>Essential Schema Types</h2>
          <p>Focus on these high-impact schema types based on your content:</p>
          
          <ul>
            <li><strong>Article:</strong> Blog posts, news articles, guides</li>
            <li><strong>Product & Offer:</strong> E-commerce product pages</li>
            <li><strong>Review & Rating:</strong> Customer reviews and ratings</li>
            <li><strong>FAQ:</strong> Frequently asked questions pages</li>
            <li><strong>Local Business:</strong> Physical business locations</li>
            <li><strong>Breadcrumb:</strong> Navigation paths</li>
            <li><strong>Organization:</strong> Company/brand information</li>
            <li><strong>VideoObject:</strong> Video content</li>
          </ul>

          <p>See the complete list at <a className="text-alert-cyan font-semibold" href="https://schema.org" target="_blank" rel="noopener noreferrer">Schema.org</a>.</p>
        </section>

        <section id="article" className="mb-10">
          <h2>Article Schema Implementation</h2>
          <p>Use Article schema for blog posts, guides, and editorial content. Include headline, author, publish date, and image.</p>

          <CodeBlock
            title="Article JSON-LD"
            language="json"
            code={`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title Here",
  "image": [
    "https://example.com/article-image.jpg"
  ],
  "datePublished": "2025-01-15T08:00:00+00:00",
  "dateModified": "2025-01-20T10:30:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Hamza Nabulsi",
    "url": "https://example.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SEO MASTER HUB",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "description": "A concise summary of your article content."
}`}
          />

          <p className="mt-4"><strong>Where to place:</strong> In a <code>&lt;script type="application/ld+json"&gt;</code> tag in the page <code>&lt;head&gt;</code> or before closing <code>&lt;/body&gt;</code>.</p>
        </section>

        <section id="product" className="mb-10">
          <h2>Product & Review Schema</h2>
          <p>Critical for e-commerce. Shows price, availability, and star ratings in search results.</p>

          <CodeBlock
            title="Product with Reviews JSON-LD"
            language="json"
            code={`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Widget Pro",
  "image": [
    "https://example.com/widget-pro.jpg"
  ],
  "description": "High-performance widget with lifetime warranty and premium support.",
  "brand": {
    "@type": "Brand",
    "name": "Acme Corp"
  },
  "sku": "WIDGET-PRO-001",
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/products/widget-pro",
    "priceCurrency": "USD",
    "price": "149.99",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Acme Corp"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "284"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Jane Smith"
    },
    "reviewBody": "Exceeded expectations! Best widget I've purchased."
  }
}`}
          />
        </section>

        <section id="faq" className="mb-10">
          <h2>FAQ Schema</h2>
          <p>Enables accordion-style FAQ rich results in search. Perfect for support and informational pages.</p>

          <CodeBlock
            title="FAQ JSON-LD"
            language="json"
            code={`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does shipping take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard shipping takes 5-7 business days. Express shipping delivers in 2-3 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What is your return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a 30-day money-back guarantee on all products. Items must be unused and in original packaging."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer international shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we ship to over 50 countries worldwide. International shipping takes 10-14 business days."
      }
    }
  ]
}`}
          />

          <p className="mt-4">Our <Link className="font-semibold text-system-green" href="/faq">FAQ page</Link> uses this schema format.</p>
        </section>

        <section id="local" className="mb-10">
          <h2>Local Business Schema</h2>
          <p>Essential for local SEO. Includes address, phone, hours, and coordinates.</p>

          <CodeBlock
            title="Local Business JSON-LD"
            language="json"
            code={`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Acme Digital Marketing",
  "image": "https://example.com/storefront.jpg",
  "@id": "https://example.com",
  "url": "https://example.com",
  "telephone": "+1-555-123-4567",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94102",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`}
          />
        </section>

        <section id="validation" className="mb-10">
          <h2>Testing & Validation</h2>
          <p>Always validate schema before deploying to production:</p>

          <div className="bg-dark-grey border border-system-green rounded-lg p-4 my-6">
            <h4 className="font-semibold mb-3">Validation Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Rich Results Test:</strong> <a className="text-alert-cyan" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">search.google.com/test/rich-results</a>
              </li>
              <li>
                <strong>Schema Markup Validator:</strong> <a className="text-alert-cyan" href="https://validator.schema.org" target="_blank" rel="noopener noreferrer">validator.schema.org</a>
              </li>
              <li>
                <strong>Google Search Console:</strong> Check "Enhancements" report for errors
              </li>
            </ul>
          </div>

          <h3>Validation Workflow</h3>
          <ol>
            <li>Paste your schema code into Rich Results Test</li>
            <li>Fix all errors (warnings are optional but recommended)</li>
            <li>Deploy to production</li>
            <li>Monitor Google Search Console for issues</li>
            <li>Wait 2–4 weeks for rich results to appear</li>
          </ol>
        </section>

        <section id="common-errors" className="mb-10">
          <h2>Common Errors & Fixes</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-warning-red pl-4">
              <h4 className="font-semibold text-warning-red">Missing required field</h4>
              <p className="text-sm">Each schema type has required properties. Check <a className="text-alert-cyan" href="https://developers.google.com/search/docs/appearance/structured-data" target="_blank" rel="noopener noreferrer">Google's documentation</a> for requirements.</p>
            </div>

            <div className="border-l-4 border-warning-red pl-4">
              <h4 className="font-semibold text-warning-red">Invalid date format</h4>
              <p className="text-sm">Use ISO 8601 format: <code>2025-01-15T08:00:00+00:00</code></p>
            </div>

            <div className="border-l-4 border-warning-red pl-4">
              <h4 className="font-semibold text-warning-red">Image size issues</h4>
              <p className="text-sm">Images must be at least 1200px wide. Provide multiple sizes in an array for best results.</p>
            </div>

            <div className="border-l-4 border-warning-red pl-4">
              <h4 className="font-semibold text-warning-red">Mismatched content</h4>
              <p className="text-sm">Schema data must match visible page content. Don't mark up content that isn't on the page.</p>
            </div>
          </div>
        </section>

        <KeyTakeaways items={[
          'Use JSON-LD format for all schema markup',
          'Start with Article, Product, FAQ, and Breadcrumb schemas',
          'Validate schema with Rich Results Test before deployment',
          'Match schema data exactly to visible page content',
          'Monitor Search Console for schema errors and warnings',
          'Rich results can take 2–4 weeks to appear after implementation',
        ]} />

        <ConsultationCTA />
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Complete Schema Implementation Guide — JSON-LD for SEO',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'Schema Implementation', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/schema-implementation` },
        ],
      }} />
    </div>
  )
}
