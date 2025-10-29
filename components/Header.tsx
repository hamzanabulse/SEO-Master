import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-dark-grey/70 bg-obsidian/90 backdrop-blur-xs sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold text-light-grey">
          <img src="/logo.svg" alt="SEO MASTER HUB logo" className="w-8 h-8 rounded" />
          <span className="tracking-tight">SEO MASTER HUB</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link className="hover:underline" href="/seo-fundamentals">Fundamentals</Link>
          <Link className="hover:underline" href="/technical-seo">Technical</Link>
          <Link className="hover:underline" href="/on-page-seo">On-Page</Link>
          <Link className="hover:underline" href="/off-page-seo">Off-Page</Link>
          <Link className="hover:underline" href="/data-analysis">Analytics</Link>
          <Link className="hover:underline" href="/advanced-seo">Advanced</Link>
          <Link className="hover:underline" href="/knowledge-base">KB</Link>
          <Link className="hover:underline" href="/glossary">Glossary</Link>
          <Link href="/quiz" className="ml-2 inline-flex items-center gap-2 bg-system-green text-obsidian px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Get Certified
          </Link>
        </nav>
      </div>
    </header>
  )
}
