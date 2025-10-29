import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-system-green mb-6">
          <Search className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-medium-grey mb-8">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/" className="inline-flex items-center gap-2 bg-system-green text-obsidian px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            <Home className="w-5 h-5" />
            Go to Home
          </Link>
          <Link href="/knowledge-base" className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Browse Knowledge Base
          </Link>
        </div>
      </div>
    </div>
  )
}
