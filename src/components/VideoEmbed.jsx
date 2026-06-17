import { useState } from 'react'

/**
 * Click-to-load YouTube embed (no iframe until the user opts in).
 * Shows a poster/label + play button, then swaps in the autoplay iframe.
 */
export default function VideoEmbed({ videoId, label, aspect = '16/9', style }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: aspect, background: 'var(--panel-3)', overflow: 'hidden', ...style }}>
      {playing ? (
        <iframe
          title={label || 'video'}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={label ? `Play ${label}` : 'Play video'}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, background: 'linear-gradient(160deg,#1a120c,#100c0a)', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ width: 84, height: 84, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" aria-hidden="true">
              <path d="M2 2l24 14L2 30V2z" fill="#0A0908" />
            </svg>
          </span>
          {label && <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--text-bright)' }}>{label}</span>}
        </button>
      )}
    </div>
  )
}
