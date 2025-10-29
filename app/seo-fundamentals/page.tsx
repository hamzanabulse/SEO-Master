import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'SEO Fundamentals & Glossary - Complete Foundation Guide | SEO MASTER HUB',
  description: 'Master the fundamental principles of SEO including E-E-A-T, search engine mechanics, and essential terminology. Your complete foundation for SEO success.',
  keywords: 'SEO fundamentals, E-E-A-T, search engine optimization basics, SEO glossary, SEO foundation',
}

const tocItems = [
  { id: 'what-is-seo', title: 'What is SEO? The Foundation' },
  { id: 'search-engine-mechanics', title: 'How Search Engines Work' },
  { id: 'eat-principles', title: 'E-E-A-T: The Authority Framework' },
  { id: 'keyword-fundamentals', title: 'Understanding Keywords & Intent' },
  { id: 'seo-glossary', title: 'Essential SEO Glossary' },
  { id: 'getting-started', title: 'Your SEO Action Plan' },
]

export default function SEOFundamentals() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/seo-fundamentals', label: 'SEO Fundamentals' },
      ]} />
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SEO Fundamentals & Glossary: The <span className="text-system-green">Foundation</span>
        </h1>
        <p className="text-xl text-medium-grey leading-relaxed mb-6">
          Master the core principles of Search Engine Optimization. This comprehensive guide covers 
          <strong> E-E-A-T principles</strong>, search engine mechanics, and essential terminology 
          that forms the foundation of all successful SEO strategies.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-system-green text-obsidian px-3 py-1 rounded text-sm font-medium">Foundation</span>
          <span className="bg-dark-grey text-light-grey px-3 py-1 rounded text-sm">15 min read</span>
          <span className="bg-dark-grey text-light-grey px-3 py-1 rounded text-sm">Beginner Friendly</span>
        </div>
      </header>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />

      {/* Main Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: What is SEO */}
        <section id="what-is-seo" className="mb-12">
          <h2>What is SEO? The Foundation</h2>
          
          <p>
            <strong>Search Engine Optimization (SEO)</strong> is the practice of optimizing websites 
            to increase their visibility and ranking in search engine results pages (SERPs).
          </p>
          
          <p>
            At its core, SEO is about <strong>matching user intent with valuable content</strong> 
            while ensuring search engines can efficiently crawl, index, and understand your website.
          </p>
          
          <div className="bg-dark-grey border-l-4 border-system-green p-4 rounded-r-lg my-6">
            <h3 className="text-lg font-semibold mb-2 text-system-green">Why SEO Matters</h3>
            <ul className="space-y-2">
              <li><strong>Organic Traffic:</strong> Free, high-quality traffic from search engines</li>
              <li><strong>Credibility:</strong> Higher rankings signal authority and trustworthiness</li>
              <li><strong>ROI:</strong> Long-term results with compound growth potential</li>
              <li><strong>User Experience:</strong> SEO improvements enhance overall site usability</li>
            </ul>
          </div>

          <p>
            Modern SEO encompasses three fundamental pillars: <Link href="/technical-seo" className="text-system-green font-semibold">Technical SEO</Link>, 
            <Link href="/on-page-seo" className="text-system-green font-semibold"> Content Optimization</Link>, and 
            <Link href="/off-page-seo" className="text-system-green font-semibold"> Authority Building</Link>.
          </p>
        </section>

        {/* Section 2: Search Engine Mechanics */}
        <section id="search-engine-mechanics" className="mb-12">
          <h2>How Search Engines Work</h2>
          
          <p>
            Understanding search engine mechanics is crucial for effective SEO. The process involves 
            three main stages: <strong>Crawling</strong>, <strong>Indexing</strong>, and <strong>Ranking</strong>.
          </p>

          <h3>1. Crawling: Discovery Phase</h3>
          <p>
            Search engine bots (like Googlebot) discover and scan web pages by following links. 
            They analyze page content, structure, and technical elements.
          </p>
          
          <div className="bg-obsidian border border-system-green rounded-lg p-4 my-4">
            <h4 className="text-system-green font-semibold mb-2">Crawling Optimization Tips:</h4>
            <ul className="text-sm space-y-1">
              <li>• Create a comprehensive XML sitemap</li>
              <li>• Optimize internal linking structure</li>
              <li>• Ensure fast page load speeds</li>
              <li>• Fix broken links and 404 errors</li>
            </ul>
          </div>

          <h3>2. Indexing: Storage Phase</h3>
          <p>
            After crawling, search engines process and store page information in massive databases. 
            They analyze content relevance, quality signals, and technical factors.
          </p>

          <h3>3. Ranking: Retrieval Phase</h3>
          <p>
            When users search, algorithms evaluate indexed pages against <strong>200+ ranking factors</strong> 
            to determine the most relevant and authoritative results.
          </p>

          <p>
            Key ranking factors include content quality, user experience signals, 
            <Link href="/technical-seo#core-web-vitals" className="text-system-green font-semibold">Core Web Vitals</Link>, 
            and external authority signals. Track progress with dashboards in <Link href="/data-analysis" className="text-system-green font-semibold">Data Analysis</Link> and reinforce authority with <Link href="/off-page-seo" className="text-system-green font-semibold">Off‑Page SEO</Link>.
          </p>
        </section>

        {/* Section 3: E-E-A-T Principles */}
        <section id="eat-principles" className="mb-12">
          <h2>E-E-A-T: The Authority Framework</h2>
          
          <p>
            <strong>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)</strong> 
            form Google's quality framework for evaluating content and websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-dark-grey border border-system-green rounded-lg p-4">
              <h3 className="text-system-green font-semibold mb-2">Experience</h3>
              <p className="text-sm">
                Demonstrates first-hand, lived experience with the topic. 
                Shows practical knowledge and real-world application.
              </p>
            </div>
            
            <div className="bg-dark-grey border border-alert-cyan rounded-lg p-4">
              <h3 className="text-alert-cyan font-semibold mb-2">Expertise</h3>
              <p className="text-sm">
                Shows deep knowledge and skill in the subject matter. 
                Backed by credentials, education, or proven track record.
              </p>
            </div>
            
            <div className="bg-dark-grey border border-system-green rounded-lg p-4">
              <h3 className="text-system-green font-semibold mb-2">Authoritativeness</h3>
              <p className="text-sm">
                Recognition as a go-to source for the topic. 
                Earned through citations, mentions, and industry acknowledgment.
              </p>
            </div>
            
            <div className="bg-dark-grey border border-alert-cyan rounded-lg p-4">
              <h3 className="text-alert-cyan font-semibold mb-2">Trustworthiness</h3>
              <p className="text-sm">
                Reliability, transparency, and accuracy of content. 
                Includes site security, clear policies, and factual information.
              </p>
            </div>
          </div>

          <p>
            Building E-E-A-T requires consistent effort in content creation, 
            <Link href="/off-page-seo#digital-pr" className="text-system-green font-semibold">digital PR</Link>, 
            and establishing industry recognition through quality work and expertise demonstration.
          </p>
        </section>

        {/* Section 4: Keyword Fundamentals */}
        <section id="keyword-fundamentals" className="mb-12">
          <h2>Understanding Keywords & Intent</h2>
          
          <p>
            <strong>Keywords</strong> are the bridge between user queries and your content. 
            Modern SEO focuses on <strong>search intent</strong> rather than exact keyword matching.
          </p>

          <h3>Four Types of Search Intent</h3>
          
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-system-green pl-4">
              <h4 className="font-semibold text-system-green">1. Informational Intent</h4>
              <p className="text-sm">Users seeking knowledge. Examples: "how to optimize images for SEO", "what is domain authority"</p>
            </div>
            
            <div className="border-l-4 border-alert-cyan pl-4">
              <h4 className="font-semibold text-alert-cyan">2. Navigational Intent</h4>
              <p className="text-sm">Users looking for specific websites. Examples: "Google Search Console login", "Ahrefs pricing"</p>
            </div>
            
            <div className="border-l-4 border-system-green pl-4">
              <h4 className="font-semibold text-system-green">3. Transactional Intent</h4>
              <p className="text-sm">Users ready to purchase. Examples: "buy SEO audit tool", "hire SEO consultant"</p>
            </div>
            
            <div className="border-l-4 border-alert-cyan pl-4">
              <h4 className="font-semibold text-alert-cyan">4. Commercial Investigation</h4>
              <p className="text-sm">Users comparing options. Examples: "best SEO tools 2024", "Semrush vs Ahrefs comparison"</p>
            </div>
          </div>

          <p>
            Successful <Link href="/on-page-seo#keyword-research" className="text-system-green font-semibold">keyword research</Link> 
            involves understanding user intent and creating content that fully satisfies search queries.
          </p>
        </section>

        {/* Section 5: SEO Glossary */}
        <section id="seo-glossary" className="mb-12">
          <h2>Essential SEO Glossary</h2>
          
          <p>
            Master these fundamental SEO terms to communicate effectively and understand industry discussions.
          </p>

          <div className="bg-dark-grey rounded-lg p-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-system-green mb-2">Core Terms</h4>
                <dl className="space-y-2">
                  <dt className="font-semibold">SERP:</dt>
                  <dd className="text-medium-grey mb-2">Search Engine Results Page - the page displaying search results</dd>
                  
                  <dt className="font-semibold">Organic Traffic:</dt>
                  <dd className="text-medium-grey mb-2">Visitors from unpaid search engine results</dd>
                  
                  <dt className="font-semibold">Domain Authority:</dt>
                  <dd className="text-medium-grey mb-2">Metric predicting how well a website will rank</dd>
                  
                  <dt className="font-semibold">Backlink:</dt>
                  <dd className="text-medium-grey mb-2">Link from another website pointing to your site</dd>
                </dl>
              </div>
              
              <div>
                <h4 className="font-semibold text-alert-cyan mb-2">Technical Terms</h4>
                <dl className="space-y-2">
                  <dt className="font-semibold">Crawl Budget:</dt>
                  <dd className="text-medium-grey mb-2">Number of pages search engines will crawl on your site</dd>
                  
                  <dt className="font-semibold">Schema Markup:</dt>
                  <dd className="text-medium-grey mb-2">Code helping search engines understand page content</dd>
                  
                  <dt className="font-semibold">Canonical URL:</dt>
                  <dd className="text-medium-grey mb-2">Preferred version of duplicate or similar pages</dd>
                  
                  <dt className="font-semibold">Meta Description:</dt>
                  <dd className="text-medium-grey mb-2">HTML element describing page content in search results</dd>
                </dl>
              </div>
            </div>
          </div>

          <p>
            For comprehensive technical definitions, explore our 
            <Link href="/technical-seo#seo-glossary-advanced" className="text-system-green font-semibold">Advanced SEO Glossary</Link> 
            in the Technical SEO section.
          </p>
        </section>

        {/* Section 6: Getting Started */}
        <section id="getting-started" className="mb-12">
          <h2>Your SEO Action Plan</h2>
          
          <p>
            Ready to implement SEO? Follow this strategic roadmap to build a solid foundation 
            for long-term search engine success.
          </p>

          <div className="bg-system-green bg-opacity-10 border border-system-green rounded-lg p-6 my-6">
            <h3 className="text-system-green font-semibold mb-4">30-Day SEO Foundation Plan</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</span>
                <div>
                  <h4 className="font-semibold">Week 1: Technical Foundation</h4>
                  <p className="text-sm text-medium-grey">Set up Google Search Console, fix critical technical issues, optimize site speed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</span>
                <div>
                  <h4 className="font-semibold">Week 2: Content Audit</h4>
                  <p className="text-sm text-medium-grey">Analyze existing content, identify gaps, optimize high-priority pages</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</span>
                <div>
                  <h4 className="font-semibold">Week 3: Keyword Research</h4>
                  <p className="text-sm text-medium-grey">Conduct comprehensive keyword research, map content to search intent</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</span>
                <div>
                  <h4 className="font-semibold">Week 4: Authority Building</h4>
                  <p className="text-sm text-medium-grey">Begin link building outreach, establish social presence, create shareable content</p>
                </div>
              </div>
            </div>
          </div>

          <p>
            Continue your journey with our advanced guides on 
            <Link href="/technical-seo" className="text-system-green font-semibold">Technical SEO Mastery</Link> and 
            <Link href="/on-page-seo" className="text-system-green font-semibold">Content Strategy</Link>.
          </p>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways 
          items={[
            'SEO is the practice of optimizing websites for search engine visibility and user experience',
            'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is the foundation of quality content',
            'Understanding search intent is more important than exact keyword matching',
            'Search engines crawl, index, and rank pages based on 200+ factors',
            'Start with technical foundations, then focus on content and authority building',
            'Consistent effort and patience are essential for long-term SEO success'
          ]}
        />

        {/* Consultation CTA */}
        <section className="mb-12">
          <h3>Further Reading</h3>
          <ul>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer">Google — Search Essentials (formerly Webmaster Guidelines)</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://developers.google.com/search/docs/fundamentals/how-search-works" target="_blank" rel="noopener noreferrer">Google — How Search Works</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer">Moz — Beginner’s Guide to SEO</a></li>
            <li><a className="font-semibold text-alert-cyan" href="https://ahrefs.com/blog/seo-basics/" target="_blank" rel="noopener noreferrer">Ahrefs — SEO Basics</a></li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/ultimate-seo-guide">Ultimate SEO Guide</Link></li>
            <li><Link className="text-system-green font-semibold" href="/glossary">SEO Glossary</Link></li>
            <li><Link className="text-system-green font-semibold" href="/technical-seo">Technical SEO</Link></li>
            <li><Link className="text-system-green font-semibold" href="/on-page-seo">On‑Page SEO</Link></li>
            <li><Link className="text-system-green font-semibold" href="/off-page-seo">Off‑Page SEO</Link></li>
          </ul>
        </section>

        <ConsultationCTA />
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'SEO Fundamentals & Glossary - Complete Foundation Guide',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'SEO Fundamentals', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/seo-fundamentals` },
        ],
      }} />
    </div>
  )
}