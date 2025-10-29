import TableOfContents from '@/components/TableOfContents'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'SEO Glossary — A to Z | SEO MASTER HUB',
  description: 'Clear, concise definitions of SEO terms from A to Z: algorithms, canonical, CWV, disavow, E-E-A-T, sitemap, and more.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'a', title: 'A' },
  { id: 'b', title: 'B' },
  { id: 'c', title: 'C' },
  { id: 'd', title: 'D' },
  { id: 'e', title: 'E' },
  { id: 'f', title: 'F' },
  { id: 'h', title: 'H' },
  { id: 'i', title: 'I' },
  { id: 'k', title: 'K' },
  { id: 'l', title: 'L' },
  { id: 'm', title: 'M' },
  { id: 'n', title: 'N' },
  { id: 'o', title: 'O' },
  { id: 'p', title: 'P' },
  { id: 'r', title: 'R' },
  { id: 's', title: 'S' },
  { id: 't', title: 'T' },
  { id: 'u', title: 'U' },
  { id: 'w', title: 'W' },
  { id: 'x', title: 'X' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'SEO Glossary — A to Z',
  'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
}

export default function GlossaryPage() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/glossary', label: 'Glossary' },
      ]} />
      <header className="mb-6">
        <h1>SEO Glossary — A to Z</h1>
        <p className="text-medium-grey">Definitions you can act on, not buzzwords.</p>
      </header>
      <TableOfContents items={tocItems} />

  <article className="prose max-w-none">
        <section id="a" className="mb-10">
          <h2>A</h2>
          <p><strong>Algorithm:</strong> A set of rules search engines use to rank pages.</p>
          <p><strong>Anchor Text:</strong> Clickable text of a link; aim for descriptive, natural phrasing.</p>
          <p><strong>Alt Text:</strong> Image description for accessibility and context; avoid stuffing.</p>
          <p><strong>Authority:</strong> Measure of a domain's credibility and trustworthiness based on backlinks and content quality.</p>
          <p><strong>AMP (Accelerated Mobile Pages):</strong> Google framework for fast-loading mobile pages.</p>
        </section>

        <section id="b" className="mb-10">
          <h2>B</h2>
          <p><strong>Backlink:</strong> Incoming link from another website to your site.</p>
          <p><strong>Black Hat SEO:</strong> Manipulative tactics that violate search engine guidelines.</p>
          <p><strong>Bounce Rate:</strong> Percentage of visitors who leave after viewing one page.</p>
          <p><strong>Breadcrumb:</strong> Navigation trail showing page hierarchy; improves UX and SEO.</p>
          <p><strong>Bot (Crawler):</strong> Automated program that discovers and indexes web pages.</p>
        </section>

        <section id="c" className="mb-10">
          <h2>C</h2>
          <p><strong>Canonical URL:</strong> A hint that a URL is the preferred version among duplicates.</p>
          <p><strong>CTR (Click-Through Rate):</strong> Percentage of impressions that result in clicks.</p>
          <p><strong>CWV (Core Web Vitals):</strong> LCP, INP, and CLS — real-user performance metrics.</p>
          <p><strong>Crawl Budget:</strong> Number of pages search bots will crawl on your site in a given timeframe.</p>
          <p><strong>CLS (Cumulative Layout Shift):</strong> Measures visual stability; target &lt; 0.1.</p>
          <p><strong>Conversion Rate:</strong> Percentage of visitors who complete desired actions.</p>
        </section>

        <section id="d" className="mb-10">
          <h2>D</h2>
          <p><strong>Domain Authority (DA):</strong> Moz metric predicting ranking potential (0–100 scale).</p>
          <p><strong>Dofollow:</strong> Link that passes authority to the destination page.</p>
          <p><strong>Duplicate Content:</strong> Identical or very similar content appearing on multiple URLs.</p>
          <p><strong>Disavow:</strong> Tool to tell Google to ignore specific backlinks.</p>
        </section>

        <section id="e" className="mb-10">
          <h2>E</h2>
          <p><strong>E-E-A-T:</strong> Experience, Expertise, Authoritativeness, Trustworthiness — content quality signals.</p>
          <p><strong>Entities:</strong> Real-world things (people, places, brands) that help disambiguate topics.</p>
          <p><strong>External Link:</strong> Link pointing to a different domain.</p>
        </section>

        <section id="f" className="mb-10">
          <h2>F</h2>
          <p><strong>Featured Snippet:</strong> Selected search result displayed at top of SERPs in a box.</p>
          <p><strong>Faceted Navigation:</strong> Filtering system common in e-commerce; can create duplicate content.</p>
          <p><strong>Findability:</strong> How easily users and search engines can discover your content.</p>
        </section>

        <section id="h" className="mb-10">
          <h2>H</h2>
          <p><strong>Hreflang:</strong> HTML attribute indicating language and regional targeting.</p>
          <p><strong>HTML Sitemap:</strong> User-facing page listing site links (differs from XML sitemap).</p>
          <p><strong>Heading Tags:</strong> H1–H6 tags that structure content hierarchy.</p>
        </section>

        <section id="i" className="mb-10">
          <h2>I</h2>
          <p><strong>Indexing:</strong> Process of adding web pages to search engine's database.</p>
          <p><strong>Internal Link:</strong> Link pointing to another page on the same domain.</p>
          <p><strong>INP (Interaction to Next Paint):</strong> Measures interactivity; target &lt; 200ms.</p>
          <p><strong>Intent (Search Intent):</strong> Purpose behind a user's search query.</p>
        </section>

        <section id="k" className="mb-10">
          <h2>K</h2>
          <p><strong>Keyword:</strong> Word or phrase users type into search engines.</p>
          <p><strong>Keyword Difficulty:</strong> Measure of ranking competition for a keyword.</p>
          <p><strong>Keyword Stuffing:</strong> Overusing keywords unnaturally; penalized by search engines.</p>
          <p><strong>Knowledge Graph:</strong> Google's database of entities and their relationships.</p>
        </section>

        <section id="l" className="mb-10">
          <h2>L</h2>
          <p><strong>LCP (Largest Contentful Paint):</strong> Measures loading speed; target &lt; 2.5s.</p>
          <p><strong>Link Equity (Link Juice):</strong> Authority passed via internal and external links.</p>
          <p><strong>Log File Analysis:</strong> Server logs that reveal crawl patterns and bottlenecks.</p>
          <p><strong>Long-Tail Keyword:</strong> Specific, low-volume search phrase with high intent.</p>
          <p><strong>Local Pack:</strong> Map with 3 business listings shown for local searches.</p>
        </section>

        <section id="m" className="mb-10">
          <h2>M</h2>
          <p><strong>Meta Description:</strong> HTML tag summarizing page content; appears in search results.</p>
          <p><strong>Meta Title (Title Tag):</strong> HTML tag defining page title; critical ranking factor.</p>
          <p><strong>Mobile-First Indexing:</strong> Google uses mobile version for indexing and ranking.</p>
        </section>

        <section id="n" className="mb-10">
          <h2>N</h2>
          <p><strong>NAP:</strong> Name, Address, Phone — essential for local SEO consistency.</p>
          <p><strong>Nofollow:</strong> Link attribute that doesn't pass authority.</p>
          <p><strong>Noindex:</strong> Meta tag preventing page from appearing in search results.</p>
        </section>

        <section id="o" className="mb-10">
          <h2>O</h2>
          <p><strong>Organic Traffic:</strong> Visitors from unpaid search results.</p>
          <p><strong>On-Page SEO:</strong> Optimization of elements on your website.</p>
          <p><strong>Off-Page SEO:</strong> Activities outside your site (backlinks, brand mentions).</p>
        </section>

        <section id="p" className="mb-10">
          <h2>P</h2>
          <p><strong>PageRank:</strong> Google's original algorithm measuring link authority.</p>
          <p><strong>Pillar Page:</strong> Comprehensive resource covering broad topic; links to cluster content.</p>
          <p><strong>PBN (Private Blog Network):</strong> Group of sites built to manipulate rankings; black hat.</p>
        </section>

        <section id="r" className="mb-10">
          <h2>R</h2>
          <p><strong>Ranking:</strong> Position of a page in search results.</p>
          <p><strong>Redirect (301/302):</strong> Forwards users and bots from one URL to another.</p>
          <p><strong>Robots.txt:</strong> File instructing bots which pages to crawl or avoid.</p>
          <p><strong>Rich Results:</strong> Enhanced search results with extra features (stars, images, FAQs).</p>
          <p><strong>RUM (Real User Monitoring):</strong> Collecting performance data from actual users.</p>
        </section>

        <section id="s" className="mb-10">
          <h2>S</h2>
          <p><strong>Schema Markup:</strong> Structured data that can enable rich results.</p>
          <p><strong>SERP (Search Engine Results Page):</strong> Page displaying search results.</p>
          <p><strong>Sitemap:</strong> Machine-readable discovery file listing site URLs.</p>
          <p><strong>Search Console:</strong> Google tool for monitoring search performance and indexing.</p>
          <p><strong>Semantic SEO:</strong> Optimizing for topics and entities, not just keywords.</p>
        </section>

        <section id="t" className="mb-10">
          <h2>T</h2>
          <p><strong>Technical SEO:</strong> Optimizing site infrastructure for crawling and indexing.</p>
          <p><strong>Title Tag:</strong> HTML element specifying page title; major ranking signal.</p>
          <p><strong>Topic Cluster:</strong> Content strategy grouping related pages around pillar content.</p>
          <p><strong>Thin Content:</strong> Pages with little valuable content; often penalized.</p>
        </section>

        <section id="u" className="mb-10">
          <h2>U</h2>
          <p><strong>URL:</strong> Web address of a page.</p>
          <p><strong>URL Slug:</strong> Last portion of URL after domain (e.g., /seo-guide).</p>
          <p><strong>User Intent:</strong> Goal user wants to accomplish with search query.</p>
          <p><strong>UX (User Experience):</strong> Overall experience users have on your site.</p>
        </section>

        <section id="w" className="mb-10">
          <h2>W</h2>
          <p><strong>White Hat SEO:</strong> Ethical SEO practices following search engine guidelines.</p>
          <p><strong>Word Count:</strong> Number of words on a page; depth matters more than length.</p>
        </section>

        <section id="x" className="mb-10">
          <h2>X</h2>
          <p><strong>XML Sitemap:</strong> File listing URLs for search engines to crawl.</p>
          <p><strong>XPath:</strong> Query language for selecting nodes in XML/HTML documents.</p>
        </section>
      </article>

      <StructuredData data={articleSchema} />
      <section className="prose max-w-none mb-10">
        <h3>Further Reading</h3>
        <ul>
          <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/fundamentals/seo-glossary" target="_blank" rel="noopener noreferrer">Google — SEO Glossary</a></li>
          <li><a className="font-semibold text-alert-cyan" href="https://moz.com/learn/seo/search-engine-optimization" target="_blank" rel="noopener noreferrer">Moz — Learn SEO</a></li>
          <li><a className="font-semibold text-alert-cyan" href="https://ahrefs.com/seo" target="_blank" rel="noopener noreferrer">Ahrefs — SEO Resources</a></li>
        </ul>
        <h3 className="mt-6">Related Guides</h3>
        <ul>
          <li><a className="text-system-green font-semibold" href="/seo-fundamentals">SEO Fundamentals</a></li>
          <li><a className="text-system-green font-semibold" href="/ultimate-seo-guide">Ultimate SEO Guide</a></li>
          <li><a className="text-system-green font-semibold" href="/on-page-seo">On‑Page SEO</a></li>
        </ul>
      </section>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/glossary` },
        ],
      }} />
    </div>
  )
}
