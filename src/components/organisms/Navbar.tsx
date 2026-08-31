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
            <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" />
            <Dialog.Content
              className={cn(
                'fixed right-0 top-0 z-50 h-full w-[300px] bg-ink border-l border-slate/15 p-6 flex flex-col',
                'data-[state=open]:animate-in data-[state=closed]:animate-out',
                'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300',
              )}
            >
              <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <LogoMark />
                  <span className="font-display font-bold text-sand text-[1rem]">Solar Tide</span>
                </div>
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
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {/* Sun rays */}
      <circle cx="11" cy="11" r="3.5" fill="#F2A63D" opacity="0.9" />
      <line x1="11" y1="3"  x2="11" y2="5.5" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="11" y1="16.5" x2="11" y2="19" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="3"  y1="11" x2="5.5" y2="11" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="16.5" y1="11" x2="19" y2="11" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
      {/* Tide wave */}
      <path d="M2 17 Q5.5 14 9 17 T16 17 T22 17"
        stroke="#2C8C89" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  )
}
