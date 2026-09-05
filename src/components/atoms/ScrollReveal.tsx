'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  amount?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  amount = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: amount },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [amount])

  const animName =
    direction === 'left'  ? 'fadeRight' :
    direction === 'right' ? 'fadeLeft'  :
    direction === 'none'  ? 'fadeIn'    : 'fadeUp'

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={
        inView
          ? { animation: `${animName} ${duration}s ${delay}s cubic-bezier(0.22,1,0.36,1) both` }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  )
}
