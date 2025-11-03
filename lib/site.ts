export function getBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined
  // Default to the primary Vercel alias to ensure sitemap/robots point to the intended host
  // Prefer explicit env, then the stable alias, and only fall back to deployment-specific VERCEL_URL
  return fromEnv || 'https://seo-master-alpha.vercel.app' || vercel
}
