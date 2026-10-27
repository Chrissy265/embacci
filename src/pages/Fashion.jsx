import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import useReveal from '../hooks/useReveal.js'

// The Mercy Collection content was removed at the client's request (Oct 2026).
// This page stays as a Coming Soon placeholder until the new fashion line launches.
export default function Fashion() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="fashion" />

      <section style={{ position: 'relative', minHeight: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', padding: 'clamp(150px,18vh,190px) clamp(18px,5vw,60px) clamp(72px,11vh,130px)' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-8%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 65%)', pointerEvents: 'none' }} />
        <div className="emb-rev in" style={{ position: 'relative', maxWidth: 900, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 26 }}>
            <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Fashion</span>
            <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(34px,6vw,88px)', lineHeight: 1.04, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
            EMBACCI International Fashion — <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Coming Soon.</span>
          </h1>
        </div>
      </section>

      <Footer />
    </div>
  )
}
