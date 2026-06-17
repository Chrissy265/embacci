/**
 * Thin wrapper that marks its element as a scroll-reveal target.
 * Pass `as` to change the element, `delay` for a staggered transition.
 * Reveal itself is driven by the page-level useReveal() hook.
 */
export default function Reveal({ as: Tag = 'div', delay, className = '', style, children, ...rest }) {
  return (
    <Tag
      className={`emb-rev ${className}`.trim()}
      style={delay ? { transitionDelay: delay, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
