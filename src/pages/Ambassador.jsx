import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'

const eyebrow = { fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }
const bodyP = { fontSize: 17, fontWeight: 300, lineHeight: 1.9, color: 'var(--muted-3)' }
const card = { background: 'var(--panel-2)', border: '1px solid rgba(244,238,227,.08)', padding: '32px 28px' }
const listRow = { display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(244,238,227,.1)' }
const listRowLast = { display: 'flex', gap: 16, padding: '16px 0' }
const diamond = { color: 'var(--accent)', fontSize: 15, flex: 'none', lineHeight: 1.6 }

const WHY = [
  ['Global Luxury Reputation', 'EMBACCI is known across continents for its high standards, multicultural mastery, and flawless execution. Artists who join us instantly elevate their professional brand.', '0s'],
  ['Elite Professional Network', 'You become part of a curated team of disciplined, high-performing artists committed to excellence and luxury-grade service.', '.06s'],
  ['Premium Concierge Assignments', 'From VIP clients to diplomats, executives, and international travelers, EMBACCI artists serve individuals who expect the highest level of professionalism and artistry.', '.12s'],
  ['Advanced Airbrush Technology Training', "EMBACCI's signature airbrush system is a global differentiator. Artists receive exclusive training in the latest beauty-tech innovations, ensuring they stay ahead of the industry.", '0s'],
  ['International Reach & Mobility', 'With operations across Africa, Europe, and the Americas, EMBACCI offers opportunities to work across borders, cultures, and luxury hospitality environments.', '.06s'],
  ['Multiple Income Pathways', 'Our revenue-share model, concierge tiers, and hospitality partnerships create consistent earning potential for serious artists.', '.12s'],
]

const REPRESENT = [
  'Luxury without compromise',
  'Cultural intelligence and global beauty standards',
  'Professional discipline and consistency',
  'Innovation through technology-driven artistry',
  'A commitment to flawless client experiences',
]

const ROOTED = [
  'Flawless airbrush results for every complexion',
  'Luxury on-demand beauty services',
  'Elite artist training and certification',
  'A global footprint across multiple continents',
  'Partnerships with hotels, Airbnbs, embassies, and corporate events',
]

export default function Ambassador() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="ambassador" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', padding: 'clamp(130px,18vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(120% 100% at 30% 25%, #2a1d14 0%, #0f0b09 55%, #0A0908 100%)' }} />
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Become an EMBACCI Ambassador</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(38px,5.6vw,92px)', lineHeight: .96, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
            Becoming an EMBACCI<br /><span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Makeup Ambassador.</span>
          </h1>
          <p style={{ maxWidth: 620, margin: '28px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: '#CFC6B8' }}>
            An invitation to join a prestigious network of beauty professionals shaping the future of premium concierge services.
          </p>
        </div>
      </section>

      {/* THE PATH */}
      <section style={{ maxWidth: 880, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <Reveal>
          <div style={{ ...eyebrow, marginBottom: 22 }}>The Path</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.8vw,52px)', lineHeight: 1.1, margin: '0 0 28px', color: 'var(--text-bright)' }}>
            The path to becoming an <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>EMBACCI Ambassador.</span>
          </h2>
          <p style={{ ...bodyP, margin: 0 }}>
            Joining EMBACCI International as an On-Demand Makeup Artist and Airbrush Specialist means stepping into a world where luxury, global mobility, and elite artistry come together. This is not just a role. It is an invitation to join a prestigious network of beauty professionals shaping the future of premium concierge services.
          </p>
        </Reveal>
      </section>

      {/* WHY ARTISTS CHOOSE EMBACCI */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ marginBottom: 'clamp(40px,6vh,60px)', maxWidth: 760 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>The Advantage</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.04, margin: 0, color: 'var(--text-bright)' }}>
              Why artists choose <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>EMBACCI International.</span>
            </h2>
          </Reveal>
          <div className="emb-g3" style={{ gap: 22 }}>
            {WHY.map(([title, body, delay]) => (
              <Reveal key={title} delay={delay} style={card}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)', marginBottom: 16 }}>◆</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22, lineHeight: 1.2, margin: '0 0 14px', color: 'var(--text-bright)' }}>{title}</h3>
                <p style={{ fontSize: '14.5px', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted-4)', margin: 0 }}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT MEANS TO REPRESENT */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={eyebrow}>The Standard</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.6vw,48px)', lineHeight: 1.1, margin: '0 0 24px', color: 'var(--text-bright)' }}>
              What it means to <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>represent EMBACCI.</span>
            </h2>
            <p style={{ ...bodyP, fontSize: 16, margin: 0 }}>
              As an EMBACCI Ambassador, you embody more than artistry. You are not simply applying makeup. You are delivering a premium, unforgettable transformation.
            </p>
          </Reveal>
          <Reveal delay=".1s">
            {REPRESENT.map((item, i) => (
              <div key={item} style={i === REPRESENT.length - 1 ? listRowLast : listRow}>
                <span style={diamond}>◆</span>
                <span style={{ fontSize: 16, color: 'var(--muted-1)' }}>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* A BRAND ROOTED IN EXCELLENCE */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vh,60px)' }}>
            <div style={{ ...eyebrow, marginBottom: 18 }}>The Legacy</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1.04, margin: 0, color: 'var(--text-bright)' }}>
              A brand rooted in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>excellence.</span>
            </h2>
          </Reveal>
          <Reveal style={{ maxWidth: 760, margin: '0 auto 44px' }}>
            <p style={{ ...bodyP, fontSize: 16, textAlign: 'center', margin: 0, color: 'var(--muted-3)' }}>
              EMBACCI International has built a reputation for:
            </p>
          </Reveal>
          <div className="emb-g2" style={{ gap: 'clamp(16px,3vw,40px)', maxWidth: 900, margin: '0 auto' }}>
            {ROOTED.map((item, i) => (
              <Reveal key={item} delay={`${i * 0.06}s`} style={{ display: 'flex', gap: 16, padding: '18px 0', borderBottom: '1px solid rgba(244,238,227,.1)' }}>
                <span style={diamond}>◆</span>
                <span style={{ fontSize: 16, color: 'var(--muted-1)' }}>{item}</span>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 'clamp(44px,7vh,72px)' }}>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(20px,2.6vw,32px)', lineHeight: 1.4, color: 'var(--text-bright)', margin: 0, maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' }}>
              From Addis Ababa to Paris, Nairobi to New York, Lagos to Los Angeles, EMBACCI is where beauty lives. Everywhere.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', overflow: 'hidden', borderTop: '1px solid rgba(199,122,72,.25)' }}>
        <Reveal style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(70px,11vh,130px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <div style={{ ...eyebrow, marginBottom: 22 }}>Join the Future of Luxury Beauty</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.06, margin: '0 0 24px', color: 'var(--text-bright)' }}>
            Your next professional <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>home.</span>
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: '#C5BBAD', maxWidth: 620, margin: '0 auto 36px' }}>
            If you are ready to elevate your artistry, expand your global reach, and join a luxury brand committed to excellence, EMBACCI International is your next professional home.
          </p>
          <Link to="/#connect" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 36px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Apply to Join</Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
