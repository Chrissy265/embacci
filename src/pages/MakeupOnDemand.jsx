import { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'
import { BOOK_URL, bookLinkProps } from '../config/booking.js'

const eyebrow = { fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }
const stepCard = { border: '1px solid rgba(244,238,227,.1)', padding: '38px 32px' }
const serviceCard = { background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', padding: '30px 28px', display: 'flex', alignItems: 'center', gap: 16 }
const serviceText = { fontFamily: 'var(--serif)', fontSize: 21, color: 'var(--text-bright)' }
const diamond = { color: 'var(--accent)', fontSize: 16 }
const featRowBorder = { display: 'flex', gap: 16, padding: '18px 0', borderBottom: '1px solid rgba(244,238,227,.1)' }
const featRow = { display: 'flex', gap: 16, padding: '18px 0' }
const occLabel = { position: 'relative', fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--text-bright)' }
const fieldLabel = { display: 'block', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 10 }
const contactLink = { display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--accent)', textDecoration: 'none', fontSize: '14.5px' }
const contactDot = { width: 8, height: 8, background: 'var(--accent)', transform: 'rotate(45deg)' }
const coverageChip = { border: '1px solid rgba(244,238,227,.16)', padding: '12px 22px', fontSize: '12.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted-1)' }

const STEPS = [
  ['01', 'Tell Us the Occasion', 'Share your event, date, and location: wedding, party, photoshoot, or anything in between.', '0s'],
  ['02', 'We Match Your Artist', 'Our concierge confirms a vetted EMBACCI artist suited to your style and complexion.', '.08s'],
  ['03', 'We Come to You', 'Your artist arrives on time, fully equipped, for a luxurious at-your-door experience.', '.16s'],
]

const SERVICES = [
  ['Full Glam Makeup', '0s'],
  ['Bridal & Wedding Packages', '.06s'],
  ['Event & Red-Carpet Glam', '.12s'],
  ['Corporate & Diplomatic Glam', '0s'],
  ['Photoshoot & Media Makeup', '.06s'],
  ['VIP Private Appointments', '.12s'],
]

const AIRBRUSH_FEATURES = [
  'Flawless, smooth finish',
  'Long-lasting wear',
  'Sweat-resistant coverage',
  'Perfect for weddings, events, and media',
]

const OCCASIONS = [
  ['/assets/occasion-weddings.jpg', 'Weddings', '50% 28%', '0s'],
  ['/assets/occasion-events.jpg', 'Events & Parties', '50% 30%', '.06s'],
  ['/assets/occasion-photoshoot.jpg', 'Photoshoots', '50% 30%', '.12s'],
  ['/assets/occasion-hotel.jpg', 'Hotel Concierge', '50% 30%', '.18s'],
]

const COVERAGE = ['East Africa', 'United States', 'Hotels & Resorts', 'Private Events', 'Destination Weddings']

export default function MakeupOnDemand() {
  useReveal()

  const [name, setName] = useState('')
  const [occ, setOcc] = useState('')
  const [date, setDate] = useState('')
  const [loc, setLoc] = useState('')
  const [note, setNote] = useState('')
  const [statusMsg, setStatusMsg] = useState('')

  const submitBooking = () => {
    const n = name.trim()
    const o = occ.trim()
    if (!n || !o) {
      setStatusMsg('Please add your name and occasion to continue.')
      return
    }
    // Prefill the booker's name on the Calendly scheduling page, then open it.
    const url = `${BOOK_URL}&name=${encodeURIComponent(n)}`
    setStatusMsg('Opening the booking calendar…')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="makeup" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '74vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', padding: 'clamp(150px,18vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: 'var(--bg)' }}>
          <img src="/assets/mod-hero.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 28%', animation: 'embZoom 24s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,9,8,.62) 0%, rgba(10,9,8,.4) 38%, rgba(10,9,8,.82) 100%)' }} />
        </div>
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Concierge Makeup Services</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,7vw,108px)', lineHeight: .95, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
            Makeup,<br /><span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>on demand.</span>
          </h1>
          <p style={{ maxWidth: 560, margin: '28px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: '#CFC6B8' }}>Available on-demand for hotels, weddings, corporate events, and high-profile occasions. Our artists bring elegance and expertise directly to your door. Book in moments.</p>
          <div style={{ marginTop: 36 }}>
            <a {...bookLinkProps} className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book an Artist</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <div style={{ ...eyebrow, marginBottom: 18 }}>Effortless Booking</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
            Three steps to <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>flawless.</span>
          </h2>
        </Reveal>
        <div className="emb-g3" style={{ gap: 20 }}>
          {STEPS.map(([num, title, body, delay]) => (
            <Reveal key={num} delay={delay} style={stepCard}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 42, color: 'var(--accent)', lineHeight: 1, marginBottom: 20 }}>{num}</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 23, margin: '0 0 12px', color: 'var(--text-bright)' }}>{title}</h3>
              <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: 0 }}>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LUXURY CONCIERGE SERVICES */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ marginBottom: 48, maxWidth: 760 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>Luxury Concierge</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,50px)', lineHeight: 1.04, margin: '0 0 22px', color: 'var(--text-bright)' }}>
              Makeup <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>on-demand.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: 0 }}>EMBACCI offers premium, on-demand beauty services delivered directly to your home, hotel, event venue, or corporate location. Our concierge makeup service includes:</p>
          </Reveal>
          <div className="emb-g3" style={{ gap: 18 }}>
            {SERVICES.map(([label, delay]) => (
              <Reveal key={label} delay={delay} style={serviceCard}>
                <span style={diamond}>◆</span>
                <span style={serviceText}>{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AIRBRUSH TECHNOLOGY INCLUDED */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
                <span style={eyebrow}>Airbrush Technology Included</span>
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.08, margin: '0 0 22px', color: 'var(--text-bright)' }}>
                A flawless, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>camera-ready finish.</span>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: '0 0 18px' }}>All concierge services can include professional airbrush makeup, offering a finish that lasts from first look to last dance.</p>
              <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-6)', margin: 0 }}>Airbrush is performed by trained EMBACCI artists certified in advanced airbrush techniques.</p>
            </Reveal>
            <Reveal style={{ display: 'flex', flexDirection: 'column' }}>
              {AIRBRUSH_FEATURES.map((f, i) => (
                <div key={f} style={i === AIRBRUSH_FEATURES.length - 1 ? featRow : featRowBorder}>
                  <span style={{ color: 'var(--accent)', fontSize: 18 }}>◆</span>
                  <span style={{ fontSize: 16, color: 'var(--muted-1)' }}>{f}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>For Every Occasion</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,50px)', lineHeight: 1.04, margin: 0, color: 'var(--text-bright)' }}>
              Beauty for <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>every moment.</span>
            </h2>
          </Reveal>
          <div className="emb-g4" style={{ gap: 16 }}>
            {OCCASIONS.map(([src, label, pos, delay]) => (
              <Reveal key={label} delay={delay} style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--panel-3)', display: 'flex', alignItems: 'flex-end', padding: 20 }}>
                <img src={src} alt={label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(10,9,8,.78))' }} />
                <span style={occLabel}>{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book" style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', borderTop: '1px solid rgba(199,122,72,.25)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-8%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 65%)' }} />
        <div className="emb-bookgrid" style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(64px,9vh,120px) clamp(18px,5vw,60px)', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#C99A78', marginBottom: 20 }}>Request a Booking</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 1.0, margin: '0 0 22px', color: 'var(--text-bright)' }}>
              Book an artist in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>moments.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#C5BBAD', maxWidth: 380, margin: '0 0 30px' }}>Fill in your details and we'll confirm your artist instantly via WhatsApp. No hassle, no delays.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="https://wa.me/254707482502" className="link-accent" style={contactLink}><span style={contactDot} />WhatsApp +254 707 482 502</a>
              <a href="tel:+18888206671" className="link-accent" style={contactLink}><span style={contactDot} />Call 888-820-6671</a>
            </div>
          </Reveal>
          <Reveal delay=".08s" style={{ background: 'rgba(10,9,8,.5)', border: '1px solid rgba(244,238,227,.12)', padding: 'clamp(26px,3vw,44px)' }}>
            <div className="emb-form2" style={{ gap: 16 }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={fieldLabel}>Your Name</label>
                <input className="emb-input" type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label style={fieldLabel}>Occasion</label>
                <select className="emb-input" value={occ} onChange={(e) => setOcc(e.target.value)}>
                  <option value="">Select type</option>
                  <option>Wedding</option>
                  <option>Party / Event</option>
                  <option>Photoshoot</option>
                  <option>Hotel Concierge</option>
                  <option>Casual</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={fieldLabel}>Date</label>
                <input className="emb-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={fieldLabel}>Location</label>
                <input className="emb-input" type="text" placeholder="City / venue" value={loc} onChange={(e) => setLoc(e.target.value)} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={fieldLabel}>Notes <span style={{ color: '#6f675c' }}>(optional)</span></label>
                <input className="emb-input" type="text" placeholder="Group size, style, timing…" value={note} onChange={(e) => setNote(e.target.value)} />
              </div>
            </div>
            <button onClick={submitBooking} className="btn-primary" style={{ marginTop: 22, width: '100%', background: 'var(--accent)', color: 'var(--bg)', padding: 18, border: 'none', fontFamily: 'var(--sans)', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>Book a Call</button>
            <div style={{ fontSize: 12, color: 'var(--muted-6)', marginTop: 14, textAlign: 'center' }}>{statusMsg}</div>
          </Reveal>
        </div>
      </section>

      {/* COVERAGE */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
        <Reveal>
          <div style={{ ...eyebrow, marginBottom: 18 }}>Where We Serve</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,46px)', lineHeight: 1.1, margin: '0 0 34px', color: 'var(--text-bright)' }}>
            On-demand across <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>two continents.</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {COVERAGE.map((c) => <span key={c} style={coverageChip}>{c}</span>)}
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
