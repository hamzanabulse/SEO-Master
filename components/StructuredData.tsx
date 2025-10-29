export default function StructuredData({ data }: { data: object }) {
  const jsonLd = JSON.stringify(data)
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
  )
}
