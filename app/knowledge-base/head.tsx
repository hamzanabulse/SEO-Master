import { getBaseUrl } from '@/lib/site'

export default function Head() {
  const base = getBaseUrl()
  const url = `${base}/knowledge-base`
  const title = 'Knowledge Base — SEO Tutorials & How-Tos | SEO MASTER HUB'
  const description = 'Step-by-step SEO tutorials covering Technical SEO, On-Page optimization, Off-Page strategies, analytics, and advanced topics.'
  const ogImage = `${url}/opengraph-image`
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}
