import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Inter, Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent band */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '12px',
            background: '#FF7A00',
          }}
        />

        <div style={{
          border: '4px solid #FF7A00',
          borderRadius: '16px',
          padding: '48px 64px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
        }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: '#FF7A00', marginBottom: 12 }}>SEO MASTER HUB</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: '#111', marginBottom: 8 }}>Ultimate SEO Authority Guide</div>
          <div style={{ fontSize: 24, color: '#444' }}>Technical SEO · Content Strategy · Authority Building</div>
        </div>

        <div style={{ position: 'absolute', bottom: 24, color: '#666', fontSize: 20 }}>seo-master-hub.com</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
