import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  strength?: number
  style?: CSSProperties
}

/**
 * Subtle magnetic pull for primary calls-to-action.
 * Disabled for reduced motion and for coarse pointers.
 */
export default function Magnetic({
  href,
  children,
  className = '',
  external = false,
  strength = 0.16,
  style,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    el.style.transition = [
      'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
      'background-color 300ms ease',
      'border-color 300ms ease',
      'color 300ms ease',
    ].join(', ')

    let frame = 0
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
      })
    }
    const reset = () => {
      el.style.transform = 'translate(0px, 0px)'
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)
    el.addEventListener('blur', reset)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
      el.removeEventListener('blur', reset)
    }
  }, [strength])

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={style}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
