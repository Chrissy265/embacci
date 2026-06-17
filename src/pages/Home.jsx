import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Marquee from '../components/Marquee.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'
import { bookLinkProps } from '../config/booking.js'
import { asset } from '../assets/index.js'

// EmailJS config — set these in a .env file (see .env.example). Notification
// emails for the "Let's Talk" form are sent to both EMBACCI inboxes below.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
// Notification recipients. EmailJS's "To Email" field takes ONE address well;
// the second goes in the template's Cc field. Both are also comma-joined for
// the mailto fallback.
const NOTIFY_TO = 'africa@embacci.com'
const NOTIFY_CC = 'eastafrica@embacci.com'
const NOTIFY_EMAILS = `${NOTIFY_TO}, ${NOTIFY_CC}`

const MARQUEE = [
  'Elegance Born in Ethiopia',
  'Luxury You Can Feel',
  'On-Demand Excellence',
  'Inspired by Ethiopia, Designed for the World',
]

const TRUST = ['Free Shipping', '24/7 Support', 'Money-Back Warranty', '100% Eco Products']

const REGIONS = ['East Africa', 'United States', 'North America', 'South America', 'The Caribbean', 'African Diaspora']

const SERVICES = [
  {
    to: '/makeup-on-demand',
    num: '01',
    img: 'media/setting-spray.jpg',
    pos: '50% 35%',
    title: 'Concierge Makeup Services',
    body: 'Available on-demand for hotels, weddings, corporate events, and high-profile occasions. Our artists bring elegance and expertise directly to your door.',
    cta: 'Book Now',
    delay: '0s',
  },
  {
    to: '/skincare',
    num: '02',
    img: 'media/product-salon.jpg',
    pos: '50% 22%',
    title: 'Organic Skincare from Ethiopia',
    body: 'Featuring our exclusive Gob Tree collection, an ancient botanical treasure known for its healing, hydrating, and rejuvenating properties. Sourced ethically and crafted for radiant skin.',
    cta: 'Shop Skincare',
    delay: '.08s',
  },
  {
    to: '/makeup-on-demand',
    num: '03',
    img: 'media/duo-salon.jpg',
    pos: '50% 18%',
    title: 'Styling & Beauty Enhancements',
    body: 'From skincare consultations to personalized styling, our concierge offerings are tailored to elevate your natural beauty with grace and precision.',
    cta: 'Explore Services',
    delay: '.16s',
  },
]

const FAQS = [
  { q: 'How do I book an artist?', a: 'Tell us your occasion, date and location in the form above, or message our concierge on WhatsApp, and we confirm a vetted EMBACCI artist instantly.' },
  { q: 'Where do you provide services?', a: 'We operate on-demand across East Africa and the United States, serving four- and five-star hotels, weddings, conferences, and private events, with a global rollout beginning in 2026.' },
  { q: 'Do you cater to all skin tones?', a: 'Absolutely. Our airbrush system and artistry are formulated for multicultural beauty: deep, olive, and fair tones across neutral, warm, and cool undertones.' },
  { q: 'Can I get certified as an airbrush artist?', a: 'Yes. The EMBACCI Airbrush Training Academy offers 1-Day Intensive and 2-Day Professional Certification programs, recognized across the U.S., Canada, and Africa.' },
]

const GALLERY = [
  { src: 'founders.jpg', cap: 'EMBACCI International · Brand Moments', span: 'big', label: 'Brand Moments', bg: 'var(--panel-3)' },
  { src: 'airbrush.jpg', cap: 'Airbrush Technology · Product', bg: '#EFE9DF' },
  { src: 'media/bts-bridal.jpg', cap: 'Bridal Glam · Addis Ababa', label: 'Bridal Glam' },
  { src: 'media/gala-couple.jpg', cap: 'Editorial · Nairobi', label: 'Editorial' },
  { src: 'media/office.jpg', cap: 'Hotel Concierge · Five-Star', span: 'wide', label: 'Hotel Concierge' },
  { src: 'fashion-look-1.jpg', cap: 'Mercy Collection · Fashion', label: 'Mercy Collection' },
  { src: 'media/family.jpg', cap: 'Bridal Party · Group Glam', label: 'Bridal Party' },
]

const ghostBtn = { display: 'inline-flex', alignItems: 'center', gap: 12, border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }
const primaryBtn = { display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--accent)', color: 'var(--bg)', padding: '17px 32px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }
const eyebrow = { fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: 'var(--muted-3)' }

export default function Home() {
  const [lb, setLb] = useState({ open: false, src: '', cap: '' })
  const [occasion, setOccasion] = useState('')
  const [faqOpen, setFaqOpen] = useState(-1)
  const [connectStatus, setConnectStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', topic: 'Booking', message: '' })
  const heroVideoRef = useRef(null)

  useReveal()

  // Hero video: start playback at the 0:04 mark and loop back to 4s (not 0)
  useEffect(() => {
    const START = 4
    const v = heroVideoRef.current
    if (!v) return
    const seekToStart = () => {
      try { if (v.currentTime < START) v.currentTime = START } catch { /* not seekable yet */ }
    }
    const onLoaded = () => { seekToStart(); v.play?.().catch(() => {}) }
    // Native loop returns to 0, so loop manually back to START.
    const onTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - 0.25) v.currentTime = START
    }
    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('canplay', onLoaded)
    v.addEventListener('timeupdate', onTimeUpdate)
    seekToStart()
    return () => {
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('canplay', onLoaded)
      v.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  const openTile = (src, cap) => {
    if (!src) return
    setLb({ open: true, src, cap })
  }
  const closeLightbox = () => setLb((s) => ({ ...s, open: false }))

  const toggleFaq = (i) => setFaqOpen((cur) => (cur === i ? -1 : i))

  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submitConnect = async (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const topic = (form.topic || 'Booking').trim()
    const msg = form.message.trim()
    if (!name || !email || !msg) {
      setConnectStatus('Please add your name, email, and message.')
      return
    }

    // All form fields, plus the recipients, passed to the EmailJS template.
    // Map in the template: To Email -> {{to_email}}, Cc -> {{cc_email}}.
    const params = {
      to_email: NOTIFY_TO,
      cc_email: NOTIFY_CC,
      from_name: name,
      reply_to: email,
      from_email: email,
      topic,
      subject: `EMBACCI ${topic} Enquiry from ${name}`,
      message: msg,
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Fallback if EmailJS isn't configured yet: open the user's mail app.
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${msg}`)
      setConnectStatus('Opening your email app…')
      window.location.href = `mailto:${NOTIFY_EMAILS}?subject=${encodeURIComponent(params.subject)}&body=${body}`
      return
    }

    try {
      setConnectStatus('Sending…')
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, { publicKey: EMAILJS_PUBLIC_KEY })
      setConnectStatus('Thank you — your message has been sent. Our team will be in touch shortly.')
      setForm({ name: '', email: '', topic: 'Booking', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setConnectStatus('Sorry, something went wrong. Please email us directly at africa@embacci.com.')
    }
  }

  return (
    <div id="top" style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', position: 'relative', overflowX: 'hidden' }}>
      <Nav active="home" />

      {/* ============ HERO ============ */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'var(--bg)', overflow: 'hidden' }}>
          <img
            src={asset('founders.jpg')}
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%', transformOrigin: 'center', animation: 'embZoom 26s ease-in-out infinite alternate' }}
          />
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', border: 0, pointerEvents: 'none' }}
          >
            <source src={asset('hero-video.mp4')} type="video/mp4" />
          </video>
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(10,9,8,.62) 0%, rgba(10,9,8,.18) 32%, rgba(10,9,8,.55) 72%, #0A0908 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(130% 90% at 50% 24%, transparent 38%, rgba(10,9,8,.55))' }} />

        <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: 1320, margin: '0 auto', padding: '0 clamp(18px,5vw,60px) clamp(56px,9vh,108px)' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
              <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Born in Ethiopia · Serving the World</span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,7.4vw,116px)', lineHeight: .95, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
              Beauty Without<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Borders.</span>
            </h1>
            <p style={{ maxWidth: 540, margin: '30px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-2)' }}>
              A five-star beauty concierge brand, delivering premium on-demand makeup &amp; styling to elite hotels, weddings, and events across East Africa and the United States.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 38 }}>
              <a {...bookLinkProps} className="btn-primary" style={primaryBtn}>Book an Artist <span style={{ fontSize: 16 }}>&#8594;</span></a>
              <a href="#services" className="btn-ghost" style={{ ...ghostBtn, fontWeight: 500 }}>Explore the Brand</a>
            </div>
          </Reveal>
        </div>

        <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '9.5px', letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--muted-5)' }}>Scroll</span>
          <span style={{ width: 1, height: 42, background: 'linear-gradient(#9D9285, transparent)', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 14, background: 'var(--accent)', animation: 'embCue 1.8s ease-in-out infinite' }} />
          </span>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div style={{ background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.08)', borderBottom: '1px solid rgba(244,238,227,.08)', padding: '22px 0' }}>
        <Marquee items={MARQUEE} duration={34} />
      </div>

      {/* ============ TRUST STRIP ============ */}
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '30px clamp(18px,5vw,60px)', gap: 18, borderBottom: '1px solid rgba(244,238,227,.08)' }} className="emb-g4">
        {TRUST.map((t) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
            <span style={{ width: 7, height: 7, background: 'var(--accent)', transform: 'rotate(45deg)', flex: 'none' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C5BBAD' }}>{t}</span>
          </div>
        ))}
      </div>

      {/* ============ BRAND STORY ============ */}
      <section className="emb-split" style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(80px,12vh,150px) clamp(18px,5vw,60px)', gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 30 }}>
            <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>Who We Are</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.7vw,52px)', lineHeight: 1.08, letterSpacing: '-0.01em', margin: '0 0 28px', color: 'var(--text-bright)' }}>
            A premier beauty concierge brand, born in Ethiopia &amp; thriving across <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>two continents.</span>
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: '0 0 22px', maxWidth: 560 }}>
            With a five-star reputation in the East African beauty industry, we specialize in delivering luxurious, on-demand makeup and styling services to four- and five-star hotels, elite events, weddings, conferences, and private gatherings.
          </p>
          <div style={{ borderLeft: '2px solid var(--accent)', padding: '6px 0 6px 24px', maxWidth: 540 }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,1.9vw,23px)', fontStyle: 'italic', lineHeight: 1.5, color: '#E8DFD2', margin: 0 }}>
              Our Mission is to empower beauty through culture, care, and connection, serving the African diaspora and global communities with dignity and distinction.
            </p>
          </div>
        </Reveal>
        <Reveal style={{ position: 'relative' }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--panel-3)', border: '1px solid rgba(244,238,227,.08)' }}>
            <img src={asset('who-we-are.jpg')} alt="EMBACCI International founders in traditional Ethiopian attire" style={{ width: '100%', height: 'auto', maxHeight: 'clamp(420px,80vh,760px)', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
            <div style={{ position: 'absolute', left: 24, bottom: 22, right: 24, textShadow: '0 2px 12px rgba(0,0,0,.7)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--text-bright)' }}>Born in Addis Ababa</div>
              <div style={{ fontSize: '10.5px', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C9B7A6', marginTop: 6 }}>Heritage &amp; Vision</div>
            </div>
          </div>
          <div style={{ position: 'absolute', top: -22, right: -10, width: 84, height: 108, border: '1px solid rgba(199,122,72,.5)', zIndex: -1 }} />
        </Reveal>
      </section>

      {/* ============ GLOBAL VISION ============ */}
      <section style={{ position: 'relative', background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,11vh,130px) clamp(18px,5vw,60px)' }}>
          <div className="emb-vision-grid" style={{ gap: 'clamp(36px,6vw,90px)', alignItems: 'start' }}>
            <Reveal>
              <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82', marginBottom: 18 }}>The Rollout</div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(72px,12vw,168px)', lineHeight: .86, letterSpacing: '-0.02em', color: 'var(--accent)' }}>2026</div>
              <div style={{ fontSize: '11.5px', letterSpacing: '.34em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 14 }}>Global Rollout</div>
            </Reveal>
            <Reveal delay=".1s">
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.4vw,46px)', lineHeight: 1.12, margin: '0 0 24px', color: 'var(--text-bright)' }}>Our Global Vision</h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', maxWidth: 620, margin: '0 0 36px' }}>
                Operating from East Africa and the United States, EMBACCI INTERNATIONAL is expanding its reach across North America, South America, the Caribbean, and the broader African diaspora. Our global rollout begins in 2026 with a commitment to excellence, cultural pride, and transformative beauty experiences.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {REGIONS.map((r) => (
                  <span key={r} style={{ border: '1px solid rgba(244,238,227,.16)', padding: '10px 18px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }}>{r}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SIGNATURE SERVICES ============ */}
      <section id="services" style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(80px,12vh,150px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 54 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>What We Offer</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,62px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
              Our Signature <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Services</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', maxWidth: 300 }}>
            Elegance and expertise, brought directly to your door, for every complexion, every occasion.
          </p>
        </Reveal>

        <div className="emb-g3" style={{ gap: 24 }}>
          {SERVICES.map((s) => (
            <Reveal key={s.num} as={Link} to={s.to} delay={s.delay} className="hover-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)' }}>
              <div className="hover-scale" style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
                <img src={asset(s.img)} alt={s.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos || 'center', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,9,8,.15) 0%,rgba(10,9,8,.55) 100%)' }} />
                <div style={{ position: 'absolute', top: 18, left: 18, fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)' }}>{s.num}</div>
              </div>
              <div style={{ padding: '28px 26px 30px' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 24, lineHeight: 1.2, margin: '0 0 14px', color: 'var(--text-bright)' }}>{s.title}</h3>
                <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: '0 0 22px' }}>{s.body}</p>
                <span style={{ fontSize: '11.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 9 }}>{s.cta} <span style={{ fontSize: 15 }}>&#8594;</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ AIRBRUSH FEATURE ============ */}
      <section style={{ position: 'relative', background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div className="emb-g2" style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)', gap: 'clamp(36px,6vw,84px)', alignItems: 'center' }}>
          <Reveal style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(160deg,#EFE9DF,#DDD3C6)', padding: 40, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
              <img src={asset('airbrush.jpg')} alt="EMBACCI Airbrush System" style={{ width: '100%', maxWidth: 420, objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 18, left: 18, background: 'var(--bg)', padding: '9px 16px', fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--accent)' }}>New Technology</div>
          </Reveal>
          <Reveal delay=".1s">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>Airbrush Technology</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.02, margin: '0 0 24px', color: 'var(--text-bright)' }}>
              Precision. Speed. <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Luxury.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', maxWidth: 520, margin: '0 0 30px' }}>
              A next-generation airbrush system delivering even, weightless, camera-ready coverage that blends seamlessly into every skin tone and undertone. The future of beauty, for every complexion.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginBottom: 34 }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 34, color: 'var(--text-bright)' }}>18<span style={{ fontSize: 18 }}>h</span></div>
                <div style={{ fontSize: '10.5px', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 4 }}>Long-Wear</div>
              </div>
              <div style={{ width: 1, background: 'rgba(244,238,227,.12)' }} />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 34, color: 'var(--text-bright)' }}>40<span style={{ fontSize: 18 }}>%</span></div>
                <div style={{ fontSize: '10.5px', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 4 }}>Faster Application</div>
              </div>
              <div style={{ width: 1, background: 'rgba(244,238,227,.12)' }} />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 34, color: 'var(--text-bright)' }}>100<span style={{ fontSize: 18 }}>%</span></div>
                <div style={{ fontSize: '10.5px', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 4 }}>Contact-Free</div>
              </div>
            </div>
            <Link to="/airbrush" className="btn-ghost" style={{ ...ghostBtn, padding: '16px 30px' }}>Discover Airbrush <span style={{ fontSize: 15 }}>&#8594;</span></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(80px,12vh,150px) clamp(18px,5vw,60px)' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', marginBottom: 20 }}>
            <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            <span style={eyebrow}>Our Work</span>
            <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,62px)', lineHeight: 1.02, margin: 0, color: 'var(--text-bright)' }}>
            Gallery &amp; <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Global Impact</span>
          </h2>
        </Reveal>

        <div className="emb-gal" style={{ gridAutoRows: 200 }}>
          {GALLERY.map((g, i) => {
            const span = g.span === 'big' ? { gridColumn: 'span 2', gridRow: 'span 2' } : g.span === 'wide' ? { gridColumn: 'span 2' } : {}
            return (
              <button
                key={i}
                onClick={() => openTile(asset(g.src), g.cap)}
                className="emb-tile"
                style={{ ...span, position: 'relative', overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer', background: g.bg || 'var(--panel-3)' }}
              >
                <img src={asset(g.src)} alt={g.cap} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {g.label && (
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(10,9,8,.66))', display: 'flex', alignItems: 'flex-end', padding: 18 }}>
                    <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--text-bright)' }}>{g.label}</span>
                  </div>
                )}
              </button>
            )
          })}
        </div>
        <Reveal delay=".1s" style={{ textAlign: 'center', marginTop: 46 }}>
          <Link to="/gallery" className="btn-ghost" style={{ ...ghostBtn, padding: '16px 34px', border: '1px solid rgba(244,238,227,.3)' }}>View Full Gallery <span style={{ fontSize: 15 }}>&#8594;</span></Link>
        </Reveal>
      </section>

      {/* ============ BOOKING BAND ============ */}
      <section id="book" style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', borderTop: '1px solid rgba(199,122,72,.25)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: 'clamp(72px,11vh,130px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <Reveal>
            <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#C99A78', marginBottom: 22 }}>Effortless Booking</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(32px,5vw,72px)', lineHeight: 1.0, margin: '0 0 20px', color: 'var(--text-bright)' }}>
              Book an Artist in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>moments.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#C5BBAD', maxWidth: 520, margin: '0 auto 40px' }}>
              Tell us the occasion, and our concierge team confirms your artist with instant scheduling. No hassle, no delays.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', alignItems: 'center', maxWidth: 680, margin: '0 auto' }}>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                aria-label="Occasion type"
                className="emb-input"
                style={{ letterSpacing: '.04em', fontSize: '14.5px', minWidth: 'min(260px, 100%)', width: 'auto', maxWidth: '100%', flex: '1 1 240px', padding: '18px 46px 18px 22px' }}
              >
                <option value="">Select occasion type</option>
                <option value="Wedding">Wedding</option>
                <option value="Party">Party</option>
                <option value="Photoshoot">Photoshoot</option>
                <option value="Casual">Casual</option>
                <option value="Other">Other</option>
              </select>
              <a {...bookLinkProps} className="btn-primary" style={{ ...primaryBtn, padding: '18px 38px', fontWeight: 600 }}>Book Now <span style={{ fontSize: 16 }}>&#8594;</span></a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 26px', justifyContent: 'center', marginTop: 30, fontSize: '12.5px', letterSpacing: '.06em', color: 'var(--muted-4)' }}>
              <span>or reach our concierge directly</span>
              <a href="https://wa.me/251900057336" className="link-accent" style={{ color: 'var(--accent)', textDecoration: 'none' }}>WhatsApp +251 900 057 336</a>
              <a href="tel:+18888206671" className="link-accent" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Call 888-820-6671</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ JOIN TEAM ============ */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,130px) clamp(18px,5vw,60px)' }}>
        <Reveal className="emb-banner-grid" style={{ gap: 'clamp(24px,4vw,40px)', alignItems: 'center', border: '1px solid rgba(244,238,227,.1)', padding: 'clamp(34px,5vw,64px)' }}>
          <div>
            <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82', marginBottom: 20 }}>Join Our Team</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,48px)', lineHeight: 1.08, margin: 0, color: 'var(--text-bright)', maxWidth: 680 }}>
              Are you a talented makeup artist ready to work with a <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>global brand?</span>
            </h2>
          </div>
          <a href="#connect" className="btn-primary" style={{ ...primaryBtn, padding: '18px 36px', whiteSpace: 'nowrap' }}>Become an Ambassador <span style={{ fontSize: 16 }}>&#8594;</span></a>
        </Reveal>
      </section>

      {/* ============ CONNECT: FORM + FAQ ============ */}
      <section id="connect" style={{ position: 'relative', background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-8%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.12), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', marginBottom: 20 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>Get in Touch</span>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.6vw,64px)', lineHeight: 1.0, margin: '0 0 18px', color: 'var(--text-bright)' }}>
              Let&apos;s <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>talk.</span>
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-3)', maxWidth: 520, margin: '0 auto' }}>
              Bookings, partnerships, training, or press, our concierge team responds with care, around the clock.
            </p>
          </Reveal>

          <div className="emb-connect-grid" style={{ gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <a href="tel:+18888206671" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(244,238,227,.1)', textDecoration: 'none' }}>
                  <span style={{ width: 8, height: 8, background: 'var(--accent)', transform: 'rotate(45deg)', flex: 'none' }} />
                  <span><span style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-6)', marginBottom: 5 }}>U.S. Line</span><span style={{ fontSize: 17, color: 'var(--text-bright)' }}>888-820-6671</span></span>
                </a>
                <a href="https://wa.me/251900057336" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(244,238,227,.1)', textDecoration: 'none' }}>
                  <span style={{ width: 8, height: 8, background: 'var(--accent)', transform: 'rotate(45deg)', flex: 'none' }} />
                  <span><span style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-6)', marginBottom: 5 }}>East Africa / WhatsApp</span><span style={{ fontSize: 17, color: 'var(--text-bright)' }}>+251 900 057 336</span></span>
                </a>
                <a href="https://www.instagram.com/embacci_international" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(244,238,227,.1)', textDecoration: 'none' }}>
                  <span style={{ width: 8, height: 8, background: 'var(--accent)', transform: 'rotate(45deg)', flex: 'none' }} />
                  <span><span style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-6)', marginBottom: 5 }}>Instagram</span><span style={{ fontSize: 17, color: 'var(--text-bright)' }}>@embacci_international</span></span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0' }}>
                  <span style={{ width: 8, height: 8, background: 'var(--accent)', transform: 'rotate(45deg)', flex: 'none' }} />
                  <span><span style={{ display: 'block', fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted-6)', marginBottom: 5 }}>Based In</span><span style={{ fontSize: 17, color: 'var(--text-bright)' }}>Addis Ababa · United States</span></span>
                </div>
              </div>
            </Reveal>

            <Reveal delay=".08s" as="form" onSubmit={submitConnect} style={{ background: 'rgba(10,9,8,.5)', border: '1px solid rgba(244,238,227,.12)', padding: 'clamp(26px,3vw,44px)' }}>
              <div className="emb-connect-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 10 }}>Name</label>
                  <input type="text" placeholder="Full name" className="emb-input" value={form.name} onChange={setField('name')} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 10 }}>Email</label>
                  <input type="email" placeholder="you@email.com" className="emb-input" value={form.email} onChange={setField('email')} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 10 }}>I&apos;m reaching out about</label>
                  <select className="emb-input" value={form.topic} onChange={setField('topic')}>
                    <option>Booking</option>
                    <option>Partnership</option>
                    <option>Training</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted-5)', marginBottom: 10 }}>Message</label>
                  <textarea placeholder="Tell us how we can help…" className="emb-input" style={{ resize: 'vertical', minHeight: 120 }} value={form.message} onChange={setField('message')} />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: 22, width: '100%', background: 'var(--accent)', color: 'var(--bg)', padding: 18, border: 'none', fontFamily: 'var(--sans)', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>Send Message</button>
              <div style={{ fontSize: 12, color: 'var(--muted-6)', marginTop: 14, textAlign: 'center' }}>{connectStatus}</div>
            </Reveal>
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 920, margin: 'clamp(64px,9vh,110px) auto 0' }}>
            <Reveal style={{ textAlign: 'center', marginBottom: 44 }}>
              <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82', marginBottom: 18 }}>Questions</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,48px)', lineHeight: 1.04, margin: 0, color: 'var(--text-bright)' }}>
                Frequently <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>asked.</span>
              </h2>
            </Reveal>
            <Reveal>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(244,238,227,.1)' }}>
                  <button
                    onClick={() => toggleFaq(i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, background: 'none', border: 'none', cursor: 'pointer', padding: '24px 0', textAlign: 'left' }}
                  >
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px,2vw,22px)', color: 'var(--text-bright)' }}>{f.q}</span>
                    <span style={{ fontSize: 24, color: 'var(--accent)', flex: 'none', lineHeight: 1 }}>{faqOpen === i ? '−' : '+'}</span>
                  </button>
                  {faqOpen === i && (
                    <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-4)', margin: 0, padding: '0 0 24px', maxWidth: 700 }}>{f.a}</p>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <Lightbox open={lb.open} src={lb.src} cap={lb.cap} onClose={closeLightbox} />
    </div>
  )
}
