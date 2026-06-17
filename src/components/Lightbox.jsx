import { useEffect } from 'react'

/**
 * Full-screen image lightbox. Closes on backdrop click, the × button, or Esc.
 * `open`, `src`, `cap`, and `onClose` are controlled by the parent page.
 */
export default function Lightbox({ open, src, cap, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(8,7,6,.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vw', animation: 'embFade .35s ease', cursor: 'zoom-out' }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: '1px solid rgba(244,238,227,.3)', color: 'var(--text-bright)', width: 48, height: 48, fontSize: 24, cursor: 'pointer' }}
      >
        ×
      </button>
      <div style={{ maxWidth: 1100, maxHeight: '84vh', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" style={{ maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block', margin: '0 auto', boxShadow: '0 30px 80px rgba(0,0,0,.6)' }} />
        {cap && <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: '#E8DFD2', marginTop: 18 }}>{cap}</div>}
      </div>
    </div>
  )
}
