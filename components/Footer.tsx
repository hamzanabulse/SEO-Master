import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-dark-grey bg-obsidian mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3 text-light-grey">SEO MASTER HUB</h4>
          <p className="text-medium-grey">Mobile-first guides to master Technical, On-Page, Off-Page, and Analytics.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Explore</h5>
          <ul className="space-y-1">
            <li><Link className="hover:underline" href="/seo-fundamentals">SEO Fundamentals</Link></li>
            <li><Link className="hover:underline" href="/technical-seo">Technical SEO</Link></li>
            <li><Link className="hover:underline" href="/on-page-seo">On-Page SEO</Link></li>
            <li><Link className="hover:underline" href="/off-page-seo">Off-Page SEO</Link></li>
            <li><Link className="hover:underline" href="/data-analysis">Data Analysis</Link></li>
            <li><Link className="hover:underline" href="/advanced-seo">Advanced SEO</Link></li>
            <li><Link className="hover:underline" href="/knowledge-base">Knowledge Base</Link></li>
            <li><Link className="hover:underline" href="/glossary">Glossary</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Certification</h5>
          <ul className="space-y-1">
            <li><Link className="hover:underline" href="/quiz">Take the SEO Quiz</Link></li>
            <li><Link className="hover:underline" href="/certification">View Certificate</Link></li>
            <li><Link className="hover:underline" href="/verify">Verify a Certificate</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <ul className="space-y-1">
            <li>
              <a className="hover:underline" href="https://wa.me/212633056414" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li>
              <a className="hover:underline" href="https://www.linkedin.com/in/hamzanabulsii/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dark-grey py-3 text-center text-xs text-medium-grey">
        © {new Date().getFullYear()} SEO MASTER HUB — Built by Hamza Nabulsi
      </div>
    </footer>
  )
}
