import Link from 'next/link'

const FOOTER_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/projects',  label: 'Projects'  },
  { href: '/about',     label: 'About'     },
  { href: '/news',      label: 'News'      },
  { href: '/contact',   label: 'Contact'   },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-slate/10">
      <div className="wrap py-9 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Brand */}
        <div>
          <span className="font-display font-bold text-sand text-sm">Solar Tide</span>
          <p className="font-mono text-[0.72rem] text-slate mt-1 tracking-[0.04em]">
            Power & Solar — Kigali, Rwanda
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[0.74rem] uppercase tracking-[0.06em] text-slate hover:text-sand transition-colors focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[0.72rem] text-slate/60 tracking-[0.04em]">
          © {year} Solar Tide
        </p>

      </div>
    </footer>
  )
}
