import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { bookLinkProps } from '../config/booking.js'

const SERVICES = ['makeup', 'skincare', 'academy']

export default function Nav({ active = '' }) {
  // Initialize from the real viewport so the first paint is already correct
  // (avoids a flash of the desktop nav / overflow on phones).
  const initialW = typeof window !== 'undefined' ? window.innerWidth : 1280
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [small, setSmall] = useState(initialW < 1040)
  const [showBook, setShowBook] = useState(initialW >= 520)
  const [scrolled, setScrolled] = useState(false)
  const servicesWrap = useRef(null)

  useEffect(() => {
    const applyResponsive = () => {
      const w = window.innerWidth
      setSmall(w < 1040)
      setShowBook(w >= 520)
    }
    const onScroll = () => setScrolled((window.scrollY || 0) > 40)
    const onDoc = (e) => {
      if (servicesWrap.current && !servicesWrap.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    applyResponsive()
    onScroll()
    window.addEventListener('resize', applyResponsive)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onDoc, true)
    return () => {
      window.removeEventListener('resize', applyResponsive)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onDoc, true)
    }
  }, [])

  const col = (name) => (active === name ? 'var(--accent)' : 'var(--muted-1)')
  const servicesColor = SERVICES.includes(active) ? 'var(--accent)' : 'var(--muted-1)'

  return (
    <div style={{ fontFamily: 'var(--sans)' }}>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          background: 'rgba(10,9,8,.92)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(244,238,227,.1)',
          transition: 'background .45s ease, border-color .45s ease',
          boxShadow: scrolled ? '0 12px 40px rgba(0,0,0,.4)' : 'none',
        }}
      >
        {/* slim bar */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: scrolled ? 0 : 40,
            opacity: scrolled ? 0 : 1,
            transition: 'max-height .45s ease, opacity .35s ease',
            borderBottom: '1px solid rgba(244,238,227,.08)',
          }}
        >
          <div style={{ textAlign: 'center', fontSize: '10.5px', letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--muted-3)', padding: '12px 16px' }}>
            Complimentary Consultations &nbsp;·&nbsp; Now Booking Across East Africa &amp; the U.S.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '16px clamp(18px,5vw,60px)' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
            <img src="/assets/logo-mark.png" alt="EMBACCI" style={{ height: 48, width: 'auto', display: 'block', flex: 'none' }} />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '.34em', fontWeight: 600, color: 'var(--text)' }}>EMBACCI</div>
              <div style={{ fontSize: 8, letterSpacing: '.5em', color: 'var(--muted-5)', marginTop: 5, paddingLeft: 2 }}>INTERNATIONAL</div>
            </div>
          </Link>

          {/* desktop nav */}
          {!small && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 30, fontSize: '12.5px', letterSpacing: '.16em', textTransform: 'uppercase' }}>
              <Link to="/" className="emb-navlink" style={{ textDecoration: 'none', padding: '6px 0', color: col('home') }}>Home</Link>
              <Link to="/about" className="emb-navlink" style={{ textDecoration: 'none', padding: '6px 0', color: col('about') }}>About</Link>
              <div ref={servicesWrap} style={{ position: 'relative' }}>
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  className="emb-navlink"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', letterSpacing: '.16em', textTransform: 'uppercase', padding: '6px 0', color: servicesColor, display: 'inline-flex', alignItems: 'center', gap: 7 }}
                >
                  Services <span style={{ fontSize: 9, color: 'var(--accent)' }}>▼</span>
                </button>
                {servicesOpen && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)', background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.12)', minWidth: 230, padding: 10, display: 'flex', flexDirection: 'column', boxShadow: '0 24px 60px rgba(0,0,0,.5)' }}>
                    <Link to="/makeup-on-demand" className="dropdown-link" style={{ textDecoration: 'none', color: 'var(--muted-1)', padding: '12px 14px', fontSize: 12, letterSpacing: '.12em' }}>Makeup on Demand</Link>
                    <Link to="/skincare" className="dropdown-link" style={{ textDecoration: 'none', color: 'var(--muted-1)', padding: '12px 14px', fontSize: 12, letterSpacing: '.12em' }}>Organic Skincare</Link>
                    <Link to="/academy" className="dropdown-link" style={{ textDecoration: 'none', color: 'var(--muted-1)', padding: '12px 14px', fontSize: 12, letterSpacing: '.12em' }}>Training Academy</Link>
                  </div>
                )}
              </div>
              <Link to="/airbrush" className="emb-navlink" style={{ textDecoration: 'none', padding: '6px 0', color: col('airbrush') }}>Airbrush</Link>
              <Link to="/fashion" className="emb-navlink" style={{ textDecoration: 'none', padding: '6px 0', color: col('fashion') }}>Fashion</Link>
              <Link to="/shop" className="emb-navlink" style={{ textDecoration: 'none', padding: '6px 0', color: col('shop') }}>Shop</Link>
              <Link to="/gallery" className="emb-navlink" style={{ textDecoration: 'none', padding: '6px 0', color: col('gallery') }}>Media</Link>
            </nav>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {showBook && (
              <a {...bookLinkProps} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--accent)', color: 'var(--bg)', padding: '13px 24px', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book Now</a>
            )}
            {small && (
              <button onClick={() => setMenuOpen(true)} aria-label="Menu" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', width: 44, height: 44, padding: 0 }}>
                <span style={{ width: 24, height: 1.5, background: 'var(--text)', display: 'block' }} />
                <span style={{ width: 24, height: 1.5, background: 'var(--text)', display: 'block' }} />
                <span style={{ width: 16, height: 1.5, background: 'var(--text)', display: 'block' }} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* mobile menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(10,9,8,.98)', display: 'flex', flexDirection: 'column', padding: '28px clamp(18px,6vw,40px)', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '.34em', fontWeight: 600, color: 'var(--text)' }}>EMBACCI</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close" style={{ background: 'none', border: '1px solid rgba(244,238,227,.25)', color: 'var(--text)', width: 44, height: 44, fontSize: 22, cursor: 'pointer' }}>×</button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 36 }} onClick={() => setMenuOpen(false)}>
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/makeup-on-demand', 'Makeup on Demand'],
              ['/airbrush', 'Airbrush'],
              ['/skincare', 'Skincare'],
              ['/academy', 'Academy'],
              ['/fashion', 'Fashion'],
              ['/shop', 'Shop'],
              ['/gallery', 'Media'],
            ].map(([to, label]) => (
              <Link key={to} to={to} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,6vw,30px)', textDecoration: 'none', color: 'var(--text)', padding: '9px 0', borderBottom: '1px solid rgba(244,238,227,.08)' }}>{label}</Link>
            ))}
          </nav>
          <a {...bookLinkProps} onClick={() => setMenuOpen(false)} style={{ marginTop: 28, textAlign: 'center', background: 'var(--accent)', color: 'var(--bg)', padding: 18, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book an Artist</a>
        </div>
      )}
    </div>
  )
}
