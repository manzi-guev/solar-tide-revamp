'use client'

import { motion } from 'motion/react'

const ORBITS = [
  { r: 95,  dur: 5.5, size: 13, color: '#3DAAA8', glow: '#2C8C89' },
  { r: 156, dur: 11,  size: 9,  color: '#F7C06B', glow: '#F2A63D', ring: true },
  { r: 228, dur: 21,  size: 17, color: '#A8BCCC', glow: '#91A0B0' },
]

export function SolarSystem() {
  return (
    <motion.div
      className="relative mx-auto select-none"
      style={{ width: 540, height: 540, flexShrink: 0 }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      {/* Large ambient solar glow */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          top: '50%', left: '50%',
          x: '-50%', y: '-50%',
          background:
            'radial-gradient(circle, rgba(242,166,61,0.22) 0%, rgba(200,100,30,0.08) 40%, transparent 70%)',
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
          {/* Planet sphere — lit from upper-left */}
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
          {/* Saturn-style ring on the amber planet */}
          {'ring' in o && o.ring && (
            <div
              aria-hidden="true"
              className="absolute rounded-full pointer-events-none"
              style={{
                width:  o.size * 2.8,
                height: o.size * 0.7,
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
          background:
            'radial-gradient(circle, rgba(255,200,80,0.18) 0%, rgba(255,120,30,0.07) 55%, transparent 75%)',
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
          background:
            'radial-gradient(circle, rgba(255,230,130,0.85) 0%, rgba(242,166,61,0.45) 50%, transparent 75%)',
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
          background:
            'radial-gradient(circle at 36% 30%, #FFF5D0 0%, #FFD07A 28%, #F2A63D 62%, #C47F20 100%)',
          boxShadow: [
            '0 0 18px rgba(255,210,110,0.95)',
            '0 0 38px rgba(242,166,61,0.70)',
            '0 0 80px rgba(200,120,30,0.35)',
          ].join(', '),
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
