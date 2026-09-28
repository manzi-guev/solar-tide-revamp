import { Eyebrow, ScrollReveal } from '@/components/atoms'

const SERVICES = [
  {
    key: 'residential',
    title: 'Residential & C&I Solar Systems',
    subtitle: 'Design · Install · Commission',
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
    subtitle: 'Feasibility · Interconnection · Advisory',
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
    subtitle: 'Assess · Profile · Recommend',
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
    subtitle: 'Design · Deploy · Connect',
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
    <section id="services" className="bg-white py-16 md:py-24 lg:py-[104px]">
      <div className="wrap">

        <ScrollReveal className="max-w-[56ch] mb-14">
          <Eyebrow className="text-solar-dim mb-4">What we do</Eyebrow>
          <h2
            className="font-display font-semibold text-ink mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          >
            Four ways we work with you, from rooftop to regulator.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.key} delay={0.06 * i}>
              <div className="bg-white border border-[#E5EAF0] rounded-xl p-7 flex flex-col gap-5 h-full group hover:border-solar/50 hover:shadow-[0_4px_24px_rgba(242,166,61,0.08)] transition-all duration-200">
                <div className="w-10 h-10 shrink-0">{s.icon}</div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-semibold text-ink text-[1rem] leading-[1.3]">
                    {s.title}
                  </h3>
                  <p className="font-display font-semibold text-solar text-[0.77rem] leading-none">
                    {s.subtitle}
                  </p>
                  <p className="text-[0.87rem] leading-[1.68] text-slate-500 mt-1">
                    {s.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
