import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import CodeBlock from '@/components/CodeBlock'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Mobile SEO Complete Guide — Mobile-First Optimization | SEO MASTER HUB',
  description: 'Master mobile SEO with mobile-first indexing strategies, responsive design, mobile UX, tap targets, and mobile Core Web Vitals optimization.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'mobile-first', title: 'Mobile-First Indexing' },
  { id: 'responsive', title: 'Responsive Design Essentials' },
  { id: 'mobile-ux', title: 'Mobile User Experience' },
  { id: 'tap-targets', title: 'Tap Targets & Touch' },
  { id: 'mobile-speed', title: 'Mobile Speed Optimization' },
  { id: 'mobile-content', title: 'Mobile Content Strategy' },
  { id: 'testing', title: 'Mobile Testing Tools' },
]

export default function MobileSEOTutorial() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/tutorials/mobile-seo', label: 'Mobile SEO' },
      ]} />

      <header className="mb-6">
        <h1>Mobile SEO Complete Guide</h1>
        <p className="text-medium-grey">Optimize for mobile-first indexing with responsive design, touch-friendly UX, and blazing-fast mobile performance.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="mobile-first" className="mb-10">
          <h2>Understanding Mobile-First Indexing</h2>
          <p>Since 2019, <strong>Google uses the mobile version</strong> of your site for indexing and ranking. If your mobile experience is poor, your rankings suffer—even on desktop searches.</p>

          <div className="bg-system-green bg-opacity-10 border border-system-green rounded-lg p-4 my-6">
            <h4 className="text-system-green font-semibold mb-2">✓ Mobile-First Indexing Checklist</h4>
            <ul className="text-sm space-y-1">
              <li>• Mobile and desktop content are identical</li>
              <li>• Structured data appears on mobile version</li>
              <li>• Images and videos are accessible on mobile</li>
              <li>• Meta tags (title, description) match on both versions</li>
              <li>• Mobile site has same internal links as desktop</li>
            </ul>
          </div>

          <p>Check your mobile indexing status in <strong>Google Search Console</strong> under Settings → Crawling.</p>
        </section>

        <section id="responsive" className="mb-10">
          <h2>Responsive Design Essentials</h2>
          <p>Responsive design adapts your site layout to any screen size. It's the <strong>recommended approach</strong> by Google and the easiest to maintain.</p>

          <h3>Mobile Viewport Meta Tag</h3>
          <p>Always include this in your <code>&lt;head&gt;</code>:</p>

          <CodeBlock
            title="Viewport Meta Tag"
            language="html"
            code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
          />

          <h3>Responsive CSS Best Practices</h3>
          <CodeBlock
            title="Mobile-First CSS"
            language="css"
            code={`/* Mobile-first: start with mobile styles */
.container {
  padding: 1rem;
  font-size: 16px;
}

/* Tablet breakpoint */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 18px;
  }
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }
}`}
          />

          <h3>Avoid Common Mistakes</h3>
          <ul>
            <li>❌ Using separate mobile URLs (m.example.com)</li>
            <li>❌ Hiding content on mobile that exists on desktop</li>
            <li>❌ Using Flash or unsupported plugins</li>
            <li>❌ Intrusive interstitials that block content</li>
            <li>✓ Single responsive URL for all devices</li>
          </ul>
        </section>

        <section id="mobile-ux" className="mb-10">
          <h2>Mobile User Experience Optimization</h2>
          
          <h3>1. Readable Text Without Zooming</h3>
          <ul>
            <li>Minimum 16px font size for body text</li>
            <li>Line height: 1.5–1.8 for readability</li>
            <li>Adequate line length: 50–75 characters per line</li>
          </ul>

          <h3>2. Avoid Horizontal Scrolling</h3>
          <p>Set images and containers to max-width: 100% to prevent overflow.</p>

          <CodeBlock
            title="Prevent Overflow"
            language="css"
            code={`img, video, iframe {
  max-width: 100%;
  height: auto;
}

.content-container {
  padding: 0 1rem;
  overflow-x: hidden;
}`}
          />

          <h3>3. Minimize Popups and Interstitials</h3>
          <p>Google penalizes intrusive interstitials. If using popups:</p>
          <ul>
            <li>Delay popup until user has engaged with content</li>
            <li>Make close button easily accessible (tap target ≥44px)</li>
            <li>Don't cover primary content</li>
            <li>Use scroll-triggered or exit-intent instead of immediate</li>
          </ul>
        </section>

        <section id="tap-targets" className="mb-10">
          <h2>Tap Targets & Touch Optimization</h2>
          <p>Mobile users interact with touch, not mouse. <strong>Tap targets must be large enough</strong> and adequately spaced.</p>

          <div className="bg-warning-red bg-opacity-10 border border-warning-red rounded-lg p-4 my-6">
            <h4 className="text-warning-red font-semibold mb-2">⚠️ Tap Target Guidelines</h4>
            <ul className="text-sm space-y-1">
              <li>• Minimum tap target size: <strong>44×44 pixels</strong></li>
              <li>• Spacing between targets: at least 8px</li>
              <li>• Primary CTAs: 48–60px height for easier tapping</li>
              <li>• Navigation links: sufficient padding for thumb-friendly use</li>
            </ul>
          </div>

          <CodeBlock
            title="Touch-Friendly Buttons"
            language="css"
            code={`/* Mobile-first button styling */
.btn {
  min-height: 44px;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  margin: 8px 0;
}

.btn-primary {
  min-height: 48px; /* Make CTA larger */
  font-weight: 600;
}

/* Navigation links */
nav a {
  display: block;
  padding: 12px 16px;
  margin: 4px 0;
}`}
          />
        </section>

        <section id="mobile-speed" className="mb-10">
          <h2>Mobile Speed Optimization</h2>
          <p>Mobile users often have slower connections. <strong>Speed is critical</strong> for mobile SEO and conversions.</p>

          <h3>Mobile Core Web Vitals Targets</h3>
          <ul>
            <li><strong>LCP (Largest Contentful Paint):</strong> &lt; 2.5s</li>
            <li><strong>INP (Interaction to Next Paint):</strong> &lt; 200ms</li>
            <li><strong>CLS (Cumulative Layout Shift):</strong> &lt; 0.1</li>
          </ul>

          <p>See our <Link className="font-semibold text-system-green" href="/knowledge-base/tutorials/cwv-optimization">CWV Optimization Tutorial</Link> and <Link className="font-semibold text-system-green" href="/knowledge-base/checklists/cwv-field-testing">CWV Field Testing Checklist</Link> for deep optimization.</p>

          <h3>Mobile-Specific Speed Tips</h3>
          <ul>
            <li><strong>Image optimization:</strong> Use WebP, compress aggressively, serve responsive images with srcset</li>
            <li><strong>Lazy loading:</strong> Load images below the fold lazily</li>
            <li><strong>Reduce JavaScript:</strong> Mobile CPUs are slower; minimize and defer JS</li>
            <li><strong>Use CDN:</strong> Reduce latency with edge caching</li>
            <li><strong>Enable compression:</strong> Gzip or Brotli for text assets</li>
          </ul>

          <CodeBlock
            title="Responsive Images with Srcset"
            language="html"
            code={`<img 
  src="hero-800.jpg" 
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Hero image description"
  width="1200"
  height="600"
  loading="lazy"
/>`}
          />
        </section>

        <section id="mobile-content" className="mb-10">
          <h2>Mobile Content Strategy</h2>
          
          <h3>Content Parity</h3>
          <p>Ensure mobile and desktop versions have <strong>identical content</strong>. Don't hide content in accordions or tabs that Google might not discover.</p>

          <h3>Formatting for Mobile</h3>
          <ul>
            <li><strong>Short paragraphs:</strong> 2–3 lines maximum</li>
            <li><strong>Bullet points:</strong> Break up long lists</li>
            <li><strong>Headings:</strong> Clear H2/H3 structure for scannability</li>
            <li><strong>White space:</strong> Generous padding and margins</li>
            <li><strong>Font hierarchy:</strong> Clear visual distinction between heading levels</li>
          </ul>

          <h3>Mobile-First Writing</h3>
          <ul>
            <li>Front-load key information in first paragraph</li>
            <li>Use descriptive headings for scanners</li>
            <li>Keep sentences concise (15–20 words)</li>
            <li>Use active voice for clarity</li>
          </ul>
        </section>

        <section id="testing" className="mb-10">
          <h2>Mobile Testing Tools</h2>
          
          <div className="bg-dark-grey border border-system-green rounded-lg p-4 my-6">
            <h4 className="font-semibold mb-3">Essential Mobile Testing Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Mobile-Friendly Test:</strong> <a className="text-alert-cyan" href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer">search.google.com/test/mobile-friendly</a>
              </li>
              <li>
                <strong>PageSpeed Insights:</strong> <a className="text-alert-cyan" href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">pagespeed.web.dev</a>
              </li>
              <li>
                <strong>Chrome DevTools:</strong> Toggle device toolbar (Ctrl+Shift+M) to test responsive layouts
              </li>
              <li>
                <strong>BrowserStack:</strong> Test on real mobile devices across OS versions
              </li>
              <li>
                <strong>Google Search Console:</strong> Mobile Usability report shows errors
              </li>
            </ul>
          </div>

          <h3>Testing Checklist</h3>
          <ol>
            <li>Run Mobile-Friendly Test — fix all errors</li>
            <li>Test on real iOS and Android devices</li>
            <li>Check tap target sizes in Chrome DevTools</li>
            <li>Verify Core Web Vitals on mobile</li>
            <li>Test different screen sizes (320px, 375px, 414px, 768px)</li>
            <li>Check mobile usability in GSC weekly</li>
          </ol>
        </section>

        <KeyTakeaways items={[
          'Mobile-first indexing means mobile version determines rankings',
          'Use responsive design, not separate mobile URLs',
          'Maintain content parity between mobile and desktop',
          'Minimum 44×44px tap targets with 8px spacing',
          'Optimize mobile Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1',
          'Test on real devices and validate with Mobile-Friendly Test',
          'Keep mobile content scannable with short paragraphs and clear headings',
        ]} />

        <ConsultationCTA />
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Mobile SEO Complete Guide — Mobile-First Optimization',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'Mobile SEO', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/knowledge-base/tutorials/mobile-seo` },
        ],
      }} />
    </div>
  )
}
