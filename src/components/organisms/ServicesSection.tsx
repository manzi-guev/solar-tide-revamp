import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'

const SERVICES = [
  {
    key: 'battery',
    title: 'Battery Cell Development and Supply',
    subtitle: 'Lithium-ion and sodium-ion cell solutions',
    description:
      'Acquisition, research, and supply of next-generation battery cell technology for any application — from residential storage to industrial scale.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="5" y="13" width="26" height="14" rx="2" stroke="#F2A63D" strokeWidth="1.4" />
        <path d="M31 17v6" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="33" y="17" width="3" height="6" rx="1" fill="#F2A63D" opacity="0.6" />
        <path d="M11 20h4M17 16v8M23 20h4" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'storage',
    title: 'Energy Storage Solutions',
    subtitle: 'Hydrogen, gravitational, and electrochemical',
    description:
      'Small, medium, and large-scale energy storage services for your community, office building, or industry. Purpose-built for your grid reality.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <ellipse cx="20" cy="13" rx="10" ry="4" stroke="#F2A63D" strokeWidth="1.4" />
        <path d="M10 13v14c0 2.2 4.5 4 10 4s10-1.8 10-4V13" stroke="#F2A63D" strokeWidth="1.4" />
        <path d="M10 20c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="#F2A63D" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M20 17v6M17 20l3-3 3 3" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'solar',
    title: 'Solar Systems',
    subtitle: 'Residential, commercial, or utility',
    description:
      'One eternal power source, one contract, one invoice. Rooftop and ground-mount PV sized and specified from load study through commissioning.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6"  y="6"  width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" rx="1" />
        <rect x="22" y="6"  width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" rx="1" />
        <rect x="6"  y="22" width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" rx="1" />
        <rect x="22" y="22" width="12" height="12" stroke="#F2A63D" strokeWidth="1.4" rx="1" />
        <line x1="20" y1="1"  x2="20" y2="4"  stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="20" y1="36" x2="20" y2="39" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="1"  y1="20" x2="4"  y2="20" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="36" y1="20" x2="39" y2="20" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'wind',
    title: 'Wind Energy',
    subtitle: 'Heat and power from the wind',
    description:
      'Slash maintenance costs and experience stability. Wind power engineered for the site conditions and grid constraints of where you actually operate.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="2.5" fill="#F2A63D" />
        <path d="M20 17.5V8a3 3 0 0 1 3-3h0a3 3 0 0 1 2.6 4.5L20 17.5z" stroke="#F2A63D" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M17.8 21.2L9.5 26a3 3 0 0 1-4.5-2.6v0A3 3 0 0 1 7.5 20l10.3 1.2z" stroke="#F2A63D" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M22.2 21.2L30.5 26a3 3 0 0 0 4.5-2.6v0A3 3 0 0 0 32.5 20L22.2 21.2z" stroke="#F2A63D" strokeWidth="1.3" strokeLinejoin="round" />
        <line x1="20" y1="22.5" x2="20" y2="38" stroke="#F2A63D" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'hydro',
    title: 'Hydrokinetic Power',
    subtitle: 'Ultimate stability and sustainability',
    description:
      'No environment-wrecking dams. Innovative in-stream hydrokinetic products from a trustworthy provider — stable baseload power from flowing water.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M5 26 Q10 20 15 26 T25 26 T35 26" stroke="#F2A63D" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M5 32 Q10 26 15 32 T25 32 T35 32" stroke="#F2A63D" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M20 22V10" stroke="#F2A63D" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M20 10 C20 10 14 14 14 18C14 21.3 16.7 22 20 22C23.3 22 26 21.3 26 18C26 14 20 10 20 10Z" stroke="#F2A63D" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'led',
    title: 'LED Lighting',
    subtitle: 'Light up your environment',
    description:
      'Beat the market price. High-efficiency LED solutions for residential, commercial, and industrial environments — reduce consumption before adding generation.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M15 25c0-3.5 1.5-6.5 5-9a7 7 0 1 1 0 18H15z" stroke="#F2A63D" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M15 29h10M15 32h10" stroke="#F2A63D" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M20 34v3" stroke="#F2A63D" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="20" y1="5" x2="20" y2="8" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="9"  y1="9"  x2="11" y2="11" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="31" y1="9"  x2="29" y2="11" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="5"  y1="20" x2="8"  y2="20" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="35" y1="20" x2="32" y2="20" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'building',
    title: 'Energy Efficient Building',
    subtitle: 'Reduce your energy consumption',
    description:
      'Technical and design assistance for your home, office, or factory. We identify where energy is wasted so you spend less before you generate more.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M5 36V18l15-12 15 12v18H5z" stroke="#F2A63D" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M15 36v-9h10v9" stroke="#F2A63D" strokeWidth="1.3" strokeLinejoin="round" />
        <rect x="10" y="20" width="5" height="5" rx="0.5" stroke="#F2A63D" strokeWidth="1.2" />
        <rect x="25" y="20" width="5" height="5" rx="0.5" stroke="#F2A63D" strokeWidth="1.2" />
        <path d="M20 12v4M18 14h4" stroke="#F2A63D" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 md:py-[104px]">
      <div className="wrap">

        <ScrollReveal className="max-w-[56ch] mb-14">
          <Eyebrow className="text-solar-dim mb-4">What we do</Eyebrow>
          <h2
            className="font-display font-semibold text-ink mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          >
            Our services
          </h2>
          <p className="text-[0.97rem] leading-[1.72] text-slate-600 max-w-[52ch]">
            Through our innovative products and services, our customers are directly
            involved in the ongoing effort for sustainability — adapting their homes,
            buildings, industries, and nations to meet the demands of the world.
          </p>
        </ScrollReveal>

        {/* 7-item grid: 2 col → 3 col → last item centred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ScrollReveal
              key={s.key}
              delay={0.06 * i}
              className={i === 6 ? 'md:col-start-2' : ''}
            >
              <div className="bg-white border border-[#E5EAF0] rounded-xl p-7 flex flex-col gap-5 h-full group hover:border-solar/50 hover:shadow-[0_4px_24px_rgba(242,166,61,0.08)] transition-all duration-200">
                {/* Icon */}
                <div className="w-10 h-10 shrink-0">{s.icon}</div>

                {/* Text */}
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

                {/* CTA */}
                <div className="pt-1">
                  <Button href="/contact" variant="outline" size="sm">
                    Get offer
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
