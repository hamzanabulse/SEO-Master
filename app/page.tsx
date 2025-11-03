import Link from 'next/link'
import { ArrowRight, Target, TrendingUp, Zap, BarChart3, Globe, Award } from 'lucide-react'
const BANNER_IMG = 'https://cdn.shopify.com/s/files/1/0070/7032/articles/seo_20strategy.png?v=1729517573'

export default function HomePage() {
  return (
    <div className="content-container">
      {/* Hamza Banner */}
      <div className="mb-6 overflow-hidden rounded-xl border border-system-green">
        <img src={BANNER_IMG} alt="Hamza Nabulsi banner" className="w-full h-56 object-cover" />
      </div>
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          SEO MASTER HUB
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-medium-grey max-w-3xl mx-auto">
          The Ultimate Authority Guide for <strong>Search Engine Optimization</strong>. 
          Master Technical SEO, Content Strategy, and Authority Building with our comprehensive, mobile-first approach.
        </p>
        <div className="mb-12">
          <Link 
            href="/seo-fundamentals" 
            className="cta-primary inline-flex items-center gap-2 text-lg"
          >
            Start Your SEO Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Core Pillars Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Six Pillars of <span className="text-system-green">SEO Mastery</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PillarCard
            icon={<Target className="w-8 h-8" />}
            title="SEO Fundamentals & Glossary"
            description="Master the foundation of SEO with E-E-A-T principles, search engine mechanics, and essential terminology."
            href="/seo-fundamentals"
            color="border-system-green"
          />
          
          <PillarCard
            icon={<Zap className="w-8 h-8" />}
            title="Technical SEO Mastery"
            description="Optimize Core Web Vitals, site speed, schema markup, and technical architecture for maximum performance."
            href="/technical-seo"
            color="border-alert-cyan"
          />
          
          <PillarCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="On-Page SEO & Content Strategy"
            description="Perfect keyword intent, title optimization, and content quality for search engine dominance."
            href="/on-page-seo"
            color="border-system-green"
          />
          
          <PillarCard
            icon={<Globe className="w-8 h-8" />}
            title="Off-Page SEO & Authority Building"
            description="Master link building tactics, digital PR strategies, and reputation management techniques."
            href="/off-page-seo"
            color="border-alert-cyan"
          />
          
          <PillarCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Data Analysis & Performance Tracking"
            description="Leverage Google Analytics, Search Console, and advanced KPI reporting for data-driven decisions."
            href="/data-analysis"
            color="border-system-green"
          />
          
          <PillarCard
            icon={<Award className="w-8 h-8" />}
            title="Advanced & Specialized SEO"
            description="Excel in Local SEO, Video SEO, E-commerce optimization, and industry-specific strategies."
            href="/advanced-seo"
            color="border-alert-cyan"
          />
        </div>
      </section>

      {/* Authority Statement */}
      <section className="bg-dark-grey border border-system-green rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Built by SEO Authority, For SEO Professionals
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          This comprehensive guide follows a rigid <strong>Pillar-Cluster content model</strong> designed to build 
          topical authority. Every section is crafted for maximum scannability, mobile-first interaction, 
          and immediate actionability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-system-green mb-2">6</div>
            <div className="text-sm">Core Pillars</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-system-green mb-2">100+</div>
            <div className="text-sm">SEO Strategies</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-system-green mb-2">Mobile</div>
            <div className="text-sm">First Design</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Dominate Search Results?
        </h2>
        <p className="text-lg mb-8 text-medium-grey max-w-2xl mx-auto">
          Get direct access to proven SEO strategies that drive real results. 
          Start with our comprehensive fundamentals guide.
        </p>
        <Link 
          href="/seo-fundamentals" 
          className="cta-primary inline-flex items-center gap-2"
        >
          Begin SEO Mastery
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* About & Expert CTAs */}
      <section className="grid gap-4 md:grid-cols-2 mb-12">
        <Link href="/about" className="group">
          <div className="bg-dark-grey border border-system-green rounded-lg p-6 h-full">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-system-green">About Hamza Nabulsi</h3>
            <p className="text-medium-grey mb-3">SEO strategist and creator of SEO MASTER HUB.</p>
            <span className="cta-link">Learn more →</span>
          </div>
        </Link>
        <Link href="/best-seo-expert-in-lebanon" className="group">
          <div className="bg-dark-grey border border-alert-cyan rounded-lg p-6 h-full">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-system-green">Best SEO Expert in Lebanon</h3>
            <p className="text-medium-grey mb-3">Work with Hamza — Technical SEO, content strategy, and authority building.</p>
            <span className="cta-link">Explore services →</span>
          </div>
        </Link>
      </section>
    </div>
  )
}

interface PillarCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  color: string
}

function PillarCard({ icon, title, description, href, color }: PillarCardProps) {
  return (
    <Link href={href} className="group">
      <div className={`bg-dark-grey border-2 ${color} rounded-lg p-6 h-full transition-all duration-300 hover:bg-opacity-80 hover:scale-105 hover:shadow-lg hover:shadow-system-green/20`}>
        <div className="text-system-green mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-system-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-medium-grey leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-system-green font-medium">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  )
}