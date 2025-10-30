import { getBaseUrl } from '@/lib/site'

export default function Head() {
  const base = getBaseUrl()
  const url = `${base}/verify`
  return (
    <>
      <title>Certificate Verification | SEO MASTER HUB</title>
      <meta name="description" content="Verify the authenticity of an SEO Master Hub certificate using certificate ID and score." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Certificate Verification | SEO MASTER HUB" />
      <meta property="og:description" content="Verify the authenticity of an SEO Master Hub certificate." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/opengraph-image`} />
    </>
  )
}
