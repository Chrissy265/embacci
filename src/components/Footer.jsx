import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const linkStyle = { textDecoration: 'none', color: 'var(--muted-2)' }
const headStyle = { fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--muted-6)', marginBottom: 20 }
const colStyle = { display: 'flex', flexDirection: 'column', gap: 13, fontSize: 14, color: 'var(--muted-2)' }

export default function Footer() {
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const apply = () => setNarrow(window.innerWidth < 760)
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.08)', padding: 'clamp(56px,8vh,90px) clamp(18px,5vw,60px) 36px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 50, borderBottom: '1px solid rgba(244,238,227,.08)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img src="/assets/logo-mark.png" alt="EMBACCI" style={{ height: 42, width: 'auto', display: 'block', flex: 'none' }} />
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '.32em', fontWeight: 600, color: 'var(--text)' }}>EMBACCI</div>
            </div>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-4)', maxWidth: 300, margin: '0 0 20px' }}>
              Luxury beauty, global identity, on-demand excellence. Born in Ethiopia, serving the African diaspora and the world.
            </p>
            <a href="https://www.instagram.com/embacci_international" className="link-accent" style={{ fontSize: '12.5px', letterSpacing: '.1em', color: 'var(--accent)', textDecoration: 'none' }}>
              Instagram — @embacci_international
            </a>
          </div>

          <div>
            <div style={headStyle}>Explore</div>
            <div style={colStyle}>
              <Link to="/about" className="link-muted" style={linkStyle}>About Us</Link>
              <Link to="/fashion" className="link-muted" style={linkStyle}>Fashion</Link>
              <Link to="/shop" className="link-muted" style={linkStyle}>Shop</Link>
              <Link to="/gallery" className="link-muted" style={linkStyle}>Gallery &amp; Global Impact</Link>
              <Link to="/#connect" className="link-muted" style={linkStyle}>Contact</Link>
            </div>
          </div>

          <div>
            <div style={headStyle}>Services</div>
            <div style={colStyle}>
              <Link to="/makeup-on-demand" className="link-muted" style={linkStyle}>Makeup on Demand</Link>
              <Link to="/skincare" className="link-muted" style={linkStyle}>Organic Skincare</Link>
              <Link to="/airbrush" className="link-muted" style={linkStyle}>Airbrush Technology</Link>
              <Link to="/academy" className="link-muted" style={linkStyle}>Training Academy</Link>
            </div>
          </div>

          <div>
            <div style={headStyle}>Connect</div>
            <div style={colStyle}>
              <a href="tel:+18888206671" className="link-muted" style={linkStyle}>888-820-6671</a>
              <a href="tel:+254707482502" className="link-muted" style={linkStyle}>+254 707 482 502</a>
              <Link to="/#connect" className="link-muted" style={linkStyle}>Contact</Link>
              <a href="https://wa.me/254707482502" className="link-muted" style={linkStyle}>WhatsApp</a>
            </div>
          </div>
        </div>

        <div style={{ overflow: 'hidden', padding: '34px 0 10px' }}>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(52px,14vw,200px)', lineHeight: .8, letterSpacing: '-0.02em', color: 'var(--panel-3)', textAlign: 'center', userSelect: 'none' }}>
            EMBACCI
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 }}>
          <span style={{ fontSize: '11.5px', color: '#6f675c' }}>All rights reserved. © 2025 Addrify BrandWorks.</span>
          <div style={{ display: 'flex', gap: 24, fontSize: '11.5px', color: '#8a8174' }}>
            <a href="https://embacci.com/privacy-policy/" className="link-muted" style={{ textDecoration: 'none', color: '#8a8174' }}>Privacy Policy</a>
            <a href="https://embacci.com/privacy-policy/" className="link-muted" style={{ textDecoration: 'none', color: '#8a8174' }}>Terms</a>
            <a href="https://embacci.com/faq/" className="link-muted" style={{ textDecoration: 'none', color: '#8a8174' }}>FAQ</a>
          </div>
        </div>
      </div>
    </div>
  )
}
