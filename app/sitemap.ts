import type { MetadataRoute } from 'next'
import { getBaseUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl()
  const routes = [
    '',
    '/about',
    '/best-seo-expert-in-lebanon',
    '/seo-fundamentals',
    '/technical-seo',
    '/on-page-seo',
    '/off-page-seo',
    '/data-analysis',
    '/advanced-seo',
    '/glossary',
    '/ultimate-seo-guide',
    '/faq',
    '/quiz',
    '/certification',
    '/verify',
    '/knowledge-base',
    '/knowledge-base/tutorials/gsc-setup',
    '/knowledge-base/tutorials/cwv-optimization',
    '/knowledge-base/tutorials/schema-implementation',
    '/knowledge-base/tutorials/mobile-seo',
    '/knowledge-base/articles/keyword-research-guide',
    '/knowledge-base/articles/google-ai-overviews',
    '/knowledge-base/articles/what-is-seo',
    '/knowledge-base/checklists/linking-audit',
    '/knowledge-base/checklists/seo-site-audit',
    '/knowledge-base/checklists/cwv-field-testing',
  ]

  const now = new Date()
  return routes.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}
