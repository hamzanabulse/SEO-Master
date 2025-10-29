export default function Head() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${base}/faq`
  const title = 'FAQ — SEO MASTER HUB | Hamza Nabulsi'
  const description = 'Frequently Asked Questions about SEO Master Hub, SEO best practices, technical SEO, link building and consultations by Hamza Nabulsi.'
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
