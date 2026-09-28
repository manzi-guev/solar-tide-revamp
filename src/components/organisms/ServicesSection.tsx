import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'

const SERVICES = [
  {
    key: 'residential',
    title: 'Residential & C&I Solar Systems',
    tag: 'Design · Install · Commission',
    description:
      'Rooftop and ground-mount PV sized for homes, offices, and industrial sites — from load study through design, installation, and commissioning.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6"  y="6"  width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" />
        <rect x="22" y="6"  width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" />
        <rect x="6"  y="22" width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" />
        <rect x="22" y="22" width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    key: 'consultancy',
    title: 'Power & Solar Consultancy',
    tag: 'Feasibility · Interconnection · Advisory',
    description:
      'Technical advisory on feasibility, grid interconnection, system design review, and regulatory navigation for power and solar projects.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="13" stroke="#F2A63D" strokeWidth="1.4" />
        <path d="M20 12v8l6 4" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'audits',
    title: 'Energy Audits',
    tag: 'Assess · Profile · Recommend',
    description:
      'Site assessment and load profiling that shows where energy is wasted, so you can cut consumption before you spend on new generation.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M9 8h16l6 6v18H9z" stroke="#F2A63D" strokeWidth="1.4" />
        <path d="M14 18h12M14 23h12M14 28h8" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'microgrids',
    title: 'Rural Solar Microgrids',
    tag: 'Design · Deploy · Connect',
    description:
      'Standalone generation and distribution for communities beyond the grid — sized for shared load, built for local operation and upkeep.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="3" stroke="#F2A63D" strokeWidth="1.4" />
        <circle cx="8"  cy="12" r="2" stroke="#F2A63D" strokeWidth="1.2" />
        <circle cx="32" cy="12" r="2" stroke="#F2A63D" strokeWidth="1.2" />
        <circle cx="8"  cy="28" r="2" stroke="#F2A63D" strokeWidth="1.2" />
        <circle cx="32" cy="28" r="2" stroke="#F2A63D" strokeWidth="1.2" />
        <line x1="10" y1="13" x2="17" y2="18" stroke="#F2A63D" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="30" y1="13" x2="23" y2="18" stroke="#F2A63D" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="10" y1="27" x2="17" y2="22" stroke="#F2A63D" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="30" y1="27" x2="23" y2="22" stroke="#F2A63D" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M6 8 Q8 5 10 8" stroke="#F2A63D" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M30 8 Q32 5 34 8" stroke="#F2A63D" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M6 24 Q8 21 10 24" stroke="#F2A63D" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M30 24 Q32 21 34 24" stroke="#F2A63D" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>
    ),
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="bg-sand py-16 md:py-24 lg:py-[104px]">
      <div className="wrap">

        <ScrollReveal className="max-w-[56ch] mb-14">
          <Eyebrow className="text-solar-dim mb-4">What we do</Eyebrow>
          <h2
            className="font-display font-semibold text-ink"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.15 }}
          >
            Four ways we work with you, from rooftop to regulator.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border border-sand-dim bg-sand-dim gap-[1px]">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.key} delay={0.07 * i}>
              <div className="bg-sand p-9 flex flex-col h-full hover:bg-[#fdfcf9] transition-colors duration-200">
                <div className="w-10 h-10 mb-7 shrink-0">{s.icon}</div>
                <h3 className="font-display font-semibold text-ink text-[1.15rem] leading-[1.3] mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.65] text-[#4A5A6A] mb-5 flex-1">
                  {s.description}
                </p>
                <p className="font-mono text-[0.72rem] tracking-[0.06em] uppercase text-tide mt-auto">
                  {s.tag}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
