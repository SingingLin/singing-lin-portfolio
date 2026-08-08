import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** 捲動進場動畫的通用包裝：進入視窗時 fade-in + slide-up。 */
function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
