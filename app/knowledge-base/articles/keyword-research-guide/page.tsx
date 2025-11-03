import Link from 'next/link'
import TableOfContents from '@/components/TableOfContents'
import KeyTakeaways from '@/components/KeyTakeaways'
import ConsultationCTA from '@/components/ConsultationCTA'
import CodeBlock from '@/components/CodeBlock'
import StructuredData from '@/components/StructuredData'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import { getBaseUrl } from '@/lib/site'

export const metadata = {
  title: 'Complete Keyword Research Guide — Find & Target Winning Keywords | SEO MASTER HUB',
  description: 'Master keyword research with intent mapping, competitive analysis, and strategic prioritization. Tools, frameworks, and actionable workflows.',
  authors: [{ name: 'Hamza Nabulsi' }],
}

const tocItems = [
  { id: 'intro', title: 'Keyword Research Fundamentals' },
  { id: 'intent', title: 'Understanding Search Intent' },
  { id: 'tools', title: 'Essential Research Tools' },
  { id: 'process', title: 'Step-by-Step Process' },
  { id: 'competitive', title: 'Competitive Analysis' },
  { id: 'prioritization', title: 'Keyword Prioritization Framework' },
  { id: 'mapping', title: 'Content Mapping' },
  { id: 'tracking', title: 'Tracking & Refinement' },
]

export default function KeywordResearchGuide() {
  const base = getBaseUrl()
  return (
    <div className="content-container">
      <BreadcrumbNav items={[
        { href: '/', label: 'Home' },
        { href: '/knowledge-base', label: 'Knowledge Base' },
        { href: '/knowledge-base/articles/keyword-research-guide', label: 'Keyword Research' },
      ]} />

      <header className="mb-6">
        <h1>Complete Keyword Research Guide</h1>
        <p className="text-medium-grey">Find and target keywords that drive qualified traffic, conversions, and sustainable growth with a strategic, intent-first approach.</p>
      </header>

      <TableOfContents items={tocItems} />

      <article className="prose max-w-none">
        <section id="intro" className="mb-10">
          <h2>Keyword Research Fundamentals</h2>
          <p><strong>Keyword research</strong> is the foundation of every successful SEO strategy. It's not about finding the highest-volume keywords—it's about discovering what your audience searches for and aligning content with their intent.</p>

          <div className="bg-system-green bg-opacity-10 border border-system-green rounded-lg p-4 my-6">
            <h4 className="text-system-green font-semibold mb-2">Why Keyword Research Matters</h4>
            <ul className="text-sm space-y-1">
              <li>• Understand your audience's language and pain points</li>
              <li>• Discover untapped content opportunities</li>
              <li>• Prioritize efforts based on business value</li>
              <li>• Align content with actual search demand</li>
              <li>• Outmaneuver competitors in SERPs</li>
            </ul>
          </div>

          <p>Modern keyword research focuses on <strong>topics and intent</strong> rather than individual keywords. Think in terms of content clusters around pillar themes.</p>
        </section>

        <section id="intent" className="mb-10">
          <h2>Understanding Search Intent</h2>
          <p>Every keyword reveals what the searcher wants to accomplish. Map keywords to these four intent types:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-dark-grey border border-system-green rounded-lg p-4">
              <h3 className="text-system-green font-semibold mb-2">1. Informational Intent</h3>
              <p className="text-sm mb-2"><strong>Goal:</strong> Learn or understand something</p>
              <p className="text-sm mb-2"><strong>Examples:</strong></p>
              <ul className="text-sm space-y-1">
                <li>• "how to optimize images for SEO"</li>
                <li>• "what is domain authority"</li>
                <li>• "SEO best practices 2025"</li>
              </ul>
              <p className="text-sm mt-2"><strong>Content type:</strong> Guides, tutorials, explainers</p>
            </div>

            <div className="bg-dark-grey border border-alert-cyan rounded-lg p-4">
              <h3 className="text-alert-cyan font-semibold mb-2">2. Navigational Intent</h3>
              <p className="text-sm mb-2"><strong>Goal:</strong> Find specific brand or website</p>
              <p className="text-sm mb-2"><strong>Examples:</strong></p>
              <ul className="text-sm space-y-1">
                <li>• "Google Search Console login"</li>
                <li>• "Ahrefs pricing"</li>
                <li>• "Moz pro"</li>
              </ul>
              <p className="text-sm mt-2"><strong>Content type:</strong> Brand pages, product pages</p>
            </div>

            <div className="bg-dark-grey border border-system-green rounded-lg p-4">
              <h3 className="text-system-green font-semibold mb-2">3. Transactional Intent</h3>
              <p className="text-sm mb-2"><strong>Goal:</strong> Purchase or take action</p>
              <p className="text-sm mb-2"><strong>Examples:</strong></p>
              <ul className="text-sm space-y-1">
                <li>• "buy SEO audit service"</li>
                <li>• "hire SEO consultant"</li>
                <li>• "SEO tools discount code"</li>
              </ul>
              <p className="text-sm mt-2"><strong>Content type:</strong> Product/service pages, landing pages</p>
            </div>

            <div className="bg-dark-grey border border-alert-cyan rounded-lg p-4">
              <h3 className="text-alert-cyan font-semibold mb-2">4. Commercial Investigation</h3>
              <p className="text-sm mb-2"><strong>Goal:</strong> Compare options before buying</p>
              <p className="text-sm mb-2"><strong>Examples:</strong></p>
              <ul className="text-sm space-y-1">
                <li>• "best SEO tools 2025"</li>
                <li>• "Semrush vs Ahrefs"</li>
                <li>• "top SEO agencies reviews"</li>
              </ul>
              <p className="text-sm mt-2"><strong>Content type:</strong> Comparisons, reviews, roundups</p>
            </div>
          </div>

          <p>Always analyze SERPs manually to confirm intent. If the top 10 results are all guides, Google considers it informational—don't try to rank a product page.</p>
        </section>

        <section id="tools" className="mb-10">
          <h2>Essential Research Tools</h2>

          <h3>Free Tools</h3>
          <ul>
            <li><strong>Google Keyword Planner:</strong> Search volume and competition data</li>
            <li><strong>Google Search Console:</strong> Keywords you already rank for</li>
            <li><strong>Google Trends:</strong> Trending topics and seasonal patterns</li>
            <li><strong>AnswerThePublic:</strong> Question-based keywords</li>
            <li><strong>Google autocomplete & "People also ask":</strong> Related queries</li>
          </ul>

          <h3>Premium Tools (Recommended)</h3>
          <ul>
            <li><strong>Ahrefs:</strong> Best for backlink + keyword analysis; Keywords Explorer is powerful</li>
            <li><strong>Semrush:</strong> All-in-one platform; great for competitive intelligence</li>
            <li><strong>Moz Keyword Explorer:</strong> User-friendly; solid for beginners</li>
          </ul>

          <p>Start with free tools, invest in premium when scaling or in competitive niches. See our <Link className="font-semibold text-system-green" href="/faq#tools-faq">Tools FAQ</Link> for detailed recommendations.</p>
        </section>

        <section id="process" className="mb-10">
          <h2>Step-by-Step Keyword Research Process</h2>

          <div className="bg-obsidian border border-system-green rounded-lg p-6 my-6">
            <h4 className="text-system-green font-semibold mb-4">8-Step Keyword Research Workflow</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">1</span>
                <div>
                  <h5 className="font-semibold">Define Your Goals</h5>
                  <p className="text-sm text-medium-grey">Identify business objectives: leads, sales, awareness, traffic</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">2</span>
                <div>
                  <h5 className="font-semibold">List Seed Keywords</h5>
                  <p className="text-sm text-medium-grey">Brainstorm 10–20 core topics related to your business</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">3</span>
                <div>
                  <h5 className="font-semibold">Expand with Tools</h5>
                  <p className="text-sm text-medium-grey">Use Ahrefs/Semrush to find related keywords, questions, and variations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">4</span>
                <div>
                  <h5 className="font-semibold">Analyze Search Intent</h5>
                  <p className="text-sm text-medium-grey">Manually review SERPs for each keyword to confirm intent type</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">5</span>
                <div>
                  <h5 className="font-semibold">Assess Competition</h5>
                  <p className="text-sm text-medium-grey">Check keyword difficulty (KD) and domain authority of ranking pages</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">6</span>
                <div>
                  <h5 className="font-semibold">Evaluate Business Value</h5>
                  <p className="text-sm text-medium-grey">Prioritize keywords aligned with revenue, conversions, or strategic goals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">7</span>
                <div>
                  <h5 className="font-semibold">Group into Topics</h5>
                  <p className="text-sm text-medium-grey">Cluster related keywords around pillar themes for content planning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-system-green text-obsidian rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">8</span>
                <div>
                  <h5 className="font-semibold">Create Content Plan</h5>
                  <p className="text-sm text-medium-grey">Map keywords to existing/new pages; prioritize by opportunity score</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="competitive" className="mb-10">
          <h2>Competitive Keyword Analysis</h2>
          <p>Your competitors reveal untapped opportunities. Analyze their keyword strategies to find gaps.</p>

          <h3>Competitive Analysis Framework</h3>
          <ol>
            <li><strong>Identify top competitors:</strong> Search your seed keywords; note domains consistently ranking</li>
            <li><strong>Export their keywords:</strong> Use Ahrefs/Semrush "Competing Domains" or "Organic Research"</li>
            <li><strong>Find keyword gaps:</strong> Keywords they rank for that you don't</li>
            <li><strong>Analyze their top pages:</strong> What content formats are winning?</li>
            <li><strong>Steal their best ideas:</strong> Create superior content targeting the same keywords</li>
          </ol>

          <CodeBlock
            title="Keyword Gap Analysis Spreadsheet Columns"
            language="text"
            code={`Keyword | Search Volume | Your Rank | Competitor A Rank | Competitor B Rank | Intent | Priority`}
          />

          <p className="mt-4">Focus on keywords where competitors rank in positions 1–10 and you're absent or below position 20.</p>
        </section>

        <section id="prioritization" className="mb-10">
          <h2>Keyword Prioritization Framework</h2>
          <p>You can't target every keyword at once. Prioritize using this scoring system:</p>

          <div className="bg-dark-grey border border-system-green rounded-lg p-4 my-6">
            <h4 className="font-semibold mb-3">Priority Score Formula</h4>
            <p className="text-sm mb-4">Score = (Search Volume × Business Value × Conversion Potential) / (Keyword Difficulty + Content Required)</p>
            
            <div className="space-y-3 text-sm">
              <div>
                <strong>Search Volume (1–10):</strong> Higher volume = higher score
              </div>
              <div>
                <strong>Business Value (1–10):</strong> How aligned with revenue goals?
              </div>
              <div>
                <strong>Conversion Potential (1–10):</strong> How qualified is the traffic?
              </div>
              <div>
                <strong>Keyword Difficulty (1–100):</strong> Ahrefs/Semrush KD score
              </div>
              <div>
                <strong>Content Required (1–10):</strong> Effort to create competitive content
              </div>
            </div>
          </div>

          <h3>Quick Win Strategy</h3>
          <p>Target a mix of:</p>
          <ul>
            <li><strong>Quick wins:</strong> Low difficulty, decent volume, high intent (build momentum)</li>
            <li><strong>Long-tail gems:</strong> Low volume, low difficulty, high conversion (easy rankings)</li>
            <li><strong>Strategic targets:</strong> High volume, medium difficulty, aligned with growth (long-term)</li>
          </ul>
        </section>

        <section id="mapping" className="mb-10">
          <h2>Content Mapping Strategy</h2>
          <p>Once prioritized, map keywords to content:</p>

          <h3>Pillar + Cluster Model</h3>
          <ul>
            <li><strong>Pillar page:</strong> Broad keyword (e.g., "SEO guide") with 3,000+ words covering topic comprehensively</li>
            <li><strong>Cluster pages:</strong> Specific long-tail keywords (e.g., "on-page SEO checklist") with 1,500–2,000 words</li>
            <li><strong>Internal linking:</strong> Cluster pages link to pillar; pillar links to all clusters</li>
          </ul>

          <p>See our <Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link> and <Link className="font-semibold text-system-green" href="/on-page-seo">On-Page SEO</Link> pillars for implementation examples.</p>

          <h3>One Page, One Primary Keyword</h3>
          <p>Avoid keyword cannibalization. Assign one primary keyword per page, but naturally include related terms and synonyms.</p>

          <CodeBlock
            title="Content Mapping Template"
            language="text"
            code={`URL | Primary Keyword | Secondary Keywords | Intent | Content Type | Status | Priority
/seo-guide | SEO guide | SEO basics, SEO tutorial | Informational | Pillar | Published | High
/on-page-seo-checklist | on-page SEO checklist | on-page optimization | Informational | Cluster | Planned | Medium`}
          />
        </section>

        <section id="tracking" className="mb-10">
          <h2>Tracking & Continuous Refinement</h2>
          <p>Keyword research is ongoing, not a one-time project.</p>

          <h3>Monthly Tracking Workflow</h3>
          <ol>
            <li><strong>Monitor rankings:</strong> Track position changes for target keywords</li>
            <li><strong>Review GSC data:</strong> Find new keywords you're ranking for organically</li>
            <li><strong>Update content:</strong> Refresh pages losing rankings; expand thin content</li>
            <li><strong>Discover new opportunities:</strong> Quarterly competitive gap analysis</li>
            <li><strong>Retire low performers:</strong> Consolidate or noindex pages not gaining traction</li>
          </ol>

          <p>Use <Link className="font-semibold text-system-green" href="/data-analysis">Data Analysis</Link> dashboards to track organic sessions, CTR, and conversions by keyword segment.</p>

          <h3>Seasonal & Trending Keywords</h3>
          <p>Use Google Trends to identify:</p>
          <ul>
            <li>Seasonal spikes (prepare content 2–3 months early)</li>
            <li>Rising trends (capitalize on emerging topics)</li>
            <li>Geographic variations (localize content)</li>
          </ul>
        </section>

        <KeyTakeaways items={[
          'Prioritize search intent over search volume',
          'Start with seed keywords, expand with tools, cluster into topics',
          'Analyze competitors to find keyword gaps and opportunities',
          'Use a priority score to focus on high-value, winnable keywords',
          'Map one primary keyword per page; build pillar + cluster content',
          'Track rankings monthly and refine based on GSC data',
          'Mix quick wins (low difficulty) with strategic targets (high value)',
        ]} />

        <ConsultationCTA />
      </article>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Complete Keyword Research Guide — Find & Target Winning Keywords',
        'author': { '@type': 'Person', 'name': 'Hamza Nabulsi' },
        'datePublished': '2025-11-03T00:00:00.000Z',
        'dateModified': '2025-11-03T00:00:00.000Z',
        'image': [`${base}/knowledge-base/opengraph-image`],
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${base}/knowledge-base` },
          { '@type': 'ListItem', position: 3, name: 'Keyword Research', item: `${base}/knowledge-base/articles/keyword-research-guide` },
        ],
      }} />
    </div>
  )
}
