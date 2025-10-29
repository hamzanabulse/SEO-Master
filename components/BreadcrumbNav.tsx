import Link from 'next/link'

export type Crumb = { href: string; label: string }

export default function BreadcrumbNav({ items }: { items: Crumb[] }) {
  if (!items || items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-medium-grey mb-4">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span className="opacity-70">›</span>}
            {i === items.length - 1 ? (
              <span className="text-light-grey font-medium">{c.label}</span>
            ) : (
              <Link className="hover:underline text-system-green" href={c.href}>{c.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
