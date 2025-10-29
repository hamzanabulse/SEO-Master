export default function Head() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${base}/quiz`
  return (
    <>
      <title>SEO Certification Quiz | SEO MASTER HUB</title>
      <meta name="description" content="Test your SEO knowledge with 20 questions across Technical, On-Page, Off-Page, Analytics, and Mobile. Score 70%+ to earn your certificate." />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="SEO Certification Quiz | SEO MASTER HUB" />
      <meta property="og:description" content="Test your SEO knowledge with 20 questions and earn your certificate." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </>
  )
}
