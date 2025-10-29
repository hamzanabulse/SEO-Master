export default function Head() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${base}/certification`
  return (
    <>
      <title>SEO Certification — Download & Share | SEO MASTER HUB</title>
      <meta name="description" content="Download your SEO certification and share it with your network. Includes unique certificate ID and QR verification." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="SEO Certification — Download & Share" />
      <meta property="og:description" content="Get your SEO certification, complete with unique ID and QR verification." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/opengraph-image`} />
    </>
  )
}
