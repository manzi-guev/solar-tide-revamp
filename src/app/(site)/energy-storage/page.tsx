import type { Metadata } from 'next'
import { Eyebrow, Button, Tag } from '@/components/atoms'
import { CtaSection } from '@/components/organisms'

export const metadata: Metadata = {
  title: 'Energy Storage',
  description:
    'Battery energy storage systems for residential and commercial sites — designed by Solar Tide to work with your solar array or grid connection.',
}

const USE_CASES = [
  {
    title: 'Off-grid autonomy',
    desc: 'For sites outside the grid catchment or where grid reliability is low. The battery bank provides power through the night and on cloudy days.',
  },
  {
    title: 'Hybrid backup',
    desc: 'Grid-connected with battery backup. When the grid goes down, essential loads switch seamlessly to battery — no generator fuel cost.',
  },
  {
    title: 'Peak shaving',
    desc: 'For C&I sites with high demand charges. Charge during off-peak periods, discharge during peak — reducing the demand charge billed by your utility.',
  },
] as const

export default function EnergyStoragePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-sand pt-24 pb-16">
        <div className="wrap max-w-[680px]">
          <Eyebrow className="text-tide mb-5">Energy Storage</Eyebrow>
          <h1 className="font-display font-semibold text-sand leading-[1.08] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            Storage that works around your load, not the other way around.
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-slate mb-8 max-w-[52ch]">
            A battery system is only as good as its integration with the rest of the
            power system. We design storage to match the charge cycle, protection
            settings, and load profile of each specific site.
          </p>
          <Button href="/contact" variant="solid" size="md">
            Discuss your site
          </Button>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-sand py-20">
        <div className="wrap">
          <Eyebrow className="text-solar-dim mb-5">Use cases</Eyebrow>
          <h2 className="font-display font-semibold text-ink text-[1.6rem] mb-12 max-w-[32ch]">
            Three problems storage solves.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand-dim border border-sand-dim">
            {USE_CASES.map(({ title, desc }) => (
              <div key={title} className="bg-sand p-10">
                <Tag className="mb-4">{title}</Tag>
                <h3 className="font-display font-semibold text-ink text-[1.1rem] mb-3 leading-[1.3]">
                  {title}
                </h3>
                <p className="text-[0.93rem] leading-[1.65] text-slate-900">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible systems */}
      <section className="bg-ink-700 text-sand py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <Eyebrow className="text-tide mb-5">Compatibility</Eyebrow>
            <h2 className="font-display font-semibold text-[1.6rem] mb-4 leading-[1.2] max-w-[20ch]">
              Works with your existing solar system or standalone.
            </h2>
            <p className="text-[0.98rem] leading-[1.7] text-[#AEBBC8]">
              Storage can be added to an existing Solar Tide installation or
              retrofitted to a third-party system — we assess compatibility
              before recommending any hardware.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              ['Battery type',      'Lithium iron phosphate (LFP) — primary recommendation'],
              ['Inverter pairing',  'Hybrid inverters for solar + storage integration'],
              ['Monitoring',        'Real-time SOC and cycle tracking via app or web'],
              ['Warranty',          'Manufacturer warranty + Solar Tide installation warranty'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-t border-slate/15 pt-3 font-mono text-[0.82rem]">
                <span className="text-slate">{label}</span>
                <span className="text-sand text-right max-w-[55%]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
