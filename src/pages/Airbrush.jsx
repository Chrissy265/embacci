import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'

const eyebrow = { fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }
const statCell = { padding: '36px 12px', textAlign: 'center' }
const statCellBorder = { ...statCell, borderRight: '1px solid rgba(244,238,227,.07)' }
const statNum = { fontFamily: 'var(--serif)', fontSize: 'clamp(34px,4vw,52px)', color: 'var(--text-bright)' }
const statLabel = { fontSize: '10.5px', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 6 }
const howCard = { background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', padding: '30px 26px' }
const capCard = { border: '1px solid rgba(244,238,227,.1)', padding: '32px 28px' }
const advRow = { display: 'flex', gap: 22, padding: '24px 0', borderBottom: '1px solid rgba(244,238,227,.1)' }
const advNum = { fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--accent)', flex: 'none', width: 34 }

const HOW = [
  ['01', 'Precision Compressor', 'Controls airflow with exacting consistency for an even, repeatable finish.', '0s'],
  ['02', 'Micro-Fine Nozzle', 'Atomizes foundation into a soft, diffused mist for poreless coverage.', '.06s'],
  ['03', 'Handheld Stylus', 'Lightweight precision tool for detailed, expressive artistry.', '.12s'],
  ['04', 'Custom Pressure', 'Adjustable settings for face, body, and fine detail work.', '.18s'],
]

const ADVANTAGES = [
  ['01', 'Flawless Finish', 'A smooth, poreless, filter-like effect.'],
  ['02', 'Hygienic & Contact-Free', 'No brushes. No sponges. No cross-contamination.'],
  ['03', 'Time-Efficient', 'Cuts application time by 40% — ideal for high-volume bookings.'],
  ['04', 'Long-Lasting Wear', 'Stays fresh up to 18 hours without touch-ups.'],
  ['05', 'Lightweight Feel', 'Breathable and comfortable — feels like nothing on the skin.'],
  ['06', 'Universal Compatibility', 'Works on oily, dry, sensitive, and combination skin.'],
]

const BEFORE_AFTER = [
  { img: '/assets/media/bts-bridal.jpg', label: 'Bridal', delay: '0s' },
  { img: '/assets/media/salon-spray.jpg', label: 'Editorial', delay: '.06s' },
  { img: '/assets/media/setting-spray.jpg', label: 'HD Glam', delay: '.12s' },
]

export default function Airbrush() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="airbrush" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: 'clamp(150px,18vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(120% 100% at 78% 40%, #2a1d14 0%, #0f0b09 55%, #0A0908 100%)' }} />
        <div className="emb-g2" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(30px,5vw,70px)', alignItems: 'center' }}>
          <div className="emb-rev in">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Airbrush Technology</span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,6.6vw,98px)', lineHeight: .95, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
              Precision.<br />Speed. <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Luxury.</span>
            </h1>
            <p style={{ maxWidth: 520, margin: '28px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: '#CFC6B8' }}>A next-generation beauty system for flawless, hygienic, and long-lasting makeup — camera-ready coverage that blends seamlessly into every skin tone and undertone. The future of beauty, for every complexion.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
              <Link to="/makeup-on-demand" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book an Airbrush Artist</Link>
              <a href="#how" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>How It Works</a>
            </div>
          </div>
          <div className="emb-rev in" style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(160deg,#EFE9DF,#DDD3C6)', padding: 46, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
              <img src="/assets/airbrush.jpg" alt="EMBACCI Airbrush System" style={{ width: '100%', maxWidth: 440, objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 18, left: 18, background: 'var(--bg)', padding: '9px 16px', fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--accent)' }}>New Technology</div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div style={{ borderTop: '1px solid rgba(244,238,227,.08)', borderBottom: '1px solid rgba(244,238,227,.08)' }}>
        <div className="emb-g4 emb-rev" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(18px,5vw,60px)' }}>
          <div style={statCellBorder}><div style={statNum}>18<span style={{ fontSize: '.5em' }}>h</span></div><div style={statLabel}>Long-Wear</div></div>
          <div style={statCellBorder}><div style={statNum}>40<span style={{ fontSize: '.5em' }}>%</span></div><div style={statLabel}>Faster Application</div></div>
          <div style={statCellBorder}><div style={statNum}>100<span style={{ fontSize: '.5em' }}>%</span></div><div style={statLabel}>Contact-Free</div></div>
          <div style={statCell}><div style={statNum}>All</div><div style={statLabel}>Skin Tones &amp; Types</div></div>
        </div>
      </div>

      {/* WHAT IS */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
        <Reveal>
          <div style={{ ...eyebrow, marginBottom: 22 }}>What It Is</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.12, margin: '0 0 28px', color: 'var(--text-bright)' }}>A fine-mist spray, powered by advanced air-compression.</h2>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', maxWidth: 760, margin: '0 auto' }}>EMBACCI's Airbrush Technology delivers even, weightless coverage that blends seamlessly into every skin tone and undertone — a soft, diffused, filter-like finish that traditional brushes and sponges simply cannot achieve. Fast, precise, and camera-ready.</p>
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ marginBottom: 54 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>How It Works</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,50px)', lineHeight: 1.04, margin: 0, color: 'var(--text-bright)' }}>
              The system, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>component by component.</span>
            </h2>
          </Reveal>
          <div className="emb-g4" style={{ gap: 18 }}>
            {HOW.map(([num, title, body, delay]) => (
              <Reveal key={num} delay={delay} style={howCard}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)', marginBottom: 18 }}>{num}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 20, margin: '0 0 12px', color: 'var(--text-bright)' }}>{title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: 0 }}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ marginBottom: 54, textAlign: 'center' }}>
          <div style={{ ...eyebrow, marginBottom: 18 }}>Capabilities</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
            Engineered for <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>every canvas.</span>
          </h2>
        </Reveal>
        <div className="emb-g3" style={{ gap: 20 }}>
          <Reveal style={capCard}>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 16px', color: 'var(--text-bright)' }}>Full-Face Application</h3>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted-4)' }}>Foundation · Concealer · Contour · Blush · Highlight</div>
          </Reveal>
          <Reveal delay=".06s" style={capCard}>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 16px', color: 'var(--text-bright)' }}>Bridal &amp; Event</h3>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted-4)' }}>Sweat-resistant · Tear-resistant · 12–18 hour wear</div>
          </Reveal>
          <Reveal delay=".12s" style={capCard}>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 16px', color: 'var(--text-bright)' }}>HD &amp; Camera-Ready</h3>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted-4)' }}>Photoshoots · Film · TV · Social content</div>
          </Reveal>
          <Reveal style={capCard}>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 16px', color: 'var(--text-bright)' }}>Body Airbrushing</h3>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted-4)' }}>Décolletage · Arms · Back · Tattoo coverage</div>
          </Reveal>
          <Reveal delay=".06s" style={capCard}>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 16px', color: 'var(--text-bright)' }}>Multicultural Excellence</h3>
            <div style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted-4)' }}>Deep · Olive · Fair tones · Neutral, warm &amp; cool undertones</div>
          </Reveal>
          <Reveal delay=".12s" style={{ border: '1px solid rgba(199,122,72,.4)', background: 'linear-gradient(160deg,#1a120c,#100c0a)', padding: '32px 28px' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, margin: '0 0 16px', color: 'var(--accent)' }}>On-Demand Beauty</h3>
            <div style={{ fontSize: 14, lineHeight: 2, color: '#C5BBAD' }}>Mobile services across Africa, the U.S., Canada &amp; South America</div>
          </Reveal>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'start' }}>
            <Reveal style={{ position: 'sticky', top: 130 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
                <span style={eyebrow}>Why EMBACCI Leads</span>
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.04, margin: '0 0 22px', color: 'var(--text-bright)' }}>
                The advantages of <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>airbrush artistry.</span>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: 0 }}>Our airbrush foundation is skin-safe, non-comedogenic, sweat-resistant, and humidity-proof — designed for multicultural beauty and blending seamlessly with our Gob Tree Organic Skincare for a smooth, radiant base.</p>
            </Reveal>
            <Reveal>
              {ADVANTAGES.map(([num, title, body], i) => (
                <div key={num} style={i === ADVANTAGES.length - 1 ? { ...advRow, borderBottom: 'none' } : advRow}>
                  <span style={advNum}>{num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 21, margin: '0 0 7px', color: 'var(--text-bright)' }}>{title}</h3>
                    <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ ...eyebrow, marginBottom: 18 }}>The Transformation</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
            Before &amp; <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>After</span>
          </h2>
        </Reveal>
        <div className="emb-g3" style={{ gap: 16 }}>
          {BEFORE_AFTER.map(({ img, label, delay }) => (
            <Reveal key={label} delay={delay} className="hover-scale" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--panel-3)' }}>
              <img src={img} alt={`Airbrush result · ${label}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(10,9,8,.7))', display: 'flex', alignItems: 'flex-end', padding: 18 }}>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--text-bright)' }}>{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRAINING + BOOK */}
      <section style={{ background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', borderTop: '1px solid rgba(199,122,72,.25)' }}>
        <div className="emb-g2" style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(64px,9vh,110px) clamp(18px,5vw,60px)', gap: 24, alignItems: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,54px)', lineHeight: 1.04, margin: '0 0 18px', color: 'var(--text-bright)' }}>Ready for the future of beauty?</h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#C5BBAD', maxWidth: 480, margin: 0 }}>Book an airbrush artist for your wedding, event, or shoot — or get certified through our Training Academy.</p>
          </Reveal>
          <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'flex-end' }}>
            <Link to="/makeup-on-demand" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book an Artist</Link>
            <Link to="/academy" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>Training Academy</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
