// Central image registry.
//
// All app images live in src/assets so Vite fingerprints them at build time
// (e.g. team-beena-v2.jpg -> /assets/team-beena-v2.a1b2c3.jpg). Content changes
// therefore get a NEW url automatically — no manual renames, no stale prod cache.
//
// `import.meta.glob({ eager: true })` imports every file once and gives us the
// hashed URL. We expose `asset(name)` so both static refs and dynamic lookups
// (team photos, gallery slugs) resolve through the same map.

const modules = import.meta.glob('./**/*.{jpg,jpeg,png,mp4,pdf}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// Build a lookup keyed by the path relative to this folder, e.g.
// 'logo-mark.png', 'media/family.jpg', 'shop/airbrush-system.jpg'.
const map = {}
for (const [path, url] of Object.entries(modules)) {
  map[path.replace('./', '')] = url
}

/**
 * Resolve an asset by its path relative to src/assets.
 * Accepts an optional leading 'assets/' or '/assets/' for convenience.
 * Returns the hashed build URL, or '' (with a dev warning) if not found.
 */
export function asset(name) {
  const key = String(name).replace(/^\/?assets\//, '')
  const url = map[key]
  if (!url && import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[assets] missing image: "${name}" (looked up "${key}")`)
  }
  return url || ''
}

export default map
