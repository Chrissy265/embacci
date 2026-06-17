import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'

const eyebrow = { fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }
const whoTag = { border: '1px solid rgba(244,238,227,.16)', padding: '13px 20px', fontSize: 13, color: 'var(--muted-1)' }
const curriculumCard = { background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', padding: '32px 28px' }
const certRowBorder = { display: 'flex', gap: 16, padding: '18px 0', borderBottom: '1px solid rgba(244,238,227,.1)' }
const certRow = { display: 'flex', gap: 16, padding: '18px 0' }
const whyCard = { background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', padding: '30px 28px', display: 'flex', alignItems: 'flex-start', gap: 16 }

const YT = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1&controls=0&disablekb=1`

const WHO = [
  'Professional makeup artists',
  'Bridal specialists',
  'Salon owners',
  'Beauty school students',
  'On-demand providers',
  'Beginners entering beauty',
  'Artists expanding into airbrush',
]

const CURRICULUM = [
  ['01', 'Airbrush Fundamentals', 'Equipment setup · Pressure control · Hygiene & sanitation · Airflow mastery', '0s'],
  ['02', 'Complexion Mastery', 'Undertone matching · Multicultural techniques · Coverage layering · Texture correction', '.06s'],
  ['03', 'Bridal & Event', 'Sweat-proof techniques · Humidity-resistant application · Long-wear bridal glam', '.12s'],
  ['04', 'HD & Camera-Ready', 'Film & TV standards · Photography lighting · High-definition complexion work', '0s'],
  ['05', 'Body Airbrushing', 'Tattoo coverage · Body contouring · Décolletage perfection', '.06s'],
  ['06', 'Business & Branding', 'Pricing your services · Client experience · On-demand training · Building a luxury brand', '.12s'],
]

const WHY = [
  ['Multicultural beauty expertise', '0s'],
  ['Global luxury standards', '.06s'],
  ['Professional-grade equipment', '.12s'],
  ['Hands-on training', '0s'],
  ['Career-building certification', '.06s'],
  ["Access to EMBACCI's international network", '.12s'],
]

export default function Academy() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="academy" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', padding: 'clamp(150px,20vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(120% 100% at 25% 30%, #2a1d14 0%, #0f0b09 55%, #0A0908 100%)' }} />
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
          <div className="emb-g2" style={{ gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
                <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>EMBACCI Airbrush Academy</span>
              </div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(38px,5.2vw,84px)', lineHeight: .96, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
                Professional artistry.<br /><span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Global standards.</span>
              </h1>
              <p style={{ maxWidth: 580, margin: '28px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: '#CFC6B8' }}>A world-class beauty education program certifying artists in the EMBACCI Airbrush System, blending technical mastery, multicultural complexion expertise, and luxury service standards.</p>
              <div style={{ marginTop: 36 }}>
                <Link to="/#connect" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>View Training Options</Link>
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: 'min(600px,72vh)', maxWidth: '100%', width: '100%', margin: '0 auto', background: 'var(--bg)', overflow: 'hidden', border: '1px solid rgba(244,238,227,.1)' }}>
              <iframe
                src={YT('jcU3Qt2v2bE')}
                title="Presentation Airbrush! 2026"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>Who It's For</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.08, margin: '0 0 22px', color: 'var(--text-bright)' }}>
              Whether you're starting your journey or <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>elevating your artistry.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: 0 }}>EMBACCI provides the tools to excel, preparing artists for global opportunities across weddings, media, fashion, and on-demand beauty.</p>
          </Reveal>
          <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {WHO.map((w) => <span key={w} style={whoTag}>{w}</span>)}
          </Reveal>
        </div>
      </section>

      {/* CURRICULUM */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
            <div style={{ ...eyebrow, marginBottom: 18 }}>The Curriculum</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
              What you will <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>learn.</span>
            </h2>
          </Reveal>
          <div className="emb-g3" style={{ gap: 20 }}>
            {CURRICULUM.map(([num, title, body, delay]) => (
              <Reveal key={num} delay={delay} style={curriculumCard}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--accent)', marginBottom: 16 }}>{num}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 21, margin: '0 0 14px', color: 'var(--text-bright)' }}>{title}</h3>
                <div style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--muted-4)' }}>{body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING OPTIONS */}
      <section id="options" style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <div style={{ ...eyebrow, marginBottom: 18 }}>Enroll</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
            Training <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>options.</span>
          </h2>
        </Reveal>
        <div className="emb-g3" style={{ gap: 20 }}>
          <Reveal style={{ border: '1px solid rgba(244,238,227,.1)', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 18 }}>Fast-Track</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 14px', color: 'var(--text-bright)' }}>1-Day Intensive</h3>
            <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted-4)', margin: '0 0 28px', flex: 1 }}>A fast-track introduction to EMBACCI Airbrush Technology. Perfect for beginners or artists needing a refresher.</p>
            <Link to="/#connect" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.3)', color: 'var(--text-bright)', padding: 14, textAlign: 'center', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', textDecoration: 'none' }}>Enquire</Link>
          </Reveal>
          <Reveal delay=".06s" style={{ border: '1px solid rgba(199,122,72,.5)', background: 'linear-gradient(170deg,#1a120c,#100c0a)', padding: '40px 32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 18, right: 18, background: 'var(--accent)', color: 'var(--bg)', padding: '6px 12px', fontSize: '9.5px', letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 600 }}>Certification</div>
            <div style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C99A78', marginBottom: 18 }}>Most Popular</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 14px', color: 'var(--text-bright)' }}>2-Day Professional</h3>
            <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.75, color: '#C5BBAD', margin: '0 0 28px', flex: 1 }}>A comprehensive hands-on program covering complexion mastery, multicultural techniques, and full airbrush artistry. Graduates receive official EMBACCI Airbrush Artist Certification.</p>
            <Link to="/#connect" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: 14, textAlign: 'center', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Apply Now</Link>
          </Reveal>
          <Reveal delay=".12s" style={{ border: '1px solid rgba(244,238,227,.1)', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 18 }}>Coming Soon</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 14px', color: 'var(--text-bright)' }}>Online Training</h3>
            <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted-4)', margin: '0 0 28px', flex: 1 }}>A flexible digital learning experience for artists worldwide, bringing EMBACCI's global standards to your screen.</p>
            <Link to="/#connect" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.3)', color: 'var(--text-bright)', padding: 14, textAlign: 'center', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', textDecoration: 'none' }}>Join Waitlist</Link>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
                <span style={eyebrow}>Certification</span>
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.08, margin: '0 0 26px', color: 'var(--text-bright)' }}>
                A gateway to <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>global artistry.</span>
              </h2>
              <div style={certRowBorder}><span style={{ color: 'var(--accent)', fontSize: 18 }}>◆</span><span style={{ fontSize: '15.5px', color: 'var(--muted-1)' }}>EMBACCI Certified Airbrush Artist Certificate</span></div>
              <div style={certRowBorder}><span style={{ color: 'var(--accent)', fontSize: 18 }}>◆</span><span style={{ fontSize: '15.5px', color: 'var(--muted-1)' }}>Listing in the EMBACCI Artist Directory</span></div>
              <div style={certRow}><span style={{ color: 'var(--accent)', fontSize: 18 }}>◆</span><span style={{ fontSize: '15.5px', color: 'var(--muted-1)' }}>Priority access to EMBACCI events &amp; partnerships</span></div>
              <p style={{ fontSize: '13.5px', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-6)', margin: '26px 0 0' }}>Recognized across the U.S., Canada, and Africa.</p>
            </Reveal>
            <Reveal style={{ position: 'relative', aspectRatio: '9/16', maxHeight: 'min(760px,80vh)', maxWidth: '100%', background: 'var(--bg)', overflow: 'hidden', margin: '0 auto', width: '100%' }}>
              <iframe
                src={YT('IRHFLhKgrzY')}
                title="EMBACCI Airbrush Academy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH EMBACCI */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <div style={{ ...eyebrow, marginBottom: 18 }}>The EMBACCI Difference</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
            Why train with <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>EMBACCI.</span>
          </h2>
        </Reveal>
        <div className="emb-g3" style={{ gap: 20 }}>
          {WHY.map(([label, delay]) => (
            <Reveal key={label} delay={delay} style={whyCard}>
              <span style={{ color: 'var(--accent)', fontSize: 16, lineHeight: 1.6 }}>◆</span>
              <span style={{ fontSize: 16, color: 'var(--muted-1)', lineHeight: 1.6 }}>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', overflow: 'hidden', borderTop: '1px solid rgba(199,122,72,.25)' }}>
        <Reveal style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(70px,11vh,130px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,38px)', lineHeight: 1.4, color: 'var(--text-bright)', margin: '0 0 32px' }}>More than training. A gateway to professional excellence and a future in luxury beauty.</p>
          <Link to="/#connect" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 36px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Enroll Today</Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
