export function getBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined
  return fromEnv || vercel || 'http://localhost:3000'
}
