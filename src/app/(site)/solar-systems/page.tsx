import type { Metadata } from 'next'
import { Eyebrow, Button, Tag } from '@/components/atoms'
import { CtaSection } from '@/components/organisms'

export const metadata: Metadata = {
  title: 'Solar Systems',
  description:
    'Residential and commercial solar PV systems designed and installed by Solar Tide — from load study through commissioning.',
}

const PROCESS_STEPS = [
  { n: '01', title: 'Load study',        desc: 'We profile your actual energy consumption — hour by hour — so the system is sized against reality, not rule of thumb.' },
  { n: '02', title: 'System design',     desc: 'PV array, inverter, cabling, and protection — specified for your site, your grid connection, and your goals.' },
  { n: '03', title: 'Installation',      desc: 'Our team installs to IEC standards, working with your schedule to minimise disruption.' },
  { n: '04', title: 'Commissioning',     desc: 'End-to-end testing, grid interconnection sign-off, and a handover pack — so you know exactly what you have.' },
] as const

export default function SolarSystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-sand pt-24 pb-16">
        <div className="wrap max-w-[680px]">
          <Eyebrow className="text-tide mb-5">Solar Systems</Eyebrow>
          <h1 className="font-display font-semibold text-sand leading-[1.08] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            Designed for how the power will actually flow.
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-slate mb-8 max-w-[52ch]">
            We size and specify every system against your real load profile and your
            grid connection — not against catalogue assumptions.
          </p>
          <Button href="/contact" variant="solid" size="md">
            Request a site assessment
          </Button>
        </div>
      </section>

      {/* Residential & C&I split */}
      <section className="bg-sand py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-px bg-sand-dim border border-sand-dim">
          {/* Residential */}
          <div className="bg-sand p-10 md:p-12">
            <Tag className="mb-5">Residential</Tag>
            <h2 className="font-display font-semibold text-ink text-[1.5rem] mb-4 leading-[1.2]">
              Home solar systems
            </h2>
            <p className="text-[0.95rem] leading-[1.7] text-slate-900 mb-5">
              Grid-tied and off-grid PV for homes — from a modest rooftop system
              that offsets daytime bills, to a fully self-sufficient off-grid
              installation with battery storage.
            </p>
            <ul className="flex flex-col gap-2 text-[0.9rem] text-slate-900">
              {['Grid-tied with net metering', 'Hybrid with battery backup', 'Off-grid standalone', 'Load study included'].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-tide text-xs">→</span>{f}
                </li>
              ))}
            </ul>
          </div>

          {/* C&I */}
          <div className="bg-sand p-10 md:p-12">
            <Tag className="mb-5">Commercial & Industrial</Tag>
            <h2 className="font-display font-semibold text-ink text-[1.5rem] mb-4 leading-[1.2]">
              C&amp;I solar systems
            </h2>
            <p className="text-[0.95rem] leading-[1.7] text-slate-900 mb-5">
              Rooftop and ground-mount PV for offices, warehouses, hotels, and
              industrial sites — with net-metering interconnection and demand
              management where the load profile calls for it.
            </p>
            <ul className="flex flex-col gap-2 text-[0.9rem] text-slate-900">
              {['Rooftop & ground-mount', 'Grid interconnection & protection', 'Net metering configuration', 'Ongoing performance monitoring'].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-tide text-xs">→</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink-700 text-sand py-20">
        <div className="wrap">
          <Eyebrow className="text-solar mb-5">Our process</Eyebrow>
          <h2 className="font-display font-semibold text-[1.6rem] mb-12 max-w-[28ch]">
            From first conversation to operational system.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map(({ n, title, desc }) => (
              <div key={n}>
                <span className="font-mono text-[0.7rem] tracking-[0.14em] text-solar mb-3 block">{n}</span>
                <h3 className="font-display font-semibold text-sand text-[1rem] mb-2">{title}</h3>
                <p className="text-[0.88rem] leading-[1.65] text-[#AEBBC8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
