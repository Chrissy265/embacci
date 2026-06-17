import { useEffect } from 'react'

/**
 * Scroll-reveal: adds `.in` to every `.emb-rev` element when it enters the
 * viewport. Mirrors the DCLogic componentDidMount logic from the prototypes
 * (IntersectionObserver, threshold 0.1, rootMargin '0px 0px -6% 0px', plus a
 * 2.2s fallback that reveals everything). Re-runs whenever `deps` change so
 * elements rendered after a state update (e.g. filtered grids) still reveal.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.emb-rev:not(.in)'))
    const showAll = () => els.forEach((e) => e.classList.add('in'))

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      showAll()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((e) => io.observe(e))
    const fallback = setTimeout(showAll, 2200)

    return () => {
      clearTimeout(fallback)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
