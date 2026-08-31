'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
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
  amount = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  const initial = {
    opacity: 0,
    y: direction === 'up'    ?  22 : 0,
    x: direction === 'left'  ? -22 : direction === 'right' ? 22 : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
