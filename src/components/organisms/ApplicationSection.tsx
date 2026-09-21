import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'

const STEPS = [
  {
    n: '01',
    title: 'Tell us your location',
    desc: 'Share your country and city so we can understand your grid, climate, and site conditions.',
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

export function ApplicationSection() {
  return (
    <>
      {/* ── How to become a client ── */}
      <section id="apply" className="bg-sand py-16 md:py-24 lg:py-[104px]">
        <div className="wrap">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-16 items-start">

            {/* Left — copy */}
            <ScrollReveal>
              <Eyebrow className="text-solar-dim mb-4">Becoming a client</Eyebrow>
              <h2
                className="font-display font-semibold text-ink leading-[1.2] max-w-[20ch] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)' }}
              >
                Ready to bring clean power to your home, business, or institution?
              </h2>
              <p className="text-[0.97rem] leading-[1.72] text-slate-900 max-w-[40ch] mb-8">
                Apply in three simple steps — choose your offer and leave the rest to us.
                We handle everything from feasibility through commissioning.
              </p>
              <Button href="/contact" variant="solid" size="md">
                Get Started
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

      {/* ── Why Solar Tide ── */}
      <section className="bg-ink-700 text-sand py-16 md:py-24 lg:py-[104px]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-16 items-start">

            <ScrollReveal>
              <Eyebrow className="text-solar mb-5">Why Solar Tide</Eyebrow>
              <h2
                className="font-display font-semibold leading-[1.18] max-w-[16ch]"
                style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)' }}
              >
                Grounded in the grid, not just the panel.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="flex flex-col gap-5 text-[0.98rem] leading-[1.78] text-[#C7D2DC]">
              <p>
                Solar generation only pays off when it is engineered against the realities
                of the grid it feeds into — voltage limits, protection settings, and the
                load it is actually meant to serve.{' '}
                <strong className="text-sand font-semibold">
                  Solar Tide brings power-systems discipline to solar delivery
                </strong>
                , so every system we design is sized and specified for how it will actually
                behave once it is live.
              </p>
              <p>
                We work directly with homeowners and businesses on installed systems, and
                alongside developers, utilities, and public agencies on the advisory side —
                feasibility studies, interconnection reviews, and audits that inform real
                investment decisions.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}
