import { useEffect, useRef } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  const dirClass =
    direction === 'left'  ? 'reveal-left'  :
    direction === 'right' ? 'reveal-right' :
    'reveal'

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.setProperty('--reveal-delay', `${delay}ms`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <Tag ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </Tag>
  )
}
