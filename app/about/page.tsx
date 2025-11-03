import StructuredData from '@/components/StructuredData'
import LinkedInCard from '@/components/LinkedInCard'
import { getBaseUrl } from '@/lib/site'
import Link from 'next/link'

const IMG = 'https://media.licdn.com/dms/image/v2/D4D03AQEMpODowtkCHw/profile-displayphoto-scale_400_400/B4DZoqi.R5GQAg-/0/1761650403384?e=1763596800&v=beta&t=4HaItRYtzeCmWrZM9Ch72nt2zAk5D1gs4e8bNmHhV7o'
const LI = 'https://www.linkedin.com/in/hamzanabulsii/'

export const metadata = {
  title: 'About — Hamza Nabulsi | SEO MASTER HUB',
  description: 'About Hamza Nabulsi, SEO strategist and creator of SEO MASTER HUB. Learn about expertise, approach, and how to work together.',
}

export default function AboutPage() {
  const base = getBaseUrl()
  return (
    <div className="content-container">
      <header className="mb-8">
        <h1>About Hamza Nabulsi</h1>
        <p className="text-medium-grey">SEO strategist and creator of SEO MASTER HUB</p>
      </header>

      {/* Banner */}
      <div className="mb-8 overflow-hidden rounded-xl border border-system-green">
        <img src={IMG} alt="Hamza Nabulsi banner" className="w-full h-64 object-cover" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <p>
            I help teams build durable organic growth engines. My philosophy is simple: align
            search intent, exceptional content, and rock-solid technical foundations. This site
            is a practical, no-fluff companion for SEO practitioners.
          </p>
          <p>
            New to SEO? Start with <Link className="font-semibold text-system-green" href="/knowledge-base/articles/what-is-seo">What is SEO</Link> and our
            {' '}<Link className="font-semibold text-system-green" href="/seo-fundamentals">Fundamentals guide</Link>. Already shipping content? Level up with
            {' '}<Link className="font-semibold text-system-green" href="/technical-seo">Technical SEO</Link> and the
            {' '}<Link className="font-semibold text-system-green" href="/knowledge-base/checklists/seo-site-audit">SEO Site Audit Checklist</Link>.
          </p>
          <p>
            Ready to validate your skills? Take the <Link className="font-semibold text-system-green" href="/quiz">SEO quiz</Link>,
            {' '}then grab your <Link className="font-semibold text-system-green" href="/certification">certificate</Link> with QR verification.
          </p>
        </div>
        <div>
          <LinkedInCard
            name="Hamza Nabulsi"
            title="SEO Strategist — Fatcow Digital"
            imageUrl={IMG}
            profileUrl={LI}
          />
        </div>
      </div>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Hamza Nabulsi',
        url: `${base}/about`,
        image: IMG,
        sameAs: [LI],
        jobTitle: 'SEO Strategist',
        worksFor: { '@type': 'Organization', name: 'Fatcow Digital' },
      }} />
    </div>
  )
}
