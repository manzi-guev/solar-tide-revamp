'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/atoms'
import { cn } from '@/lib/cn'

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About'    },
  { href: '/news',     label: 'News'     },
  { href: '/contact',  label: 'Contact'  },
] as const

function isActive(href: string, pathname: string) {
  if (href.startsWith('/#')) return false
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 z-50 bg-ink/92 backdrop-blur-md border-b border-solar/10"
      aria-label="Main navigation"
    >
      <div className="wrap flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-[1.15rem] text-sand tracking-[0.01em] focus-ring group"
        >
          <LogoMark />
          <span className="transition-colors group-hover:text-solar">Solar Tide</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'font-mono text-[0.78rem] uppercase tracking-[0.06em] relative py-1 underline-slide focus-ring transition-colors duration-200',
                  active ? 'text-sand is-active' : 'text-slate hover:text-sand',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Button href="/contact" variant="solid" size="sm">
            Get a quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="md:hidden text-sand p-2 focus-ring"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm data-[state=open]:animate-[fadeIn_0.25s_ease_both] data-[state=closed]:animate-[fadeOut_0.25s_ease_both]" />
            <Dialog.Content
              className="fixed right-0 top-0 z-50 h-full w-[300px] bg-ink border-l border-slate/15 p-6 flex flex-col data-[state=open]:animate-[slideInRight_0.45s_cubic-bezier(0.22,1,0.36,1)_both] data-[state=closed]:animate-[slideOutRight_0.35s_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

              <div className="flex justify-end mb-8">
                <Dialog.Close asChild>
                  <button
                    className="text-slate hover:text-sand transition-colors p-1.5 focus-ring rounded-md"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="flex flex-col flex-1">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href, pathname)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'font-mono text-sm uppercase tracking-[0.08em] py-4 border-b border-slate/10 transition-colors focus-ring',
                        active ? 'text-solar' : 'text-slate hover:text-sand',
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Button href="/contact" variant="solid" size="md" className="mt-8 justify-center w-full">
                  Get a quote
                </Button>
              </nav>

              {/* Decorative waveform at bottom of drawer */}
              <div className="mt-auto pt-8 opacity-20" aria-hidden="true">
                <svg viewBox="0 0 280 40" fill="none" className="w-full">
                  <path d="M0,20 Q35,5 70,20 T140,20 T210,20 T280,20"
                    stroke="#F2A63D" strokeWidth="1.2" fill="none" />
                  <path d="M0,30 Q35,18 70,30 T140,30 T210,30 T280,30"
                    stroke="#2C8C89" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
    </nav>
  )
}

function LogoMark() {
  // 16-point starburst (outerR=47, innerR=34, center=50,50, viewBox 0 0 100 100)
  const burst = "M 50,3 L 56.6,16.7 L 68,6.6 L 68.9,21.7 L 83.2,16.8 L 78.3,31.1 L 93.4,32 L 83.4,43.4 L 97,50 L 83.4,56.6 L 93.4,68 L 78.3,68.9 L 83.2,83.2 L 68.9,78.3 L 68,93.4 L 56.6,83.4 L 50,97 L 43.4,83.4 L 32,93.4 L 31.1,78.3 L 16.8,83.2 L 21.7,68.9 L 6.6,68 L 16.7,56.6 L 3,50 L 16.7,43.4 L 6.6,32 L 21.7,31.1 L 16.8,16.8 L 31.1,21.7 L 32,6.6 L 43.4,16.7 Z"
  return (
    <svg width="26" height="26" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="lm-c">
          <path d={burst} />
        </clipPath>
      </defs>
      {/* Starburst — the sun, amber fill */}
      <path d={burst} fill="#F2A63D" />
      {/* Solar panel section — dark wedge + grid lines, clipped to starburst */}
      <g clipPath="url(#lm-c)">
        <path
          d="M 56,4 C 36,22 36,42 50,50 C 64,58 64,78 44,96 L 100,96 L 100,4 Z"
          fill="#0B1628"
        />
        <line x1="47" y1="32" x2="97" y2="32" stroke="#F2A63D" strokeWidth="4" />
        <line x1="43" y1="46" x2="97" y2="46" stroke="#F2A63D" strokeWidth="4" />
        <line x1="40" y1="60" x2="96" y2="60" stroke="#F2A63D" strokeWidth="4" />
        <line x1="43" y1="74" x2="94" y2="74" stroke="#F2A63D" strokeWidth="4" />
        <line x1="70" y1="19" x2="70" y2="89" stroke="#F2A63D" strokeWidth="2.5" opacity="0.55" />
        <line x1="84" y1="19" x2="84" y2="89" stroke="#F2A63D" strokeWidth="2.5" opacity="0.55" />
      </g>
      {/* S-curve — the tide wave, white, on top */}
      <path
        d="M 44,88 C 24,72 36,60 50,50 C 64,40 76,28 56,12"
        stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"
        clipPath="url(#lm-c)"
      />
    </svg>
  )
}
