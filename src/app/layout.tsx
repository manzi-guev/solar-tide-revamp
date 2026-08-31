import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

/* ── Single font throughout — Space Grotesk ─── */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

/* ── Metadata ───────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'Solar Tide — Energy for Everyone',
    template: '%s | Solar Tide',
  },
  description:
    'Solar Tide (Surya Pasang) is a multinational, full-service renewable energy company — solar, wind, and hydro — based in Rwanda, with operations across 5 nations on 3 continents.',
  keywords: [
    'solar energy', 'solar panels', 'Rwanda', 'East Africa',
    'energy audit', 'solar consultancy', 'Kigali', 'renewable energy',
    'wind energy', 'hydro power', 'Surya Pasang',
  ],
  authors: [{ name: 'Solar Tide' }],
  creator: 'Solar Tide',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Solar Tide',
    title: 'Solar Tide — Energy for Everyone',
    description:
      'Multinational, full-service renewable energy company — solar, wind, and hydro — operating across 5 nations on 3 continents.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Tide — Energy for Everyone',
    description:
      'Multinational, full-service renewable energy company — solar, wind, and hydro — operating across 5 nations on 3 continents.',
  },
  robots: { index: true, follow: true },
}

/* ── Root layout ────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
