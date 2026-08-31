import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'

const STEPS = [
  {
    n: '01',
    title: 'Tell us your location',
    desc: 'Share your country and city so we can understand your grid, climate, and available incentives.',
  },
  {
    n: '02',
    title: 'Estimate your monthly usage',
    desc: 'A rough figure of your monthly kWh consumption is enough to get started — we refine it together.',
  },
  {
    n: '03',
    title: 'Send us your enquiry',
    desc: "Reach out by email or through our contact form. We'll follow up with your options and next steps.",
  },
] as const

const METRICS = [
  { value: '100%', label: 'Quality design'           },
  { value: '97%',  label: 'Timely delivery'           },
  { value: '92%',  label: 'Tech requests under 24 h'  },
] as const

export function ApplicationSection() {
  return (
    <>
      {/* ── How to become a client ── */}
      <section id="apply" className="bg-sand py-24 md:py-[104px]">
        <div className="wrap">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 items-start">

            {/* Left — copy */}
            <ScrollReveal>
              <Eyebrow className="text-solar-dim mb-4">Becoming a client</Eyebrow>
              <h2
                className="font-display font-semibold text-ink leading-[1.2] max-w-[20ch] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)' }}
              >
                Does your home, business, or institution want clean power?
              </h2>
              <p className="text-[0.97rem] leading-[1.72] text-slate-900 max-w-[40ch] mb-8">
                Apply in three simple steps — choose your offer and leave the rest to us.
                We handle everything from feasibility through commissioning.
              </p>
              <Button href="/contact" variant="solid" size="md">
                Apply now
              </Button>
            </ScrollReveal>

            {/* Right — steps */}
            <div className="flex flex-col gap-0">
              {STEPS.map((step, i) => (
                <ScrollReveal key={step.n} delay={0.08 * i}>
                  <div className="flex gap-5 py-6 border-b border-sand-dim last:border-b-0">
                    <span className="font-display font-bold text-solar text-[0.75rem] mt-0.5 shrink-0 tracking-[0.06em]">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-ink text-[1rem] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[0.88rem] leading-[1.65] text-slate-900">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Why clients choose us ── */}
      <section className="bg-ink-700 text-sand py-20">
        <div className="wrap">

          <ScrollReveal className="mb-12">
            <Eyebrow className="text-solar mb-4">Why clients choose us</Eyebrow>
            <h2
              className="font-display font-semibold leading-[1.2] max-w-[28ch]"
              style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}
            >
              We deliver on our promise: Energy everywhere.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-slate/10 border border-slate/10">
              {METRICS.map(({ value, label }, i) => (
                <ScrollReveal key={label} delay={0.06 * i} className="bg-ink-700 p-8 text-center">
                  <div
                    className="font-display font-bold text-solar mb-2"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                  >
                    {value}
                  </div>
                  <div className="font-display text-[0.76rem] font-medium uppercase tracking-[0.08em] text-slate">
                    {label}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Sustainability callout */}
            <ScrollReveal className="flex flex-col gap-6">
              <div>
                <Eyebrow className="text-tide mb-3">Sustainability matters</Eyebrow>
                <p className="text-[0.97rem] leading-[1.72] text-[#C7D2DC] max-w-[38ch]">
                  Paving the way for sustainable energy — delivering it from hydro, wind,
                  and solar, with constant monitoring and improvement.
                </p>
              </div>
              <div className="flex gap-10">
                {[['Hydro', '+10%'], ['Wind & Solar', '+10%']].map(([label, pct]) => (
                  <div key={label}>
                    <span
                      className="font-display font-bold text-solar block"
                      style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}
                    >
                      {pct}
                    </span>
                    <span className="font-display font-medium uppercase tracking-[0.08em] text-slate text-[0.76rem]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}
