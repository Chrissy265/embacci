import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import Reveal from '../components/Reveal.jsx'
import useReveal from '../hooks/useReveal.js'

const chip = { border: '1px solid rgba(244,238,227,.16)', padding: '11px 18px', fontSize: 13, color: '#D8CFC2' }
const chipCaps = { border: '1px solid rgba(244,238,227,.16)', padding: '11px 20px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }
const region = { border: '1px solid rgba(244,238,227,.16)', padding: '10px 18px', fontSize: '11.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-1)' }
const historyP = { fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)' }
const historyNum = { fontFamily: 'var(--serif)', fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1, color: 'var(--accent)' }
const historyH3 = { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(20px,2.4vw,28px)', margin: '0 0 16px', color: 'var(--text-bright)' }
const missionItem = { display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(244,238,227,.1)' }

const TEAM = [
  {
    img: 'team-marta', name: 'Marta Worku', title: 'CFO & Management Director',
    desc: "Leading EMBACCI's Ethiopian operations, Marta brings strategic vision and a deep commitment to artistry, culture, and five-star service across East Africa.",
    delay: '0s', pos: null,
  },
  {
    img: 'team-wongel', name: 'Wongel Wasihun', title: 'Beauty Project Director, Ethiopia',
    desc: "Directing EMBACCI's beauty projects in Ethiopia, Wongel pairs creative direction with flawless execution — shaping signature looks and elevating every client experience.",
    delay: '.08s', pos: null,
  },
  {
    img: 'team-beena', name: 'Beena Pandya', title: 'Kenya Makeup Director',
    desc: "Heading EMBACCI's makeup artistry in Kenya, Beena blends technical mastery with an eye for timeless glamour — delivering refined, camera-ready beauty for every occasion.",
    delay: '.16s', pos: '50% 18%',
  },
  {
    img: 'team-mihret', name: 'Mihret Mengiste', title: 'Fashion Director, Ethiopia',
    desc: "Shaping EMBACCI's fashion vision in Ethiopia, Mihret fuses contemporary style with cultural heritage — styling looks that celebrate elegance and individuality.",
    delay: '0s', pos: '50% 22%',
  },
  {
    img: 'team-mahlet', name: 'Mahlet Wolde', title: 'Co-Owner & Admin Director, Ethiopia',
    desc: "As Co-Owner and Admin Director, Mahlet steers EMBACCI's operations and governance in Ethiopia — building the structure and stability behind every flawless experience.",
    delay: '.08s', pos: '50% 22%',
  },
  {
    img: 'team-kristufar', name: 'Kristufar Tariq', title: 'Owner & Policy Coordinator, US / Ethiopia',
    desc: "As Owner and Policy Coordinator across the US and Ethiopia, Kristufar guides EMBACCI's strategy and standards — bridging two markets with vision and integrity.",
    delay: '.16s', pos: '50% 22%',
  },
  {
    img: 'team-christina', name: 'Christina Beckford', title: 'IT Director, USA',
    desc: "Leading EMBACCI's technology in the USA, Christina builds the digital backbone behind the brand — from the booking platform to the systems that power beauty on demand.",
    delay: '0s', pos: '50% 18%',
  },
]

export default function About() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--sans)', overflowX: 'hidden' }}>
      <Nav active="about" />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '74vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', padding: 'clamp(150px,20vh,190px) clamp(18px,5vw,60px) clamp(54px,8vh,90px)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: 'var(--bg)' }}>
          <iframe
            src="https://www.youtube.com/embed/Adq4AqKDK6c?autoplay=1&mute=1&loop=1&playlist=Adq4AqKDK6c&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1"
            title="EMBACCI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: 'absolute', top: '50%', left: '50%', width: '100vw', height: '56.25vw', minHeight: '100%', minWidth: '177.78vh', transform: 'translate(-50%,-50%)', border: 0, pointerEvents: 'none' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,9,8,.72) 0%, rgba(10,9,8,.4) 40%, rgba(10,9,8,.78) 100%)' }} />
        </div>
        <div className="emb-rev in" style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={{ width: 42, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#D9C7B6' }}>Our Story</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(40px,7vw,104px)', lineHeight: .96, letterSpacing: '-0.012em', margin: 0, color: 'var(--text-bright)' }}>
            Elegance, Born<br />in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Ethiopia.</span>
          </h1>
          <p style={{ maxWidth: 560, margin: '28px 0 0', fontSize: 'clamp(15px,1.3vw,18px)', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-2)' }}>
            A premier beauty concierge brand with a five-star reputation across the East African beauty industry — now bringing luxury, on-demand artistry to the world.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
        <div className="emb-g2" style={{ gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.7vw,50px)', lineHeight: 1.08, margin: '0 0 26px', color: 'var(--text-bright)' }}>
              A beauty concierge brand thriving across <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>two continents.</span>
            </h2>
            <p style={{ ...historyP, margin: '0 0 20px' }}>EMBACCI INTERNATIONAL specializes in delivering luxurious, on-demand makeup and styling services to four- and five-star hotels, elite events, weddings, conferences, and private gatherings. We bring elegance and expertise directly to your door.</p>
            <p style={{ ...historyP, margin: 0 }}>Rooted in Ethiopian heritage and built for a global stage, we celebrate beauty in every complexion — honoring culture, craftsmanship, and the modern woman.</p>
          </Reveal>
          <Reveal style={{ position: 'relative' }}>
            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--panel-3)' }}>
              <img src="/assets/founders.jpg" alt="EMBACCI International" style={{ width: '100%', height: 'clamp(420px,56vh,600px)', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(10,9,8,.66))' }} />
              <div style={{ position: 'absolute', left: 24, bottom: 22 }}>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--text-bright)' }}>Born in Addis Ababa</div>
                <div style={{ fontSize: '10.5px', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C9B7A6', marginTop: 6 }}>Heritage &amp; Vision</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: -22, right: -10, width: 84, height: 108, border: '1px solid rgba(199,122,72,.5)', zIndex: -1 }} />
          </Reveal>
        </div>
      </section>

      {/* OUR HISTORY */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(20px,3vh,32px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>Our History</span>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.7vw,50px)', lineHeight: 1.08, margin: '0 0 18px', color: 'var(--text-bright)' }}>
              The EMBACCI <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>story.</span>
            </h2>
            <p style={{ fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-5)', margin: 0 }}>A multicultural beauty company — born in the U.S., rooted in Africa</p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vh,60px)', marginTop: 'clamp(40px,6vh,70px)' }}>

            {/* 01 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>01</div>
              <div>
                <h3 style={historyH3}>Our Beginning</h3>
                <p style={{ ...historyP, margin: '0 0 16px' }}>EMBACCI International was founded with a simple but powerful belief: beauty should be accessible, inclusive, and culturally intelligent.</p>
                <p style={{ ...historyP, margin: '0 0 16px' }}>What began as a small, on-demand beauty concierge service in the United States quickly evolved into a multinational beauty and wellness company serving clients across the U.S., Ethiopia, and Kenya. The founders recognized a major gap in the global beauty industry — a lack of professional services and products designed for multicultural skin tones and diverse beauty needs.</p>
                <p style={{ ...historyP, margin: 0 }}>EMBACCI was created to fill that gap.</p>
              </div>
            </Reveal>

            {/* 02 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>02</div>
              <div>
                <h3 style={historyH3}>Our Evolution</h3>
                <p style={{ ...historyP, margin: '0 0 20px' }}>Over the years, EMBACCI expanded from a service-based brand into a full beauty ecosystem, offering:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  <span style={chip}>Luxury on-demand makeup &amp; airbrush services</span>
                  <span style={chip}>Beauty event production</span>
                  <span style={chip}>Artist training &amp; certification</span>
                  <span style={chip}>International product distribution</span>
                  <span style={chip}>Corporate hospitality partnerships</span>
                  <span style={chip}>Government &amp; diplomatic beauty services</span>
                </div>
                <p style={{ ...historyP, margin: 0 }}>This evolution positioned EMBACCI as a bridge between the U.S. and African beauty markets, bringing world-class technology, training, and standards to emerging regions.</p>
              </div>
            </Reveal>

            {/* 03 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>03</div>
              <div>
                <h3 style={historyH3}>Our East Africa Expansion</h3>
                <p style={{ ...historyP, margin: '0 0 20px' }}>EMBACCI's strongest growth came from its expansion into Ethiopia and Kenya, where demand for high-quality beauty services and training was rapidly increasing. The company introduced:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  <span style={chip}>Airbrush makeup technology</span>
                  <span style={chip}>Professional artist training programs</span>
                  <span style={chip}>Beauty school partnerships</span>
                  <span style={chip}>Salon &amp; hotel collaborations</span>
                  <span style={chip}>Product distribution channels</span>
                </div>
                <p style={{ ...historyP, margin: 0 }}>This expansion created new opportunities for local artists, empowered women in the beauty workforce, and elevated beauty standards across the region.</p>
              </div>
            </Reveal>

            {/* 04 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>04</div>
              <div>
                <h3 style={historyH3}>Our Mission</h3>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px,2vw,24px)', lineHeight: 1.4, color: 'var(--text-bright)', margin: '0 0 22px' }}>To empower beauty through culture, care, and connection.</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={missionItem}><span style={{ color: 'var(--accent)', fontSize: 15 }}>◆</span><span style={{ fontSize: '15.5px', color: '#D8CFC2' }}>Celebrate multicultural beauty</span></div>
                  <div style={missionItem}><span style={{ color: 'var(--accent)', fontSize: 15 }}>◆</span><span style={{ fontSize: '15.5px', color: '#D8CFC2' }}>Train and elevate the next generation of artists</span></div>
                  <div style={missionItem}><span style={{ color: 'var(--accent)', fontSize: 15 }}>◆</span><span style={{ fontSize: '15.5px', color: '#D8CFC2' }}>Bring world-class beauty technology to Africa</span></div>
                  <div style={missionItem}><span style={{ color: 'var(--accent)', fontSize: 15 }}>◆</span><span style={{ fontSize: '15.5px', color: '#D8CFC2' }}>Build global bridges between the U.S. and African markets</span></div>
                  <div style={{ ...missionItem, borderBottom: 'none' }}><span style={{ color: 'var(--accent)', fontSize: 15 }}>◆</span><span style={{ fontSize: '15.5px', color: '#D8CFC2' }}>Create economic opportunities for women and youth</span></div>
                </div>
              </div>
            </Reveal>

            {/* 05 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>05</div>
              <div>
                <h3 style={historyH3}>Our Vision</h3>
                <p style={{ ...historyP, margin: '0 0 20px' }}>To become the world's leading multicultural beauty concierge brand, expanding across:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  <span style={chipCaps}>North America</span>
                  <span style={chipCaps}>South America</span>
                  <span style={chipCaps}>The Caribbean</span>
                  <span style={chipCaps}>Africa</span>
                </div>
                <p style={{ ...historyP, margin: 0 }}>EMBACCI aims to redefine beauty on demand with speed, precision, and cultural expertise.</p>
              </div>
            </Reveal>

            {/* 06 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>06</div>
              <div>
                <h3 style={historyH3}>Our Leadership</h3>
                <p style={{ ...historyP, margin: '0 0 20px' }}>EMBACCI International is led by a team with deep experience in:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  <span style={chip}>Beauty &amp; wellness</span>
                  <span style={chip}>International business</span>
                  <span style={chip}>Government contracting</span>
                  <span style={chip}>Event production</span>
                  <span style={chip}>Training &amp; talent development</span>
                </div>
                <p style={{ ...historyP, margin: 0 }}>The company's leadership brings together U.S. operational excellence with East African cultural insight — creating a brand that is both global and deeply rooted.</p>
              </div>
            </Reveal>

            {/* 07 */}
            <Reveal style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 'clamp(18px,3vw,40px)', alignItems: 'start' }}>
              <div style={historyNum}>07</div>
              <div>
                <h3 style={historyH3}>Our Brand Today</h3>
                <p style={{ ...historyP, margin: '0 0 20px' }}>Today, EMBACCI stands as a multinational beauty powerhouse, known for:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  <span style={chip}>Airbrush technology excellence</span>
                  <span style={chip}>High-level artist training</span>
                  <span style={chip}>Luxury beauty concierge services</span>
                  <span style={chip}>International product distribution</span>
                  <span style={chip}>Corporate &amp; government partnerships</span>
                  <span style={chip}>Presence in the U.S., Ethiopia &amp; Kenya</span>
                </div>
                <p style={{ ...historyP, margin: 0 }}>The brand continues to grow, innovate, and expand its footprint across the continent and beyond.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(50px,7vh,84px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
              <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>Our People</span>
              <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(28px,3.7vw,50px)', lineHeight: 1.08, margin: 0, color: 'var(--text-bright)' }}>
              Meet the <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Team.</span>
            </h2>
          </Reveal>

          <div className="emb-g3" style={{ gap: 'clamp(40px,5vw,72px)', maxWidth: 1100, margin: '0 auto' }}>
            {TEAM.map((m) => (
              <Reveal key={m.name} delay={m.delay} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ position: 'relative', width: 'clamp(190px,20vw,236px)', aspectRatio: '1/1', marginBottom: 30 }}>
                  <div style={{ position: 'absolute', inset: -12, border: '1px solid rgba(199,122,72,.4)', borderRadius: '50%' }} />
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'var(--panel-3)' }}>
                    <img src={`/assets/${m.img}.png`} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: m.pos || undefined, display: 'block' }} />
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 24, lineHeight: 1.1, margin: '0 0 8px', color: 'var(--text-bright)' }}>{m.name}</h3>
                <div style={{ fontSize: '11.5px', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>{m.title}</div>
                <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-4)', margin: 0, maxWidth: 320 }}>{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / PROMISE */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)', borderBottom: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(18px,5vw,60px)' }}>
          <div className="emb-g3" style={{ gap: 'clamp(28px,4vw,56px)' }}>
            <Reveal>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)', marginBottom: 18 }}>01</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 26, margin: '0 0 16px', color: 'var(--text-bright)' }}>Our Mission</h3>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-4)', margin: 0 }}>To empower beauty through culture, care, and connection — serving the African diaspora and global communities with dignity and distinction.</p>
            </Reveal>
            <Reveal delay=".08s">
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)', marginBottom: 18 }}>02</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 26, margin: '0 0 16px', color: 'var(--text-bright)' }}>Our Vision</h3>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-4)', margin: 0 }}>To become the world's most trusted on-demand luxury beauty brand — a global name synonymous with Ethiopian elegance and five-star service.</p>
            </Reveal>
            <Reveal delay=".16s">
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)', marginBottom: 18 }}>03</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 26, margin: '0 0 16px', color: 'var(--text-bright)' }}>Our Promise</h3>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-4)', margin: 0 }}>Luxury you can feel — flawless artistry, ethical products, and an experience tailored to every occasion and every complexion.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ maxWidth: 1040, margin: '0 auto', padding: 'clamp(80px,12vh,150px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 64, lineHeight: 1, color: 'var(--accent)', marginBottom: 10 }}>&ldquo;</div>
          <p style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(24px,3.4vw,44px)', lineHeight: 1.35, color: 'var(--text-bright)', margin: '0 0 28px' }}>
            Inspired by Ethiopia. Designed for the world. We don't just apply beauty — we honor identity, heritage, and self-love.
          </p>
          <div style={{ fontSize: '11.5px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--muted-5)' }}>EMBACCI International</div>
        </Reveal>
      </section>

      {/* GLOBAL VISION */}
      <section style={{ background: 'var(--panel)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(70px,11vh,130px) clamp(18px,5vw,60px)' }}>
          <div className="emb-g2" style={{ gap: 'clamp(36px,6vw,90px)', alignItems: 'start' }}>
            <Reveal>
              <div style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82', marginBottom: 18 }}>The Rollout</div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(72px,12vw,150px)', lineHeight: .86, letterSpacing: '-0.02em', color: 'var(--accent)' }}>2026</div>
              <div style={{ fontSize: '11.5px', letterSpacing: '.34em', textTransform: 'uppercase', color: 'var(--muted-5)', marginTop: 14 }}>Global Rollout</div>
            </Reveal>
            <Reveal delay=".1s">
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(26px,3.4vw,46px)', lineHeight: 1.12, margin: '0 0 24px', color: 'var(--text-bright)' }}>Our Global Vision</h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'var(--muted-3)', margin: '0 0 34px' }}>
                Operating from East Africa and the United States, EMBACCI INTERNATIONAL is expanding across North America, South America, the Caribbean, and the broader African diaspora — with a commitment to excellence, cultural pride, and transformative beauty experiences.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['East Africa', 'United States', 'North America', 'South America', 'The Caribbean', 'African Diaspora'].map((r) => (
                  <span key={r} style={region}>{r}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INVESTMENT PITCH DECK */}
      <section id="pitch" style={{ background: 'var(--bg)', borderTop: '1px solid rgba(244,238,227,.07)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vh,140px) clamp(18px,5vw,60px)' }}>
          <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 28, marginBottom: 60 }}>
            <div style={{ maxWidth: 680 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
                <span style={{ fontSize: '11.5px', letterSpacing: '.42em', textTransform: 'uppercase', color: '#B89A82' }}>For Investors</span>
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.4vw,60px)', lineHeight: 1.02, margin: '0 0 22px', color: 'var(--text-bright)' }}>
                Investment Pitch <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Deck.</span>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: 'var(--muted-3)', margin: 0 }}>
                A closer look at the EMBACCI opportunity — our business model, proprietary airbrush technology, and the mobile platform bringing luxury beauty on demand to the world.
              </p>
            </div>
            <a
              href="/assets/EMBACCI-Pitch-Deck.pdf"
              download
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--accent)', color: 'var(--bg)', padding: '17px 30px', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              <span style={{ fontSize: 15 }}>↓</span> Download Pitch Deck (PDF)
            </a>
          </Reveal>

          {/* 01 Business Model */}
          <Reveal style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 8 }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)' }}>01</span>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.1, margin: 0, color: 'var(--text-bright)' }}>Business Model</h3>
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: '0 0 24px', paddingLeft: 38, maxWidth: 640 }}>How EMBACCI creates value across on-demand services, premium products, training, and technology.</p>
            <VideoEmbed videoId="qKZlxy2Zu0s" label="Business Model" aspect="16/9" />
          </Reveal>

          {/* 02 Makeup Airbrush Technology */}
          <Reveal style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 8 }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)' }}>02</span>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.1, margin: 0, color: 'var(--text-bright)' }}>Makeup Airbrush Technology</h3>
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: '0 0 24px', paddingLeft: 38, maxWidth: 640 }}>The future of beauty — precision, speed, and luxury for every complexion.</p>
            <VideoEmbed videoId="M8hOU6fvd74" label="Airbrush Technology" aspect="16/9" />
          </Reveal>

          {/* 03 EMBACCI Mobile App */}
          <Reveal style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 8 }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--accent)' }}>03</span>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.1, margin: 0, color: 'var(--text-bright)' }}>EMBACCI Mobile App</h3>
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-4)', margin: '0 0 24px', paddingLeft: 38, maxWidth: 640 }}>Beauty on demand, in the palm of your hand — booking your artist in moments.</p>
            <VideoEmbed videoId="IfzVA-wQZYk" label="Mobile App" aspect="16/9" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg,#1a120c,#0f0c0a)', overflow: 'hidden', borderTop: '1px solid rgba(199,122,72,.25)' }}>
        <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(199,122,72,.16), transparent 65%)' }} />
        <Reveal style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: 'clamp(70px,11vh,130px) clamp(18px,5vw,60px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(30px,4.6vw,62px)', lineHeight: 1.04, margin: '0 0 26px', color: 'var(--text-bright)' }}>
            Experience beauty, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>on demand.</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Link to="/makeup-on-demand" className="btn-primary" style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>Book an Artist</Link>
            <Link to="/#connect" className="btn-ghost" style={{ border: '1px solid rgba(244,238,227,.32)', color: 'var(--text-bright)', padding: '17px 34px', fontSize: '12.5px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
