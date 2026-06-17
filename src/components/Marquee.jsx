/**
 * Infinite horizontal marquee. `items` is duplicated so the -50% translate
 * loops seamlessly. Used on Home and Fashion.
 */
export default function Marquee({ items, duration = 32, style }) {
  const run = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', ...style }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', animation: `embMarquee ${duration}s linear infinite` }}>
        {run.map((label, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(20px,2.6vw,34px)', color: 'var(--muted-2)', padding: '0 28px' }}>{label}</span>
            <span style={{ color: 'var(--accent)', fontSize: 10 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
