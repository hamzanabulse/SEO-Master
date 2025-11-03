export function getBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  // Default to the primary Vercel alias to ensure sitemap/robots point to the intended host.
  // We intentionally avoid using VERCEL_URL by default because it often points to deployment-specific hosts.
  return fromEnv || 'https://seo-master-alpha.vercel.app'
}
