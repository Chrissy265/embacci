import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import useReveal from '../hooks/useReveal.js'
import { asset } from '../assets/index.js'

const LOOKS = [
  { img: 'fashion-look-1.jpg', cap: 'Draped in soft satin', pos: '50% 22%', delay: undefined },
  { img: 'fashion-look-2.jpg', cap: 'Softness that speaks', pos: '50% 22%', delay: '.06s' },
  { img: 'fashion-look-3.jpg', cap: 'Morning light, soft robes', pos: '50% 22%', delay: '.12s' },
  { img: 'fashion-look-4.jpg', cap: 'Everyday elegance', pos: '50% 18%', delay: '.18s' },
]

const PILLARS = [
  { n: '01', title: 'Premium Craftsmanship', body: 'Hand-crafted in Ethiopia with global luxury standards.', delay: undefined },
  { n: '02', title: 'Feminine Elegance', body: 'Soft silhouettes designed to flatter every woman.', delay: '.06s' },
  { n: '03', title: 'Cultural Pride', body: 'A celebration of Ethiopian artistry and identity.', delay: '.12s' },
  { n: '04', title: 'Everyday Luxury', body: 'Comfortable enough to wear daily, beautiful enough to feel special.', delay: '.18s' },
]

const SWATCHES = [
  { color: '#EFE7D6', label: 'Ivory' },
  { color: '#C9A24B', label: 'Gold' },
  { color: '#D9A79A', label: 'Blush' },
  { color: '#3A241A', label: 'Chocolate' },
  { color: '#9E5A33', label: 'Earth' },
]

const MATERIALS = ['Satin', 'Lace', 'Hand-Woven Cotton', 'Natural Light']
const MOODS = ['Warm', 'Feminine', 'Minimalist', 'Premium', 'Intimate']

const CULTURAL = [
  'Traditional patterns woven into robes',
  'Ethiopian jewelry accents',
  'Addis Ababa architecture & natural landscapes',
  'Soft Habesha color tones',
]

const TAGLINE_GROUPS = [
  {
    label: 'Luxury',
    delay: undefined,
    items: [
      'Elegance Born in Ethiopia.',
      'Where Comfort Becomes Couture.',
      'Luxury You Can Feel.',
      'Crafted for the Woman Who Deserves More.',
      'Soft. Feminine. Unforgettable.',
    ],
  },
  {
    label: 'Cultural',
    delay: '.06s',
    items: [
      'Inspired by Ethiopia. Designed for the World.',
      'Heritage in Every Stitch.',
      'Beauty Rooted in Culture.',
      'From Addis Ababa, With Love.',
    ],
  },
  {
    label: 'Sleepwear',
    delay: '.12s',
    items: [
      'Dream in Luxury.',
      'Nightwear for the Modern Queen.',
      'Softness That Speaks.',
    ],
  },
  {
    label: 'Lingerie',
    delay: '.18s',
    items: [
      'Confidence Starts Underneath.',
      'Elegance You Wear Close.',
      'Intimate. Elegant. Ethiopian.',
    ],
  },
]

const MARQUEE = ['Where Comfort Becomes Couture', 'Luxury You Can Feel', 'Heritage in Every Stitch', 'From Addis Ababa, With Love']

const materialTag = { border: '1px solid rgba(244,238,227,.16)', padding: '10px 18px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }
const moodTag = { border: '1px solid rgba(199,122,72,.3)', padding: '10px 18px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }

export default function Fashion() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="fashion" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', padding: 'clamp(150px,18vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'var(--bg)', overflow: 'hidden' }}>
          <img src={asset('fashion-hero.jpg')} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '72% 22%', animation: 'embZoom 26s ease-in-out infinite alternate' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(95deg, rgba(10,9,8,.86) 0%, rgba(10,9,8,.6) 34%, rgba(10,9,8,.12) 62%, rgba(10,9,8,.32) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(0deg, rgba(10,9,8,.75) 0%, transparent 42%)' }} />
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>The Mercy Collection</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,8vw,128px)', lineHeight: .92, letterSpacing: '-0.015em', margin: 0, color: 'var(--text-bright)' }}>
            Elegance Born<br />in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Ethiopia.</span>
          </h1>
          <p style={{ maxWidth: 560, margin: '30px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-2)' }}>
            A premium sleepwear &amp; lingerie line celebrating modern Ethiopian femininity: soft, powerful, graceful, and global. Where luxury minimalism meets Ethiopian heritage.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <Link to="/shop" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Shop the Collection</Link>
            <a href="#story" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>The Campaign</a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 22 }}>Where Comfort Meets Culture</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,48px)', lineHeight: 1.25, margin: '0 0 28px', color: 'var(--text-bright)' }}>
            Her sleepwear and lingerie are not just garments. They are expressions of <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>identity, heritage, and self-love.</span>
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', maxWidth: 720, margin: '0 auto' }}>
            We follow a woman through intimate, serene moments in her home: morning light, soft fabrics, quiet confidence. The Mercy Collection positions sleepwear and lingerie as premium, elegant, culturally rooted, and crafted in Addis Ababa for the modern woman.
          </p>
        </Reveal>
      </section>

      {/* EDITORIAL LOOKBOOK */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(18px,5vw,60px) clamp(72px,11vh,140px)' }}>
        <div className="emb-g4" style={{ gap: 14 }}>
          {LOOKS.map((l) => (
            <Reveal key={l.cap} delay={l.delay} className="hover-scale" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--panel-3)', display: 'flex', alignItems: 'flex-end', padding: 22 }}>
              <img src={asset(l.img)} alt={l.cap} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: l.pos }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 52%,rgba(10,9,8,.78))' }} />
              <span style={{ position: 'relative', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--text-bright)' }}>{l.cap}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MESSAGING PILLARS */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
            <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 18 }}>The Collection's Soul</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
              Four <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>pillars.</span>
            </h2>
          </Reveal>
          <div className="emb-g4" style={{ gap: 20 }}>
            {PILLARS.map((p) => (
              <Reveal key={p.n} delay={p.delay} style={{ border: '1px solid rgba(244,238,227,.1)', padding: '34px 28px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--accent)', marginBottom: 16 }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 21, margin: '0 0 12px', color: 'var(--text-bright)' }}>{p.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: 0 }}>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL DIRECTION */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)' }}>Visual Direction</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.4vw,46px)', lineHeight: 1.1, margin: '0 0 30px', color: 'var(--text-bright)' }}>
              A palette of <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>heritage.</span>
            </h2>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 34 }}>
              {SWATCHES.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ width: 'clamp(48px,12vw,64px)', height: 'clamp(48px,12vw,64px)', background: s.color, border: '1px solid rgba(244,238,227,.15)' }} />
                  <div style={{ fontSize: 10, letterSpacing: '.12em', color: 'var(--muted-5)', marginTop: 8 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {MATERIALS.map((m) => <span key={m} style={materialTag}>{m}</span>)}
            </div>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 14 }}>Mood</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {MOODS.map((m) => <span key={m} style={moodTag}>{m}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)' }}>Cultural Integration</span>
            </div>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: 'var(--muted-3)', margin: '0 0 24px' }}>
              The campaign subtly incorporates Ethiopian elements, positioning the Mercy Collection as Ethiopian luxury for the world.
            </p>
            {CULTURAL.map((c, i) => (
              <div key={c} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: i === CULTURAL.length - 1 ? 'none' : '1px solid rgba(244,238,227,.1)' }}>
                <span style={{ color: 'var(--accent)' }}>◆</span>
                <span style={{ fontSize: 15, color: 'var(--muted-1)' }}>{c}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TAGLINES */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 18 }}>The Campaign Voice</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
              The <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>taglines.</span>
            </h2>
          </Reveal>
          <div className="emb-g4" style={{ gap: 24 }}>
            {TAGLINE_GROUPS.map((g) => (
              <Reveal key={g.label} delay={g.delay} style={{ borderTop: '1px solid rgba(199,122,72,.45)', paddingTop: 22 }}>
                <div style={{ fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>{g.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {g.items.map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.3, color: '#E8DFD2' }}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TAGLINE MARQUEE */}
      <div style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)', padding: '26px 0', overflow: 'hidden' }}>
        <Marquee items={MARQUEE} duration={32} />
      </div>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40%', left: '-10%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 65%)' }} />
        <Reveal style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(24px,3.4vw,44px)', lineHeight: 1.3, color: 'var(--text-bright)', margin: '0 0 34px' }}>
            Mercy Collection. Crafted for the woman who deserves luxury.
          </p>
          <Link to="/shop" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 38px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Shop the Mercy Collection</Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
