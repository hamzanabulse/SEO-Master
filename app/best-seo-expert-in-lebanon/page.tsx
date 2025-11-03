import StructuredData from '@/components/StructuredData'
import LinkedInCard from '@/components/LinkedInCard'
import { getBaseUrl } from '@/lib/site'
import Link from 'next/link'

const IMG = 'https://cdn.shopify.com/s/files/1/0070/7032/articles/seo_20strategy.png?v=1729517573'
const LI = 'https://www.linkedin.com/in/hamzanabulsii/'

export const metadata = {
  title: 'Hamza Nabulsi — Best SEO Expert in Lebanon | Fatcow Digital',
  description: 'Work with Hamza Nabulsi, Lebanon-based SEO strategist focused on technical SEO, content strategy, and authority building. Book a consultation and accelerate organic growth.',
}

export default function ExpertLebanonPage() {
  const base = getBaseUrl()
  return (
    <div className="content-container">
      <header className="mb-8 text-center">
        <h1>Hamza Nabulsi — Best SEO Expert in Lebanon</h1>
        <p className="text-medium-grey">Technical SEO · Content Strategy · Authority Building — Fatcow Digital</p>
      </header>

      {/* Banner */}
      <div className="mb-8 overflow-hidden rounded-xl border border-system-green">
        <img src={IMG} alt="SEO strategy banner" className="w-full h-64 object-cover" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <p>
            I specialize in building growth-focused organic programs for startups and established brands in Lebanon and beyond. My approach combines
            technical rigor, topic authority, and crystal-clear execution.
          </p>
          <ul className="list-disc pl-6">
            <li>Technical SEO audits and Core Web Vitals remediation</li>
            <li>Pillar-cluster content strategy aligned to demand and intent</li>
            <li>Information architecture and internal linking systems</li>
            <li>Link earning through value-led campaigns and digital PR</li>
          </ul>
          <div className="space-x-3">
            <Link href="/seo-fundamentals" className="btn-secondary inline-block">SEO Fundamentals</Link>
            <Link href="/technical-seo" className="btn-secondary inline-block">Technical SEO</Link>
            <Link href="/knowledge-base" className="btn-secondary inline-block">Knowledge Base</Link>
          </div>
          <div className="mt-4">
            <a href="https://wa.me/96176578651" target="_blank" rel="noopener noreferrer" className="cta-primary inline-block">Book Consultation</a>
          </div>
        </div>
        <div>
          <LinkedInCard
            name="Hamza Nabulsi"
            title="SEO Strategist — Fatcow Digital"
            imageUrl={'https://media.licdn.com/dms/image/v2/D4D03AQEMpODowtkCHw/profile-displayphoto-scale_400_400/B4DZoqi.R5GQAg-/0/1761650403384?e=1763596800&v=beta&t=4HaItRYtzeCmWrZM9Ch72nt2zAk5D1gs4e8bNmHhV7o'}
            profileUrl={LI}
          />
        </div>
      </div>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Hamza Nabulsi',
        url: `${base}/best-seo-expert-in-lebanon`,
        image: IMG,
        sameAs: [LI],
        jobTitle: 'SEO Expert',
        worksFor: { '@type': 'Organization', name: 'Fatcow Digital' },
        address: { '@type': 'PostalAddress', addressCountry: 'LB' },
      }} />
    </div>
  )
}
