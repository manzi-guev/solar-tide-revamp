import type { Metadata } from 'next'
import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'
import { CtaSection } from '@/components/organisms'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Surya Pasang (Solar Tide) is a multinational, full-service renewable energy company based in Rwanda, with operations in the US, Burundi, China, and Indonesia.',
}

const VALUES = [
  {
    title: 'Engineering rigour',
    desc: 'Every system is specified against the grid it connects to — protection settings, voltage limits, and actual load behaviour.',
  },
  {
    title: 'Local expertise',
    desc: 'We live in the places we work, and we work in the places we live — so we understand the true importance of local, economical solutions.',
  },
  {
    title: 'Long-term thinking',
    desc: 'Systems sized for today and tomorrow. We factor in future load growth and expansion pathways at design stage.',
  },
  {
    title: 'Environmental care',
    desc: 'Our for-profit company operates according to principles of low environmental impact and educational programme support.',
  },
] as const

const STATS = [
  { label: 'Quality design',             value: '100%' },
  { label: 'Timely delivery',            value: '97%'  },
  { label: 'Tech requests under 24 h',   value: '92%'  },
  { label: 'Nations',                    value: '5'    },
  { label: 'Continents',                 value: '3'    },
] as const

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-sand pt-24 pb-16">
        <div className="wrap max-w-[680px]">
          <Eyebrow className="text-tide mb-5">About Solar Tide</Eyebrow>
          <h1
            className="font-display font-semibold text-sand leading-[1.08] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Energy for everyone.
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-slate max-w-[52ch]">
            Surya Pasang (Solar Tide) is a multinational, full-service renewable
            energy company — solar, wind, and hydro — comprised of engineers and
            technicians residing in 5 nations on 3 continents.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sand py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <ScrollReveal>
            <Eyebrow className="text-solar-dim mb-4">Our mission</Eyebrow>
            <h2 className="font-display font-semibold text-ink text-[1.6rem] leading-[1.2] max-w-[18ch]">
              Powering all people.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex flex-col gap-5 text-[0.98rem] leading-[1.75] text-slate-900">
            <p>
              The sun rises every morning and gives our planet life. Ocean tides can
              be predicted thousands of years in advance. The wind is a force of
              nature that has a place in legends of nearly all the peoples of the
              earth. Visionaries have long understood: it was only a matter of time
              before the tide turned — before the human race started harnessing these
              natural phenomena for electrical power.
            </p>
            <p>
              We are people who care about renewable energy and the planet we live on.
              People who plan to change the world and live well while doing it. Our
              for-profit company operates according to principles of low environmental
              impact and educational programme support.
            </p>
            <p>
              Based in the first, second, and third world — the U.S., Rwanda, Burundi,
              China, and Indonesia — we understand that energy access looks different
              depending on where you live. That understanding drives every system we
              design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Performance stats */}
      <section className="bg-ink-700 text-sand py-20">
        <div className="wrap">
          <ScrollReveal>
            <Eyebrow className="text-solar mb-5">By the numbers</Eyebrow>
            <h2 className="font-display font-semibold text-[1.6rem] mb-12 max-w-[28ch]">
              We deliver on our promise: Energy everywhere.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-slate/10 border border-slate/10">
            {STATS.map(({ label, value }, i) => (
              <ScrollReveal key={label} delay={0.06 * i} className="bg-ink-700 p-8 text-center">
                <div
                  className="font-display font-bold text-solar mb-2"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                >
                  {value}
                </div>
                <div className="font-display text-[0.78rem] font-medium uppercase tracking-[0.08em] text-slate">
                  {label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20">
        <div className="wrap">
          <ScrollReveal className="mb-12">
            <Eyebrow className="text-solar-dim mb-4">How we work</Eyebrow>
            <h2 className="font-display font-semibold text-ink text-[1.6rem] max-w-[28ch]">
              Four principles that shape every engagement.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map(({ title, desc }, i) => (
              <ScrollReveal key={title} delay={0.08 * i} className="border-t border-sand-dim pt-6">
                <h3 className="font-display font-semibold text-ink text-[1rem] mb-2">{title}</h3>
                <p className="text-[0.88rem] leading-[1.65] text-slate-900">{desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-ink text-sand py-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse at center, #2C8C89, transparent 65%)' }}
        />
        <div className="wrap relative z-[1]">
          <ScrollReveal className="max-w-[640px]">
            <Eyebrow className="text-tide mb-5">Sustainability matters</Eyebrow>
            <h2 className="font-display font-semibold text-[1.6rem] mb-4">
              Paving the way for sustainable energy.
            </h2>
            <p className="text-[0.98rem] leading-[1.7] text-slate max-w-[52ch] mb-8">
              Delivering clean power from hydro, wind, and solar — we constantly
              monitor and improve our services so that every client gets energy that
              is reliable, economical, and kind to the environment.
            </p>
            <div className="flex flex-wrap gap-8">
              {[['Hydro', '+10%'], ['Wind & Solar', '+10%']].map(([label, pct]) => (
                <div key={label}>
                  <span
                    className="font-display font-bold text-solar"
                    style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)' }}
                  >
                    {pct}
                  </span>
                  <span className="font-display font-medium uppercase tracking-[0.08em] text-slate text-[0.78rem] ml-3">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
