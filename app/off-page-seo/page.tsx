import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import CodeBlock from '@/components/CodeBlock'
import StructuredData from '@/components/StructuredData'
import AuthorBadge from '@/components/AuthorBadge'
import BreadcrumbNav from '@/components/BreadcrumbNav'

export const metadata = {
  title: 'Ultimate Off-Page SEO: Mastering Link Building, E-A-T, and Digital PR for Global Authority | SEO MASTER HUB',
  description: 'Master advanced off-page SEO strategies including link building, digital PR, unlinked mentions, and backlink analysis. Build domain authority and establish global SEO dominance.',
  keywords: 'off-page SEO, link building, digital PR, backlinks, domain authority, E-A-T, authority building, SEO reputation management',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'modern-link-building', title: 'The Modern Link Building Mindset' },
  { id: 'digital-pr-mentions', title: 'Digital PR and Unlinked Brand Mentions' },
  { id: 'guest-posting-collaboration', title: 'Guest Posting and Strategic Content Collaboration' },
  { id: 'backlink-analysis', title: 'Analyzing Your Backlink Profile' },
]

export default function OffPageSEO() {
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/off-page-seo', label: 'Off-Page SEO' },
      ]} />
      {/* Header Section */}
      <header className="mb-8 flex items-start justify-between gap-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-[glow_1.5s_ease-in-out_infinite_alternate]">
          Ultimate Off-Page SEO: Mastering Link Building, E-A-T, and Digital PR for <span className="text-system-green">Global Authority</span>
        </h1>
        <AuthorBadge />
      </header>

    <p className="text-xl text-medium-grey leading-relaxed mb-6">
      Master the art of building authority through strategic off-page optimization. 
      Learn proven <strong>link building tactics</strong>, <strong>digital PR strategies</strong>, 
      and <strong>reputation management techniques</strong> that separate market leaders from the competition. For foundational concepts,
      see <Link className="text-system-green font-semibold" href="/seo-fundamentals">SEO Fundamentals</Link> and learn how to measure impact in 
      <Link className="text-system-green font-semibold" href="/data-analysis">Data Analysis</Link>.
    </p>
      <div className="flex flex-wrap gap-3 mb-8">
        <span className="bg-system-green text-obsidian px-3 py-1 rounded text-sm font-medium">Authority Building</span>
        <span className="bg-dark-grey text-light-grey px-3 py-1 rounded text-sm">25 min read</span>
        <span className="bg-dark-grey text-light-grey px-3 py-1 rounded text-sm">Advanced</span>
      </div>

      {/* Introduction */}
      <div className="bg-dark-grey border-l-4 border-system-green p-6 rounded-r-lg mb-8">
        <p className="text-lg leading-relaxed">
          <strong>Off-Page SEO</strong> encompasses all optimization activities that happen 
          <strong> outside your website</strong> to improve search engine rankings. 
          This includes link building, brand mentions, social signals, and establishing 
          your site's <strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</strong> 
          through external validation.
        </p>
        <p className="mt-4 text-medium-grey">
          High-quality off-page work is what truly separates market leaders from the rest. 
          It's the difference between ranking on page 2 and dominating position 1.
        </p>
      </div>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />

      {/* Main Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 4.1: Modern Link Building Mindset */}
        <section id="modern-link-building" className="mb-12">
          <h2>4.1: The Modern Link Building Mindset (Quality vs. Quantity)</h2>

          <p>
            The era of buying links and manipulative link schemes is over. 
            Modern link building focuses on <strong>earning high-quality links</strong> from 
            relevant, authoritative websites through genuine value creation.
          </p>

          <div className="bg-warning-red bg-opacity-10 border border-warning-red rounded-lg p-4 my-6">
            <h3 className="text-warning-red font-semibold mb-2">⚠️ Why Buying Links is Detrimental</h3>
            <ul className="text-sm space-y-1">
              <li>• Google's algorithms detect and penalize purchased links</li>
              <li>• Risk of manual penalties that can devastate rankings</li>
              <li>• Low-quality links provide no ranking benefit</li>
              <li>• Wastes budget that could be invested in sustainable strategies</li>
            </ul>
          </div>

          <h3>The Two Core Metrics: Relevance and Authority</h3>
          
          <p>
            Every link building campaign should prioritize these fundamental metrics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-system-green bg-opacity-10 border border-system-green rounded-lg p-4">
              <h4 className="text-system-green font-semibold mb-2">Relevance</h4>
              <ul className="text-sm space-y-1">
                <li>• Topical alignment with your industry</li>
                <li>• Contextual placement within relevant content</li>
                <li>• Audience overlap with your target market</li>
                <li>• Content themes that complement your expertise</li>
              </ul>
            </div>
            
            <div className="bg-alert-cyan bg-opacity-10 border border-alert-cyan rounded-lg p-4">
              <h4 className="text-alert-cyan font-semibold mb-2">Authority</h4>
              <ul className="text-sm space-y-1">
                <li>• High domain authority (DA 40+)</li>
                <li>• Strong organic traffic (10K+ monthly)</li>
                <li>• Established publication history</li>
                <li>• Recognition in your industry sector</li>
              </ul>
            </div>
          </div>

          <h3>High-ROI Link Building Strategies</h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-system-green pl-6">
              <h4 className="font-semibold text-system-green mb-2">Resource Page Link Building</h4>
              <p className="text-sm mb-2">
                Identify resource pages in your industry and pitch your content as a valuable addition.
              </p>
              <p className="text-xs text-medium-grey">
                <strong>Strategy:</strong> Search for "your industry + resources", "your topic + links", 
                "useful tools + your niche" to find opportunities.
              </p>
            </div>

            <div className="border-l-4 border-alert-cyan pl-6">
              <h4 className="font-semibold text-alert-cyan mb-2">Skyscraper Technique</h4>
              <p className="text-sm mb-2">
                Create superior content that improves upon existing popular resources.
              </p>
              <p className="text-xs text-medium-grey">
                <strong>Process:</strong> Find link-worthy content → Create better version → 
                Outreach to sites linking to original → Pitch your improved resource.
              </p>
            </div>

            <div className="border-l-4 border-system-green pl-6">
              <h4 className="font-semibold text-system-green mb-2">Broken Link Building</h4>
              <p className="text-sm mb-2">
                Find broken links on relevant sites and offer your content as a replacement.
              </p>
              <p className="text-xs text-medium-grey">
                <strong>Tools:</strong> Use Check My Links browser extension or Ahrefs 
                to identify broken outbound links on target websites.
              </p>
            </div>
          </div>

          <p>
            For detailed authority score analysis, go to 
            <Link href="/data-analysis#kpis" className="text-system-green font-semibold">Data Analysis KPIs</Link>,
            and strengthen content relevance with 
            <Link href="/on-page-seo#keyword-intent" className="text-system-green font-semibold">On-Page Keyword Intent</Link>. Also ensure that
            <Link href="/technical-seo#architecture" className="text-system-green font-semibold">Technical Architecture</Link>
            supports clean internal linking.
          </p>
        </section>

        {/* Section 4.2: Digital PR and Unlinked Mentions */}
        <section id="digital-pr-mentions" className="mb-12">
          <h2>4.2: Digital PR and Unlinked Brand Mentions</h2>

          <p>
            <strong>Digital PR</strong> is the practice of earning media coverage and brand mentions 
            through strategic content creation, relationship building, and newsworthy activities. 
            It's one of the most powerful ways to build authority and earn high-quality backlinks.
          </p>

          <h3>The Power of Unlinked Brand Mentions</h3>

          <p>
            Many websites mention your brand or content without providing a clickable link. 
            These <strong>unlinked mentions</strong> represent untapped link building opportunities 
            that can be converted into powerful backlinks with strategic outreach. Include them in your 
            <Link className="text-system-green font-semibold" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit</Link> workflow to ensure consistent follow‑up.
          </p>

          <div className="bg-obsidian border border-system-green rounded-lg p-6 my-6">
            <h4 className="text-system-green font-semibold mb-4">🔄 Unlinked Mention Conversion Workflow</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h5 className="font-semibold">Monitor Brand Mentions</h5>
                  <p className="text-sm text-medium-grey">Use Google Alerts, Mention.com, or Brand24 to track unlinked mentions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h5 className="font-semibold">Qualify Opportunities</h5>
                  <p className="text-sm text-medium-grey">Assess domain authority, relevance, and context of the mention</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h5 className="font-semibold">Craft Personalized Outreach</h5>
                  <p className="text-sm text-medium-grey">Thank them for the mention and politely request a link addition</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <h5 className="font-semibold">Follow Up Strategically</h5>
                  <p className="text-sm text-medium-grey">Send 1-2 polite follow-ups spaced 1 week apart if no response</p>
                </div>
              </div>
            </div>
          </div>

          <h3>Essential Tools for Mention Tracking</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-dark-grey border border-medium-grey rounded-lg p-4">
              <h4 className="font-semibold mb-2">Free Tools</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>Google Alerts:</strong> Basic brand mention monitoring</li>
                <li>• <strong>Mention.com:</strong> Free tier with limited alerts</li>
                <li>• <strong>Google Search:</strong> Manual searches with quotes</li>
                <li>• <strong>Social Media Search:</strong> Platform-specific monitoring</li>
              </ul>
            </div>
            
            <div className="bg-dark-grey border border-medium-grey rounded-lg p-4">
              <h4 className="font-semibold mb-2">Premium Tools</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>Brand24:</strong> Comprehensive mention tracking</li>
                <li>• <strong>Ahrefs Alerts:</strong> Advanced backlink monitoring</li>
                <li>• <strong>Semrush Brand Monitoring:</strong> Multi-channel tracking</li>
                <li>• <strong>Buzzsumo:</strong> Content and brand mention analysis</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>Pro Tip:</strong> Monitor mentions of your competitors to identify 
            publication opportunities and industry publications in your space.
          </p>
        </section>

        {/* Section 4.3: Guest Posting and Content Collaboration */}
        <section id="guest-posting-collaboration" className="mb-12">
          <h2>4.3: The Power of Guest Posting and Strategic Content Collaboration</h2>

          <p>
            <strong>Guest posting</strong> remains one of the most effective link building strategies 
            when executed with quality and authenticity. The key is providing genuine value 
            to the host publication's audience while establishing your expertise.
          </p>

          <h3>The Strategic Guest Post Framework</h3>

          <div className="bg-system-green bg-opacity-10 border border-system-green rounded-lg p-6 my-6">
            <h4 className="text-system-green font-semibold mb-4">📝 Guest Post Success Formula</h4>
            
            <div className="space-y-3 text-sm">
              <div><strong>Research:</strong> Identify publications your target audience reads</div>
              <div><strong>Value First:</strong> Create content that serves the host's audience</div>
              <div><strong>Authority Building:</strong> Share unique insights and expertise</div>
              <div><strong>Non-Promotional:</strong> Focus on education, not self-promotion</div>
              <div><strong>Relationship Building:</strong> Maintain long-term publisher relationships</div>
            </div>
          </div>

          <h3>Crafting the Perfect Guest Post Pitch</h3>

          <p>
            Your pitch is the gateway to guest posting opportunities. 
            A well-crafted pitch demonstrates professionalism and increases acceptance rates significantly.
          </p>

          <CodeBlock
            title="Guest Post Pitch Template"
            language="text"
            code={`Subject: Content Contribution - [Specific Topic] for [Publication Name]

Hi [Editor Name],

I've been following [Publication Name] for [specific time/reason] and consistently appreciate your coverage of [specific topic they cover].

I'd like to contribute a comprehensive guide on "[Specific Topic]" that would provide exceptional value to your readers. This piece would cover:

• [Specific valuable point 1]
• [Specific valuable point 2]  
• [Specific valuable point 3]

I bring [relevant credential/experience] to this topic, having [specific achievement or experience]. You can see examples of my work at [link to your best content].

The article would be:
- 2,000+ words of original, non-promotional content
- Include actionable strategies your readers can implement
- Feature original research/data where relevant

Would this type of content be valuable for your audience? I'm happy to send a detailed outline for your review.

Best regards,
[Your Name]
[Your Credentials]
[Portfolio Link]`}
          />

          <h3>Maximizing Guest Post Authority Value</h3>

          <p>
            The author bio section is crucial for establishing authority and driving referral traffic. 
            Here's how to optimize it effectively:
          </p>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-system-green pl-4">
              <h4 className="font-semibold text-system-green">Author Bio Best Practices</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>• Lead with your primary credential and expertise area</li>
                <li>• Include specific achievements or recognitions</li>
                <li>• Link to your most valuable resource, not just homepage</li>
                <li>• Keep it concise but authoritative (40-60 words)</li>
                <li>• Match the tone and style of the publication</li>
              </ul>
            </div>
          </div>

          <p>
            For comprehensive pitch templates and outreach strategies, explore our external resource: 
            <a 
              href="https://backlinko.com/guest-posting-guide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-alert-cyan font-semibold"
            >
              Guest Posting Guide by Backlinko
            </a> for additional insights.
          </p>

          <h3>Content Collaboration Beyond Guest Posts</h3>

          <p>
            Expand your off-page strategy through various content collaboration formats:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div>
              <h4 className="font-semibold text-system-green mb-2">Expert Roundups</h4>
              <p className="text-sm">Participate in industry expert roundups and quote compilations</p>
            </div>
            <div>
              <h4 className="font-semibold text-alert-cyan mb-2">Podcast Interviews</h4>
              <p className="text-sm">Share expertise on relevant industry podcasts with show notes links</p>
            </div>
            <div>
              <h4 className="font-semibold text-system-green mb-2">Co-created Content</h4>
              <p className="text-sm">Partner with other experts on comprehensive guides or research</p>
            </div>
            <div>
              <h4 className="font-semibtml-cyan mb-2">Webinar Partnerships</h4>
              <p className="text-sm">Host joint webinars with industry leaders and publications</p>
            </div>
          </div>
        </section>

        {/* Section 4.4: Backlink Profile Analysis */}
        <section id="backlink-analysis" className="mb-12">
          <h2>4.4: Analyzing Your Backlink Profile (The Audit Process)</h2>

          <p>
            Regular <strong>backlink auditing</strong> is essential for maintaining a healthy link profile 
            and protecting your site from potential penalties. This process involves identifying, 
            analyzing, and taking action on both beneficial and harmful links.
          </p>

          <h3>The Complete Backlink Audit Workflow</h3>

          <div className="bg-obsidian border border-system-green rounded-lg p-6 my-6">
            <h4 className="text-system-green font-semibold mb-4">🔍 Monthly Backlink Audit Checklist</h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-system-green">✓</span>
                <span><strong>Export Complete Link Profile:</strong> Use Google Search Console, Ahrefs, or Semrush</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-system-green">✓</span>
                <span><strong>Analyze Link Quality:</strong> Assess domain authority, relevance, and context</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-system-green">✓</span>
                <span><strong>Identify Toxic Links:</strong> Flag spammy, irrelevant, or low-quality links</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-system-green">✓</span>
                <span><strong>Competitor Analysis:</strong> Study top-performing competitors' link profiles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-system-green">✓</span>
                <span><strong>Disavow Creation:</strong> Compile toxic links for Google disavowal</span>
              </div>
            </div>
          </div>

          <h3>Identifying Toxic and Spammy Links</h3>

          <p>
            Not all links are beneficial. Toxic links can harm your rankings and should be disavowed 
            through Google Search Console. Here are the key warning signs:
          </p>

          <div className="bg-warning-red bg-opacity-10 border border-warning-red rounded-lg p-4 my-6">
            <h4 className="text-warning-red font-semibold mb-2">🚩 Toxic Link Warning Signs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-1">Domain Factors</h5>
                <ul className="space-y-1">
                  <li>• Domain Authority below 10</li>
                  <li>• No organic traffic</li>
                  <li>• Foreign language (unrelated to your market)</li>
                  <li>• Adult, gambling, or pharmacy content</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Link Context</h5>
                <ul className="space-y-1">
                  <li>• Footer or sidebar link farms</li>
                  <li>• Irrelevant anchor text</li>
                  <li>• Multiple links from same domain</li>
                  <li>• Links from hacked or compromised sites</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Google Disavow File Creation</h3>

          <p>
            When you identify toxic links that you cannot remove manually, 
            create a disavow file to tell Google to ignore these links when assessing your site.
          </p>

          <CodeBlock
            title="Disavow File Template"
            language="text"
            code={`# Disavow file for example.com
# Generated on: [Date]
# 
# Individual URLs to disavow:
https://spammy-site.com/page-with-link
https://low-quality-directory.net/listing
https://hacked-website.org/malicious-page

# Entire domains to disavow:
domain:toxic-link-farm.com
domain:spam-directory.info
domain:irrelevant-foreign-site.xyz

# Note: Only disavow links you cannot remove through outreach
# Upload this file to Google Search Console > Disavow Links tool`}
          />

          <div className="bg-warning-red bg-opacity-10 border border-warning-red rounded-lg p-4 my-4">
            <h4 className="text-warning-red font-semibold mb-2">⚠️ Disavow File Warning</h4>
            <p className="text-sm">
              Use the disavow tool cautiously. Incorrectly disavowing good links can harm your rankings. 
              Only disavow links after attempting manual removal and confirming they are truly harmful.
            </p>
          </div>

          <h3>Competitor Backlink Analysis</h3>

          <p>
            Analyzing your competitors' most successful backlinks reveals opportunities 
            for your own link building campaigns. Focus on their highest-authority, 
            most relevant links that you could potentially replicate.
          </p>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-alert-cyan pl-4">
              <h4 className="font-semibold text-alert-cyan">Competitor Analysis Framework</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>• Identify your top 5 ranking competitors</li>
                <li>• Export their backlink profiles using Ahrefs or Semrush</li>
                <li>• Filter for high-authority domains (DA 40+)</li>
                <li>• Analyze their most linked-to content pieces</li>
                <li>• Identify link building patterns and opportunities</li>
              </ul>
            </div>
          </div>

          <p>
            For detailed Google Search Console setup and backlink monitoring, 
            reference our <Link href="/technical-seo#search-console-setup" className="text-system-green font-semibold">
              Technical SEO section
            </Link> for complete instructions.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h3>Further Reading</h3>
          <ul>
            <li>
              <a className="text-alert-cyan font-semibold" href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google Search Essentials — Spam Policies</a>
            </li>
            <li>
              <a className="text-alert-cyan font-semibold" href="https://developers.google.com/search/docs/fundamentals/seo-links" target="_blank" rel="noopener noreferrer">Google — Links and Link Best Practices</a>
            </li>
            <li>
              <a className="text-alert-cyan font-semibold" href="https://moz.com/learn/seo/link-building" target="_blank" rel="noopener noreferrer">Moz — Beginner’s Guide to Link Building</a>
            </li>
            <li>
              <a className="text-alert-cyan font-semibold" href="https://ahrefs.com/blog/link-building/" target="_blank" rel="noopener noreferrer">Ahrefs — Link Building for SEO</a>
            </li>
            <li>
              <a className="text-alert-cyan font-semibold" href="https://searchengineland.com/library/link-building" target="_blank" rel="noopener noreferrer">Search Engine Land — Link Building Library</a>
            </li>
            <li>
              <a className="text-alert-cyan font-semibold" href="https://developers.google.com/search/docs/advanced/guidelines/link-schemes" target="_blank" rel="noopener noreferrer">Google — Link Schemes (Deprecated path redirects)</a>
            </li>
          </ul>
          <h3 className="mt-6">Related Guides</h3>
          <ul>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Master Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/knowledge-base/checklists/linking-audit">Internal Linking Audit Checklist</Link></li>
            <li><Link className="text-system-green font-semibold" href="/ultimate-seo-guide">Ultimate SEO Guide</Link></li>
            <li><Link className="text-system-green font-semibold" href="/glossary">SEO Glossary</Link></li>
          </ul>
        </section>

        <KeyTakeaways 
          items={[
            'Run a backlink audit at least once per quarter to maintain a clean profile',
            'Focus 80% of your effort on securing links from relevant sites with high traffic',
            'Monitor unlinked brand mentions weekly and prioritize outreach to convert them into links', 
            'Guest posting success depends on providing genuine value, not self-promotion',
            'Quality and relevance matter more than quantity in modern link building',
            'Use the disavow tool only for confirmed toxic links that cannot be manually removed',
            'Competitor backlink analysis reveals untapped opportunities for your campaigns',
            'Digital PR and relationship building create sustainable, long-term link acquisition'
          ]}
        />

        {/* Consultation CTA */}
  <ConsultationCTA />
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Ultimate Off-Page SEO: Mastering Link Building, E-A-T, and Digital PR for Global Authority',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' }
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Off-Page SEO', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/off-page-seo` }
        ]
      }} />
    </div>
  )
}