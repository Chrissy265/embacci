import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'
import { bookLinkProps } from '../config/booking.js'

const MEDIA = [
  ['family', 'The EMBACCI Family · Nairobi'],
  ['award', 'Grand Fashion Awards · 1st Runner-Up'],
  ['gala-couple', 'EMBACCI Gala · Red Carpet'],
  ['bti', 'Beauty Therapy Institute · Partnership'],
  ['product-salon', 'Gob Tree Skincare · In Salon'],
  ['bts-bridal', 'Behind the Scenes · Bridal Glam'],
  ['setting-spray', 'HD Beauty · Camera-Ready'],
  ['launch-couple', 'Brand Launch · Allso × EMBACCI'],
  ['office', 'Beauty at Your Fingertips · HQ'],
  ['loreal-group', 'L’Oréal Professionnel · Partnership'],
  ['mihret-vp', 'Co-Owner & VP · Mihret Mengiste'],
  ['salon-spray', 'Salon Session · Styling'],
  ['breeze-box', 'Breeze 2 · Airbrush Makeup'],
  ['team-orange', 'The EMBACCI Team · Nairobi'],
  ['duo-salon', 'In the Salon · EMBACCI'],
  ['trio-banner', 'EMBACCI International · Leadership'],
  ['travel-duo', 'On the Road · EMBACCI'],
]

const PARAS = [
  'The beauty industry has long been criticized for its environmental impact, with concerns ranging from wasteful packaging to the use of harmful chemicals in products. However, in recent years, there has been a growing movement towards sustainability in the beauty industry, with many brands working to reduce their carbon footprint and promote eco-friendly practices.',
  'One of the biggest areas of focus for sustainability in the beauty industry is packaging. According to the Ellen MacArthur Foundation, the beauty industry produces over 120 billion units of packaging each year, much of which is not recyclable. In response, many brands are switching to more sustainable packaging materials, such as glass, metal, and biodegradable plastics. Some brands are also offering refillable packaging options, reducing the amount of waste created by single-use products.',
]
const PARAS2 = [
  'In addition to packaging, many beauty brands are also exploring ways to use more eco-friendly ingredients. This includes using organic and natural ingredients, as well as sourcing ingredients from sustainable and fair-trade sources. Some brands are also investing in renewable energy and carbon offsets to reduce their overall environmental impact.',
  'However, sustainability in the beauty industry is not just about reducing waste and promoting eco-friendly practices. It also includes promoting ethical and equitable practices throughout the supply chain. This includes fair labor practices, responsible sourcing of ingredients, and supporting diverse and inclusive communities.',
  'The move towards sustainability in the beauty industry is still in its early stages, but it is clear that there is a growing demand for eco-friendly and ethical beauty products. As consumers become more conscious of their impact on the environment, they are looking for brands that share their values and prioritize sustainability. By embracing sustainability, the beauty industry has the opportunity to not only reduce its impact on the planet but also promote a more ethical and inclusive approach to beauty.',
]
const ESSENCE = [
  'It lives in our skin rich with melanin, glowing with history. It lives in our fabrics bold, expressive, and full of meaning. It lives in our traditions passed down through hands that created before us. And it lives in our women powerful, graceful, and endlessly inspiring.',
  'When I created Mercy Collections, I wanted the world to feel what Africa feels like: warmth, depth, elegance, and truth. Our fashion is not just clothing it is identity, it is memory, it is pride.',
  'This is why our partnership with Gob Tree Organic Skincare is so important. The Gob Tree is one of Africa’s quiet miracles a natural source of nourishment that has cared for our skin for generations. Its organic properties restore, protect, and enhance the skin’s natural radiance without chemicals or compromise.',
  'When paired with our fashion, Gob Tree skincare becomes part of a larger story: a story of African beauty rising, evolving, and leading the world.',
]

const bodyP = { fontSize: 17, fontWeight: 300, lineHeight: 1.9, color: '#C5BBAD', margin: '0 0 26px' }
const tag = { display: 'inline-block', border: '1px solid rgba(199,122,72,.45)', color: 'var(--accent)', padding: '7px 16px', fontSize: '10.5px', letterSpacing: '.24em', textTransform: 'uppercase' }
const region = { border: '1px solid rgba(244,238,227,.16)', padding: '11px 20px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }

export default function Gallery() {
  const [lb, setLb] = useState({ open: false, src: '', cap: '' })
  useReveal()

  const open = (slug, cap) => setLb({ open: true, src: `/assets/media/${slug}.jpg`, cap })
  const close = () => setLb((s) => ({ ...s, open: false }))

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="gallery" />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(150px,18vh,200px) clamp(18px,5vw,60px) clamp(40px,6vh,60px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(110% 100% at 50% 0%, #251a12 0%, #0f0b09 55%, #0A0908 100%)' }} />
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', marginBottom: 24 }}>
            <span style={{ width: 36, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Our Work</span>
            <span style={{ width: 36, height: 1, background: 'var(--accent)' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(38px,6.6vw,100px)', lineHeight: .95, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
            Gallery &amp; <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Global Impact</span>
          </h1>
          <p style={{ maxWidth: 560, margin: '26px auto 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: '#CFC6B8' }}>
            A celebration of artistry, culture, and the communities we serve, from Addis Ababa to the world.
          </p>
        </div>
      </section>

      {/* PHOTOS & VIDEOS */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(30px,5vh,60px) clamp(18px,5vw,60px) clamp(60px,9vh,110px)' }}>
        <Reveal style={{ marginBottom: 'clamp(30px,4vh,44px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)' }}>Photos &amp; Videos</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,48px)', lineHeight: 1.04, margin: 0, color: 'var(--text-bright)' }}>
            Moments in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>focus.</span>
          </h2>
        </Reveal>

        <div className="emb-masonry emb-rev in">
          {MEDIA.map(([slug, cap]) => (
            <button key={slug} onClick={() => open(slug, cap)} className="emb-mtile">
              <img src={`/assets/media/${slug}.jpg`} alt={cap} loading="lazy" />
              <span className="emb-cap">
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--text-bright)' }}>{cap}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* BLOG / JOURNAL */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vh,60px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)' }}>The Journal</span>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            </div>
            <div style={{ ...tag, marginBottom: 24 }}>Sustainability</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 1.06, letterSpacing: '-0.01em', margin: '0 0 22px', color: 'var(--text-bright)' }}>
              Sustainability in the <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Beauty Industry.</span>
            </h2>
            <div style={{ fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)' }}>By Gibor Ladared &nbsp;·&nbsp; 4 Min Read</div>
          </Reveal>

          <article style={{ maxWidth: 720, margin: '0 auto' }}>
            {PARAS.map((p, i) => <Reveal as="p" key={i} style={bodyP}>{p}</Reveal>)}
            <Reveal as="blockquote" style={{ margin: '40px 0', padding: '8px 0 8px 28px', borderLeft: '2px solid var(--accent)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(20px,2.6vw,30px)', lineHeight: 1.4, color: 'var(--text-bright)', margin: 0 }}>
                Over 120 billion units of packaging are produced each year, much of which is not recyclable.
              </p>
            </Reveal>
            {PARAS2.map((p, i) => <Reveal as="p" key={i} style={{ ...bodyP, margin: i === PARAS2.length - 1 ? 0 : bodyP.margin }}>{p}</Reveal>)}
          </article>

          <Reveal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: 'clamp(60px,9vh,100px) 0' }}>
            <span style={{ width: 64, height: 1, background: 'rgba(244,238,227,.16)' }} />
            <span style={{ color: 'var(--accent)', fontSize: 12 }}>◆</span>
            <span style={{ width: 64, height: 1, background: 'rgba(244,238,227,.16)' }} />
          </Reveal>

          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vh,60px)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 24 }}>
              <span style={tag}>Cosmetic</span>
              <span style={tag}>Fashion</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 1.06, letterSpacing: '-0.01em', margin: '0 0 22px', color: 'var(--text-bright)' }}>
              The Essence of Beauty <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Begins in Africa.</span>
            </h2>
            <div style={{ fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)' }}>By Admin &nbsp;·&nbsp; February 20, 2026 &nbsp;·&nbsp; 651 Comments</div>
          </Reveal>

          <article style={{ maxWidth: 720, margin: '0 auto' }}>
            <Reveal as="p" style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.3, color: 'var(--text-bright)', margin: '0 0 32px', textAlign: 'center' }}>
              Beauty has always lived in Africa.
            </Reveal>
            {ESSENCE.map((p, i) => <Reveal as="p" key={i} style={bodyP}>{p}</Reveal>)}
            <Reveal as="blockquote" style={{ margin: '40px 0', padding: '8px 0 8px 28px', borderLeft: '2px solid var(--accent)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(20px,2.6vw,30px)', lineHeight: 1.4, color: 'var(--text-bright)', margin: 0 }}>
                Beauty is not something you chase. It is something you already carry.
              </p>
            </Reveal>
            <Reveal as="p" style={bodyP}>
              Our mission is simple: to show every woman from Nairobi to New York, from Lagos to London that beauty is not something you chase. It is something you already carry. Our clothing and skincare simply reveal what has always been there.
            </Reveal>
            <Reveal as="p" style={{ ...bodyP, margin: '0 0 36px' }}>
              Africa is the beginning. Africa is the inspiration. Africa is the future of beauty and we are honored to share it with the world.
            </Reveal>
            <Reveal style={{ borderTop: '1px solid rgba(244,238,227,.12)', paddingTop: 26 }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--text-bright)' }}>Mercy</div>
              <div style={{ fontSize: '11.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 8 }}>
                Co-Owner &amp; Creative Director &nbsp;·&nbsp; EMBACCI International &nbsp;·&nbsp; Mercy Collections
              </div>
            </Reveal>
          </article>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
            <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 18 }}>Global Impact</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
              Beauty that <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>empowers.</span>
            </h2>
          </Reveal>
          <div className="emb-g3" style={{ gap: 24, textAlign: 'center' }}>
            {[['5★', 'Industry Reputation', '0s'], ['2', 'Continents Served', '.08s'], ['2026', 'Global Rollout', '.16s']].map(([num, label, delay]) => (
              <Reveal key={label} delay={delay}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px,6vw,80px)', color: 'var(--accent)', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 12 }}>{label}</div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 50 }}>
            {['East Africa', 'United States', 'North America', 'South America', 'The Caribbean', 'African Diaspora'].map((r) => (
              <span key={r} style={region}>{r}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', overflow: 'hidden' }}>
        <Reveal style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(64px,9vh,110px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.04, margin: '0 0 26px', color: 'var(--text-bright)' }}>
            Be part of the <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>story.</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a {...bookLinkProps} className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book an Artist</a>
            <Link to="/#connect" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>Get in Touch</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
      <Lightbox open={lb.open} src={lb.src} cap={lb.cap} onClose={close} />
    </div>
  )
}
