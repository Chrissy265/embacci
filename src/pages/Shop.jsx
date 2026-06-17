import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'

const PRODUCTS = [
  { name: 'EMBACCI Airbrush System', price: '$349', cat: 'airbrush', catLabel: 'Airbrush', tag: 'New', img: '/assets/shop/airbrush-system.jpg' },
  { name: 'Blush Satin Camisole', price: '$54', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Satin', img: '/assets/shop/satin-cami-blush.jpg' },
  { name: 'Blush Satin Wide-Leg Pant', price: '$78', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Satin', img: '/assets/shop/satin-pant-blush.jpg' },
  { name: 'Dove Satin Wrap Blouse', price: '$92', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Limited', img: '/assets/shop/satin-wrap-dove.jpg' },
  { name: 'Dove Satin Wide-Leg Pant', price: '$84', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Satin', img: '/assets/shop/satin-pant-dove.jpg' },
  { name: 'Mist Ribbed Cap-Sleeve Top', price: '$48', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'New', img: '/assets/shop/ribbed-top-mist.jpg' },
  { name: 'Mist Ribbed Wide-Leg Pant', price: '$72', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'New', img: '/assets/shop/ribbed-pant-mist.jpg' },
  { name: 'Ivory Bouclé Slip Dress', price: '$86', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'New', img: '/assets/shop/boucle-slip-ivory.jpg' },
  { name: 'Ivory Sleeveless Robe', price: '$98', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Loungewear', img: '/assets/shop/terry-robe-sleeveless.jpg' },
  { name: 'Plush Terry Robe', price: '$118', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Luxury', img: '/assets/shop/terry-robe-short.jpg' },
  { name: 'Plush Terry Robe Long', price: '$128', cat: 'fashion', catLabel: 'Mercy Collection', tag: 'Luxury', img: '/assets/shop/terry-robe-long.jpg' },
]

const CATS = [
  { id: 'all', label: 'All' },
  { id: 'airbrush', label: 'Airbrush' },
  { id: 'fashion', label: 'Mercy Collection' },
]

const TRUST = ['Free Shipping', '24/7 Support', 'Money-Back Warranty', '100% Eco Products']

export default function Shop() {
  const [cat, setCat] = useState('all')
  useReveal([cat])

  const products = PRODUCTS.filter((p) => cat === 'all' || p.cat === cat)

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      {/* Page-local product grid breakpoints (matches prototype .emb-shopgrid) */}
      <style>{`
        .emb-shopgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        @media(max-width:1100px){.emb-shopgrid{grid-template-columns:repeat(3,1fr);}}
        @media(max-width:820px){.emb-shopgrid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:520px){.emb-shopgrid{grid-template-columns:1fr;}}
      `}</style>

      <Nav active="shop" />

      {/* COMING SOON OVERLAY */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(24px,6vw,60px)', background: 'linear-gradient(180deg, rgba(10,9,8,.74) 0%, rgba(10,9,8,.82) 55%, rgba(10,9,8,.9) 100%)', backdropFilter: 'blur(7px) saturate(118%)', WebkitBackdropFilter: 'blur(7px) saturate(118%)' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(680px,90vw)', height: 'min(680px,90vw)', background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 620 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 30 }}>
            <span style={{ width: 40, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, letterSpacing: '.46em', textTransform: 'uppercase', color: '#D9C7B6' }}>The Boutique, Reimagined</span>
            <span style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(34px,6vw,72px)', lineHeight: 1.0, letterSpacing: '-0.01em', margin: 0, color: 'var(--text-bright)' }}>
            New Shop Experience<br /><span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Coming Soon.</span>
          </h2>
          <p style={{ margin: '28px auto 0', maxWidth: 440, fontSize: 'clamp(14px,1.2vw,16px)', fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-2)' }}>
            We are crafting an elevated way to shop EMBACCI: airbrush technology, Gob Tree skincare, and the Mercy Collection, beautifully reborn.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 34 }}>
            <span style={{ width: 26, height: 1, background: 'rgba(244,238,227,.25)' }} />
            <span style={{ color: 'var(--accent)', fontSize: 11 }}>◆</span>
            <span style={{ width: 26, height: 1, background: 'rgba(244,238,227,.25)' }} />
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(150px,18vh,200px) clamp(18px,5vw,60px) clamp(40px,6vh,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(110% 100% at 50% 0%, #251a12 0%, #0f0b09 55%, #0A0908 100%)' }} />
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', marginBottom: 24 }}>
            <span style={{ width: 36, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>The Boutique</span>
            <span style={{ width: 36, height: 1, background: 'var(--accent)' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,7vw,104px)', lineHeight: .95, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
            Shop <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>EMBACCI</span>
          </h1>
          <p style={{ maxWidth: 560, margin: '26px auto 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-2)' }}>
            Airbrush technology, Gob Tree organic skincare, and the Mercy Collection: luxury, delivered to your door.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(18px,5vw,60px) clamp(72px,11vh,140px)' }}>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 46 }}>
          {CATS.map((c) => {
            const activeCat = c.id === cat
            return (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                style={{
                  background: activeCat ? 'var(--accent)' : 'transparent',
                  color: activeCat ? 'var(--bg)' : 'var(--muted-1)',
                  border: `1px solid ${activeCat ? 'var(--accent)' : 'rgba(244,238,227,.22)'}`,
                  padding: '12px 22px', fontFamily: 'var(--sans)', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .3s',
                }}
              >
                {c.label}
              </button>
            )
          })}
        </Reveal>

        <div className="emb-shopgrid">
          {products.map((p) => (
            <div key={p.name} className="emb-prod hover-scale emb-rev in" style={{ background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', display: 'flex', flexDirection: 'column', transition: 'border-color .4s' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: '#0f0c0a' }}>
                <div className="scale-target" style={{ position: 'absolute', inset: 0, background: `url(${p.img}) center 38% / cover no-repeat` }} />
                <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(10,9,8,.8)', color: 'var(--accent)', padding: '6px 12px', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase' }}>{p.tag}</div>
              </div>
              <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-6)', marginBottom: 10 }}>{p.catLabel}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 19, lineHeight: 1.25, margin: '0 0 16px', color: 'var(--text-bright)' }}>{p.name}</h3>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--text-bright)' }}>{p.price}</span>
                  <button className="btn-primary" style={{ background: 'none', border: '1px solid rgba(244,238,227,.25)', color: 'var(--text-bright)', padding: '10px 16px', fontFamily: 'var(--sans)', fontSize: '10.5px', letterSpacing: '.16em', textTransform: 'uppercase', cursor: 'pointer' }}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <div style={{ borderTop: '1px solid rgba(244,238,227,.08)', borderBottom: '1px solid rgba(244,238,227,.08)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '30px clamp(18px,5vw,60px)', display: 'flex', flexWrap: 'wrap', gap: '20px 40px', justifyContent: 'center' }}>
          {TRUST.map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 7, height: 7, background: 'var(--accent)', transform: 'rotate(45deg)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C5BBAD' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', overflow: 'hidden' }}>
        <Reveal style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(64px,9vh,110px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.04, margin: '0 0 24px', color: 'var(--text-bright)' }}>Need help choosing?</h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#C5BBAD', maxWidth: 480, margin: '0 auto 32px' }}>
            Our concierge team is here to guide you to the right products and services.
          </p>
          <Link to="/#connect" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Contact Concierge</Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
