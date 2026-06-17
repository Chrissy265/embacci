// Single source of truth for the "Book a call" destination.
// All Book Now / Book an Artist / Book a Consultation CTAs link here.
export const BOOK_URL = 'https://calendly.com/eastafrica-embacci/30min?month=2026-06'

// Props to spread onto an <a> so the Calendly link opens safely in a new tab.
export const bookLinkProps = {
  href: BOOK_URL,
  target: '_blank',
  rel: 'noopener noreferrer',
}
