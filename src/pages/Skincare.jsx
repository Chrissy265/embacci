import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'
import { bookLinkProps } from '../config/booking.js'
import { asset } from '../assets/index.js'

const eyebrow = { fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }
const benefitCard = { border: '1px solid rgba(244,238,227,.1)', padding: '36px 30px' }
const tag = { border: '1px solid rgba(244,238,227,.16)', padding: '10px 18px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }
const listRow = { display: 'flex', gap: 16, padding: '18px 0' }
const listRowBorder = { ...listRow, borderBottom: '1px solid rgba(244,238,227,.1)' }
const diamond = { color: 'var(--accent)', fontSize: 16 }
const listText = { fontSize: 16, color: 'var(--muted-1)' }
const serviceCard = { background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', padding: '30px 28px', display: 'flex', alignItems: 'center', gap: 16 }
const serviceText = { fontFamily: 'var(--serif)', fontSize: 21, lineHeight: 1.2, color: 'var(--text-bright)' }

const BENEFITS = [
  ['Healing', 'Botanical actives soothe, calm, and restore stressed or sensitive skin.', '0s'],
  ['Hydrating', 'Deeply nourishing moisture for a supple, dewy, radiant finish.', '.08s'],
  ['Rejuvenating', 'Renews tone and texture, revealing visibly healthier, glowing skin.', '.16s'],
]

const SERVICES = [
  ['Deep hydration treatment', '0s'],
  ['Glow & radiance facial prep', '.06s'],
  ['Organic botanical skin therapy', '.12s'],
  ['Pre-makeup skin conditioning', '0s'],
  ['Anti-stress & calming treatment', '.06s'],
  ['Gentle exfoliation & moisture renewal', '.12s'],
]

export default function Skincare() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="skincare" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '78vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', padding: 'clamp(130px,15vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: 'var(--bg)' }}>
          <img src={asset('godtree-hero.jpg')} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 45%', animation: 'embZoom 24s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,9,8,.6) 0%, rgba(10,9,8,.42) 40%, rgba(10,9,8,.82) 100%)' }} />
        </div>
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Organic Skincare from Ethiopia</span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,6.6vw,100px)', lineHeight: .95, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
              The Gob Tree<br /><span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Collection.</span>
            </h1>
            <p style={{ maxWidth: 500, margin: '28px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: '#CFC6B8' }}>An ancient botanical treasure known for its healing, hydrating, and rejuvenating properties. Sourced ethically and crafted for radiant skin.</p>
            <div style={{ marginTop: 36 }}>
              <Link to="/shop" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Shop Skincare</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section style={{ maxWidth: 1040, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
        <Reveal>
          <div style={{ ...eyebrow, marginBottom: 22 }}>An Ancient Treasure</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,48px)', lineHeight: 1.25, margin: '0 0 28px', color: 'var(--text-bright)' }}>
            Beauty rooted in the soil of <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Ethiopia.</span>
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', maxWidth: 720, margin: '0 auto' }}>For generations, the Gob Tree has been revered for its restorative gifts. We honor that heritage by ethically sourcing each botanical and crafting it into a modern skincare ritual that hydrates, heals, and renews every complexion.</p>
        </Reveal>
      </section>

      {/* BENEFITS */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(18px,5vw,60px)' }}>
          <div className="emb-g3" style={{ gap: 20 }}>
            {BENEFITS.map(([title, body, delay]) => (
              <Reveal key={title} delay={delay} style={benefitCard}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)', marginBottom: 18 }}>◆</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 24, margin: '0 0 14px', color: 'var(--text-bright)' }}>{title}</h3>
                <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted-4)', margin: 0 }}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ETHOS + PERFECT BASE */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
          <Reveal style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--panel-3)' }}>
              <img src={asset('skincare-box.jpg')} alt="Gob Tree Organic Skincare packaging" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>Clean &amp; Ethical</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.4vw,46px)', lineHeight: 1.1, margin: '0 0 24px', color: 'var(--text-bright)' }}>
              The perfect base for <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>airbrush artistry.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: '0 0 26px' }}>Gob Tree Organic Skincare blends seamlessly with the EMBACCI Airbrush System for a smooth, radiant canvas, prepping skin so makeup sits flawlessly and lasts longer.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <span style={tag}>Ethically Sourced</span>
              <span style={tag}>100% Organic</span>
              <span style={tag}>Multicultural Skin</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GOB TREE ORGANIC SKINCARE */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ marginBottom: 50, maxWidth: 760 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>The Skincare Line</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,50px)', lineHeight: 1.04, margin: '0 0 22px', color: 'var(--text-bright)' }}>
              Gob Tree Organic <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Skincare.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: 0 }}>EMBACCI distributes and uses Gob Tree Organic Skincare, a natural Ethiopian skincare line crafted with intention, purity, and respect for tradition.</p>
          </Reveal>
          <div className="emb-g2" style={{ gap: 'clamp(28px,4vw,56px)' }}>
            <Reveal>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 8px', color: 'var(--text-bright)' }}>Made with</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={listRowBorder}><span style={diamond}>◆</span><span style={listText}>Organic plant-based ingredients</span></div>
                <div style={listRowBorder}><span style={diamond}>◆</span><span style={listText}>Traditional Ethiopian botanicals</span></div>
                <div style={listRow}><span style={diamond}>◆</span><span style={listText}>Clean, non-toxic formulations</span></div>
              </div>
            </Reveal>
            <Reveal delay=".08s">
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 8px', color: 'var(--text-bright)' }}>Available for</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={listRowBorder}><span style={diamond}>◆</span><span style={listText}>Retail purchase</span></div>
                <div style={listRowBorder}><span style={diamond}>◆</span><span style={listText}>Professional use</span></div>
                <div style={listRow}><span style={diamond}>◆</span><span style={listText}>Concierge skincare treatments</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PURCHASE GOB TREE SKINCARE */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#16170f,#0f0c0a)', overflow: 'hidden', borderTop: '1px solid rgba(199,122,72,.25)', borderBottom: '1px solid rgba(199,122,72,.25)' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-8%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 65%)', pointerEvents: 'none' }} />
        <Reveal style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: 'clamp(72px,11vh,130px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <div style={{ ...eyebrow, color: '#C99A78', marginBottom: 22 }}>Shop the Collection</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 1.04, margin: '0 0 22px', color: 'var(--text-bright)' }}>
            Bring Gob Tree home, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>today.</span>
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: '#C5BBAD', maxWidth: 560, margin: '0 auto 40px' }}>
            Experience the healing, hydrating, and rejuvenating power of our organic Ethiopian skincare. Secure checkout, delivered to your door.
          </p>
          <a
            href="https://checkout.square.site/merchant/MLA4TZ13WVWSS/checkout/XTYQMDCUEUY7K4GNOUOAUUXC?src=sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--accent)', color: 'var(--bg)', padding: '18px 40px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}
          >
            Purchase Gob Tree Skincare <span style={{ fontSize: 16 }}>&#8594;</span>
          </a>
        </Reveal>
      </section>

      {/* SKINCARE TREATMENT SERVICES */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ marginBottom: 48, maxWidth: 760 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>Concierge Treatments</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,50px)', lineHeight: 1.04, margin: '0 0 22px', color: 'var(--text-bright)' }}>
              Skincare treatment <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>services.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: 0 }}>As part of our concierge experience, EMBACCI offers luxury skincare treatments using Gob Tree Organic Skincare and professional-grade products. Our skincare services include:</p>
          </Reveal>
          <div className="emb-g3" style={{ gap: 18 }}>
            {SERVICES.map(([label, delay]) => (
              <Reveal key={label} delay={delay} style={serviceCard}>
                <span style={diamond}>◆</span>
                <span style={serviceText}>{label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: '36px 0 0', maxWidth: 760 }}>These treatments prepare the skin for flawless makeup application or can be booked as a stand-alone skincare service.</Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#16170f,#0f0c0a)', overflow: 'hidden', borderTop: '1px solid rgba(199,122,72,.25)' }}>
        <Reveal style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(70px,11vh,130px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 1.04, margin: '0 0 26px', color: 'var(--text-bright)' }}>
            Radiant skin, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>naturally.</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Link to="/shop" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Shop the Collection</Link>
            <a {...bookLinkProps} className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>Book a Consultation</a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
