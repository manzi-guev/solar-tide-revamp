'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ORBITS = [
  { r: 95,  dur: 5.5, size: 13, color: '#3DAAA8', glow: '#2C8C89' },
  { r: 156, dur: 11,  size: 9,  color: '#F7C06B', glow: '#F2A63D', ring: true },
  { r: 228, dur: 21,  size: 17, color: '#A8BCCC', glow: '#91A0B0' },
]

const CELL_COLS = 4
const CELL_ROWS = 5
const CELLS = Array.from({ length: CELL_COLS * CELL_ROWS }, (_, i) => ({
  col: i % CELL_COLS,
  row: Math.floor(i / CELL_COLS),
}))

// Panel geometry
const PX = 70, PY = 82, PW = 310, PH = 210, PF = 8
const cellStartX = PX + PF + 3
const cellStartY = PY + PF + 3
const gapX = 4, gapY = 4
const cellW = (PW - PF * 2 - 6 - (CELL_COLS - 1) * gapX) / CELL_COLS
const cellH = (PH - PF * 2 - 6 - (CELL_ROWS - 1) * gapY) / CELL_ROWS
const wireCX = PX + PW / 2

function SolarSystemView() {
  return (
    <>
      {/* Large ambient solar glow */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          top: '50%', left: '50%',
          x: '-50%', y: '-50%',
          background: 'radial-gradient(circle, rgba(242,166,61,0.22) 0%, rgba(200,100,30,0.08) 40%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.28, 1], opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orbit rings */}
      {ORBITS.map((o, i) => (
        <div
          key={`ring-${i}`}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: o.r * 2, height: o.r * 2,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        />
      ))}

      {/* Rotating planet arms */}
      {ORBITS.map((o, i) => (
        <motion.div
          key={`planet-${i}`}
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: o.r * 2, height: o.r * 2,
            top: '50%', left: '50%',
            x: '-50%', y: '-50%',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: o.dur, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: o.size, height: o.size,
              top: '50%', left: '100%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle at 33% 33%, ${o.color} 0%, ${o.glow}CC 55%, ${o.glow}66 100%)`,
              boxShadow: [
                `0 0 ${o.size * 2}px   ${o.glow}EE`,
                `0 0 ${o.size * 4.5}px ${o.glow}77`,
                `0 0 ${o.size * 9}px   ${o.glow}33`,
              ].join(', '),
            }}
          />
          {'ring' in o && o.ring && (
            <div
              aria-hidden="true"
              className="absolute rounded-full pointer-events-none"
              style={{
                width: o.size * 2.8, height: o.size * 0.7,
                top: '50%', left: '100%',
                transform: 'translate(-50%, -50%)',
                border: `1.5px solid ${o.glow}99`,
                borderRadius: '50%',
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Slow-rotating corona halo */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 152, height: 152,
          top: '50%', left: '50%',
          x: '-50%', y: '-50%',
          background: 'radial-gradient(circle, rgba(255,200,80,0.18) 0%, rgba(255,120,30,0.07) 55%, transparent 75%)',
        }}
        animate={{ scale: [1, 1.22, 1], rotate: [0, 360] }}
        transition={{
          scale:  { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 12,  repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Sun inner glow */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 104, height: 104,
          top: '50%', left: '50%',
          x: '-50%', y: '-50%',
          background: 'radial-gradient(circle, rgba(255,230,130,0.85) 0%, rgba(242,166,61,0.45) 50%, transparent 75%)',
        }}
        animate={{ scale: [1, 1.20, 1], opacity: [0.80, 1, 0.80] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Sun core */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 52, height: 52,
          top: '50%', left: '50%',
          x: '-50%', y: '-50%',
          background: 'radial-gradient(circle at 36% 30%, #FFF5D0 0%, #FFD07A 28%, #F2A63D 62%, #C47F20 100%)',
          boxShadow: [
            '0 0 18px rgba(255,210,110,0.95)',
            '0 0 38px rgba(242,166,61,0.70)',
            '0 0 80px rgba(200,120,30,0.35)',
          ].join(', '),
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}

function SolarPanelView() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div style={{ transform: 'perspective(900px) rotateX(18deg) rotateY(-11deg)', transformOrigin: '50% 55%' }}>
        <svg viewBox="0 0 480 480" width="460" height="460">
          <defs>
            <radialGradient id="sp-sun" cx="35%" cy="35%">
              <stop offset="0%"   stopColor="#FFF5D0" />
              <stop offset="45%"  stopColor="#FFD07A" />
              <stop offset="100%" stopColor="#F2A63D" />
            </radialGradient>
            <radialGradient id="sp-cell" cx="38%" cy="28%" r="65%">
              <stop offset="0%"   stopColor="#2a5a90" />
              <stop offset="55%"  stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#142840" />
            </radialGradient>
            <filter id="sp-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="sp-pulse" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Sun ── (scale instead of r animation avoids SVG attribute conflicts) */}
          <motion.g style={{ transformOrigin: '400px 55px' }}
            animate={{ scale: [1, 1.17, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="400" cy="55" r="29" fill="url(#sp-sun)" filter="url(#sp-glow)" />
          </motion.g>
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i / 8) * Math.PI * 2
            return (
              <motion.line key={i}
                x1={400 + Math.cos(a) * 39} y1={55 + Math.sin(a) * 39}
                x2={400 + Math.cos(a) * 60} y2={55 + Math.sin(a) * 60}
                stroke="#F2A63D" strokeWidth="2.5" strokeLinecap="round"
                animate={{ opacity: [0.2, 0.85, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
              />
            )
          })}

          {/* ── Light rays from sun to panel ── */}
          {Array.from({ length: 5 }, (_, i) => (
            <motion.line key={`ray-${i}`}
              x1={402 + (i - 2) * 10}
              y1={87}
              x2={PX + PW * 0.25 + i * 28}
              y2={PY + 8}
              stroke="#FFD07A" strokeWidth="0.9" strokeLinecap="round"
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.48, ease: 'easeInOut' }}
            />
          ))}

          {/* ── Panel outer frame ── */}
          <rect x={PX} y={PY} width={PW} height={PH} rx="5"
            fill="#111d2c" stroke="#3a556a" strokeWidth="3" />
          {/* Inner bezel */}
          <rect x={PX + 4} y={PY + 4} width={PW - 8} height={PH - 8} rx="2"
            fill="#172234" stroke="#253a52" strokeWidth="1" />

          {/* ── Cells ── */}
          {CELLS.map(({ col, row }) => {
            const x = cellStartX + col * (cellW + gapX)
            const y = cellStartY + row * (cellH + gapY)
            const shimmerDelay = ((col + row * 0.6) * 0.35) % 2.5
            return (
              <motion.rect key={`c-${col}-${row}`}
                x={x} y={y} width={cellW} height={cellH} rx="1.5"
                fill="url(#sp-cell)" stroke="#2B4F7A" strokeWidth="0.9"
                animate={{ fillOpacity: [0.82, 1, 0.82] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: shimmerDelay, ease: 'easeInOut' }}
              />
            )
          })}

          {/* ── Cell finger lines (thin metal conductors) ── */}
          {CELLS.map(({ col, row }) => {
            const x = cellStartX + col * (cellW + gapX)
            const y = cellStartY + row * (cellH + gapY)
            return (
              <g key={`f-${col}-${row}`} stroke="#4fa8e8" fill="none" opacity="0.25">
                <line x1={x + 2} y1={y + cellH / 2} x2={x + cellW - 2} y2={y + cellH / 2} strokeWidth="0.7" />
                {[1, 2, 3].map(n => (
                  <line key={n}
                    x1={x + (cellW / 4) * n} y1={y + 2}
                    x2={x + (cellW / 4) * n} y2={y + cellH - 2}
                    strokeWidth="0.5"
                  />
                ))}
              </g>
            )
          })}

          {/* ── Panel surface shimmer pass ── */}
          <motion.rect x={PX + PF} y={PY + PF} width={PW - PF * 2} height={PH - PF * 2} rx="2"
            fill="white" fillOpacity="0"
            animate={{ fillOpacity: [0, 0.06, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
          />

          {/* ── Mounting structure ── */}
          <g stroke="#344d60" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <line x1={PX + 55}  y1={PY + PH} x2={PX + 35}  y2={430} />
            <line x1={PX + 255} y1={PY + PH} x2={PX + 275} y2={430} />
            <line x1={PX + 155} y1={PY + PH} x2={PX + 155} y2={430} />
            <line x1={PX + 10}  y1={432}     x2={PX + 310}  y2={432} />
          </g>

          {/* ── Output wire ── */}
          <line x1={wireCX} y1={PY + PH} x2={wireCX} y2={452}
            stroke="#3a5060" strokeWidth="2" strokeLinecap="round" />

          {/* Output node — scale instead of r animation */}
          <motion.g style={{ transformOrigin: `${wireCX}px 452px` }}
            animate={{ scale: [1, 1.75, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx={wireCX} cy={452} r="4" fill="#F2A63D" filter="url(#sp-pulse)" />
          </motion.g>

          {/* ── Energy pulses — y (translateY) instead of cy to avoid SVG attribute conflicts ── */}
          {[0, 0.65, 1.3].map((delay, i) => (
            <motion.circle key={`ep-${i}`}
              cx={wireCX}
              cy={PY + PH}
              r="3.5"
              fill="#F2A63D"
              filter="url(#sp-pulse)"
              animate={{ y: [0, 452 - (PY + PH)], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeIn', times: [0, 0.55, 1] }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

export function SolarSystem() {
  const [showPanel, setShowPanel] = useState(false)
  const [direction, setDirection] = useState<'to-panel' | 'to-system'>('to-panel')

  useEffect(() => {
    const id = setInterval(() => {
      setShowPanel(prev => {
        const next = !prev
        setDirection(next ? 'to-panel' : 'to-system')
        return next
      })
    }, 7000)
    return () => clearInterval(id)
  }, [])

  // system: on top when sliding up (to-panel); below when system re-enters (to-system)
  const systemZ = direction === 'to-panel' ? 2 : 1
  // panel: below when rising from ground (to-panel); on top when zooming toward sun (to-system)
  const panelZ  = direction === 'to-panel' ? 1 : 2

  return (
    <motion.div
      className="relative mx-auto select-none"
      style={{ width: 540, height: 540, flexShrink: 0 }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      <AnimatePresence mode="sync">
        {showPanel ? (
          <motion.div
            key="panel"
            className="absolute inset-0"
            style={{ zIndex: panelZ }}
            // Panel rises from below ground
            initial={{ y: '72%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            // Zoom directly into the sun (top-right corner of the panel view)
            exit={{
              originX: 0.78,
              originY: 0.17,
              scale: 5,
              opacity: 0,
              transition: { duration: 0.75, ease: [0.55, 0, 1, 0.45] },
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <SolarPanelView />
          </motion.div>
        ) : (
          <motion.div
            key="system"
            className="absolute inset-0"
            style={{ zIndex: systemZ }}
            // On first mount: simple fade. Re-entering: emerge from the sun's core.
            initial={direction === 'to-system'
              ? { scale: 1.3, opacity: 0 }
              : { opacity: 0 }}
            animate={{ y: '0%', scale: 1, opacity: 1 }}
            // Solar system floats up into the sky when panel is about to appear
            exit={{
              y: '-68%',
              opacity: 0,
              transition: { duration: 0.65, ease: [0.55, 0, 1, 0.45] },
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <SolarSystemView />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
