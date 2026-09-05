'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Button, Eyebrow } from '@/components/atoms'
import { SolarSystem } from './SolarSystem'

function seededRng(seed: number) {
  let s = seed
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) & 0xffffffff
    return (s >>> 0) / 0x100000000
  }
}

const TWINKLE = [
  { x:  8, y: 18, s: 1.8, d: 3.4 }, { x: 14, y: 52, s: 1.2, d: 4.8 },
  { x: 22, y: 80, s: 1.5, d: 3.1 }, { x: 30, y: 35, s: 1.0, d: 5.2 },
  { x: 42, y: 12, s: 1.4, d: 4.0 }, { x: 38, y: 65, s: 1.6, d: 3.7 },
  { x: 52, y: 22, s: 1.1, d: 5.5 }, { x: 46, y: 78, s: 1.3, d: 4.3 },
  { x: 18, y: 90, s: 1.4, d: 5.1 }, { x: 34, y: 55, s: 1.8, d: 4.7 },
  { x: 58, y: 10, s: 1.1, d: 4.2 }, { x: 24, y: 25, s: 2.0, d: 5.3 },
  { x:  6, y: 68, s: 1.6, d: 3.9 }, { x: 48, y: 90, s: 1.3, d: 4.5 },
  { x: 72, y:  8, s: 1.5, d: 4.0 }, { x: 88, y:  5, s: 1.2, d: 3.7 },
  { x: 64, y: 92, s: 1.7, d: 5.0 }, { x: 82, y: 90, s: 1.3, d: 3.5 },
  { x: 96, y: 12, s: 1.9, d: 4.3 }, { x: 92, y: 94, s: 1.1, d: 4.8 },
]

function TwinklingStars() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true">
      {TWINKLE.map((s, i) => {
        const color = i % 6 === 0 ? '#F2A63D' : i % 7 === 0 ? '#2C8C89' : '#C8D8E8'
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`, top: `${s.y}%`,
              width: s.s, height: s.s,
              backgroundColor: color,
              boxShadow: `0 0 ${s.s * 3}px ${s.s * 1.5}px ${color}66`,
            }}
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.85, 0.08] }}
            transition={{ duration: s.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.55 }}
          />
        )
      })}
    </div>
  )
}

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const draw = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const W = canvas.clientWidth || 1440
      const H = canvas.clientHeight || 640
      canvas.width = W
      canvas.height = H
      ctx.clearRect(0, 0, W, H)

      const isMobile = W < 768
      const rng = seededRng(77)

      const NEBULAE = [
        { x: W * 0.72, y: H * 0.30, r: isMobile ? 80  : 160, rgb: '44,140,180',  a: 0.10 },
        { x: W * 0.92, y: H * 0.18, r: isMobile ? 60  : 120, rgb: '130,60,230',  a: 0.08 },
        { x: W * 0.60, y: H * 0.72, r: isMobile ? 65  : 130, rgb: '60,120,220',  a: 0.07 },
        { x: W * 0.88, y: H * 0.75, r: isMobile ? 60  : 120, rgb: '30,155,130',  a: 0.09 },
        { x: W * 0.75, y: H * 0.50, r: isMobile ? 110 : 220, rgb: '220,140,50',  a: 0.04 },
        { x: W * 0.64, y: H * 0.28, r: isMobile ? 40  :  80, rgb: '180,70,200',  a: 0.06 },
      ]
      NEBULAE.forEach(({ x, y, r, rgb, a }) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0,   `rgba(${rgb},${a})`)
        g.addColorStop(0.5, `rgba(${rgb},${a * 0.4})`)
        g.addColorStop(1,   `rgba(${rgb},0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      })

      const starCount = isMobile ? 350 : 1100
      for (let i = 0; i < starCount; i++) {
        const x = isMobile
          ? rng() * W
          : (rng() > 0.65 ? (W * 0.5 + rng() * W * 0.5) : rng() * W * 0.5)
        const y = rng() * H
        const tier = rng()

        let size: number, alpha: number, r: number, g: number, b: number

        if (tier > 0.978) {
          size  = rng() * 0.85 + 0.50
          alpha = 0.80 + rng() * 0.20
          if (rng() > 0.45) { r = 180; g = 210; b = 255 }
          else               { r = 255; g = 240; b = 190 }
        } else if (tier > 0.91) {
          size  = rng() * 0.42 + 0.28
          alpha = 0.38 + rng() * 0.32
          r = 230; g = 235; b = 255
        } else {
          size  = rng() * 0.22 + 0.10
          alpha = 0.06 + rng() * 0.22
          r = 255; g = 255; b = 255
        }

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.fill()

        if (tier > 0.96) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 5)
          glow.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.4})`)
          glow.addColorStop(1, `rgba(${r},${g},${b},0)`)
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(x, y, size * 5, 0, Math.PI * 2)
          ctx.fill()
        }

        if (!isMobile && tier > 0.993) {
          const len = size * 9
          ctx.save()
          ctx.globalAlpha = alpha * 0.18
          ctx.strokeStyle = `rgb(${r},${g},${b})`
          ctx.lineWidth   = 0.4
          ctx.beginPath(); ctx.moveTo(x - len, y); ctx.lineTo(x + len, y); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(x, y - len); ctx.lineTo(x, y + len); ctx.stroke()
          ctx.restore()
        }
      }
    }

    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
}

const STATS = [
  { label: 'Nations',   value: '5 · 3 continents' },
  { label: 'Serving',   value: 'Residential & C&I' },
  { label: 'On time',   value: '97%'               },
  { label: 'Quality',   value: '100%'               },
] as const

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const fadeIn = (delay: string) =>
  `fadeUp 0.65s ${delay} ${EASE} both`

export function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(true) }, [])

  return (
    <header className="bg-ink text-sand relative overflow-hidden pt-3">
      <StarField />
      <TwinklingStars />

      <div className="wrap relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-x-8 items-start">

          <div className="pt-6 md:pt-12">
            <div style={{ animation: fadeIn('0.08s') }}>
              <Eyebrow className="text-tide mb-[18px]">Powering all people</Eyebrow>
            </div>

            <h1
              className="font-display font-bold text-sand leading-[1.06] tracking-[-0.02em] max-w-[14ch]"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', animation: fadeIn('0.18s') }}
            >
              Energy that follows the{' '}
              <em className="not-italic text-solar">sun</em>,{' '}
              engineering that follows the{' '}
              <em className="not-italic text-solar">grid</em>
              <span className="text-solar-dim">—</span>
              {' '}or builds it.
            </h1>

            <p
              className="text-[1rem] leading-relaxed text-slate max-w-[44ch] mt-5"
              style={{ animation: fadeIn('0.28s') }}
            >
              Surya Pasang (Solar Tide) is a multinational, full-service renewable
              energy company. We design, build, and advise on power systems across
              Rwanda and the wider region — from rooftop arrays to grid-level
              consultancy.
            </p>
          </div>

          <div className="hidden md:flex items-start justify-center pt-10">
            <SolarSystem />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 md:mt-6 pb-2 md:pb-4">
          <div
            className="flex flex-wrap gap-3"
            style={{ animation: fadeIn('0.38s') }}
          >
            <Button href="/contact" variant="solid" size="md">Become a client</Button>
            <Button href="/#services" variant="ghost" size="md">Our services</Button>
          </div>

          <div
            className="hidden md:flex gap-8"
            style={{ animation: fadeIn('0.55s') }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-right">
                <div className="font-display font-bold text-solar text-[0.95rem] leading-none mb-1">{s.value}</div>
                <div className="font-display text-slate text-[0.62rem] uppercase tracking-[0.1em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Waveform ready={ready} />
    </header>
  )
}

function Waveform({ ready }: { ready: boolean }) {
  return (
    <motion.div
      className="w-full h-[72px] md:h-[120px] relative z-[1]"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={ready ? { opacity: 1 } : undefined}
      transition={{ delay: 0.5, duration: 1.2 }}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full" style={{ display: 'block' }}>
        <motion.path
          d="M0,90 C240,20 480,10 720,55 C960,100 1200,90 1440,40"
          fill="none" stroke="#F2A63D" strokeWidth="1.8" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={ready ? { pathLength: 1, opacity: 0.85 } : undefined}
          transition={{ pathLength: { duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.8 }, opacity: { duration: 0.6, delay: 0.8 } }}
        />
        <motion.path
          d="M0,100 C360,68 720,78 1080,62 C1200,56 1320,60 1440,72"
          fill="none" stroke="#2C8C89" strokeWidth="1.4" strokeLinecap="round"
          animate={{ y: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
          style={{ opacity: 0.55 }}
        />
        <motion.path
          d="M0,110 C480,88 720,95 960,84 C1200,74 1320,80 1440,88"
          fill="none" stroke="#2C8C89" strokeWidth="0.9" strokeLinecap="round"
          animate={{ y: [0, -4, 0, 4, 0] }}
          transition={{ duration: 11, ease: 'easeInOut', repeat: Infinity, delay: 1.8 }}
          style={{ opacity: 0.32 }}
        />
      </svg>
    </motion.div>
  )
}
