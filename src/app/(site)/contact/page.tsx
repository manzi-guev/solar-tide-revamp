import type { Metadata } from 'next'
import { Eyebrow } from '@/components/atoms'
import { ContactForm } from '@/components/organisms'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Solar Tide — become a client, request a site assessment, or ask about our energy consultancy.',
}

const CONTACT_DETAILS = [
  { label: 'Phone',    value: '+1 (907) 203-8888'       },
  { label: 'Email',    value: 'gilgamesh@solartide.com'  },
  { label: 'Location', value: 'Kigali, Rwanda (primary)' },
  { label: 'Social',   value: '@solar_tide'              },
  { label: 'Hours',    value: 'Mon–Fri, 08:00–17:00 CAT' },
] as const

const HOW_TO_APPLY = [
  'Tell us your location (country & city)',
  'Estimate your monthly energy usage',
  'Send us your enquiry — we handle the rest',
] as const

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-sand pt-24 pb-10">
        <div className="wrap max-w-[560px]">
          <Eyebrow className="text-tide mb-5">Contact</Eyebrow>
          <h1
            className="font-display font-semibold text-sand leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
          >
            Tell us what you are working with.
          </h1>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-sand py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">

          {/* Left — contact info + application steps */}
          <div>
            <p className="text-[0.98rem] leading-[1.7] text-slate-900 mb-8 max-w-[38ch]">
              Does your residence, community, business, NGO, or government
              institution want clean and green power or energy storage? Apply
              by sharing a few details and we will follow up with your options.
            </p>

            {/* How to apply */}
            <div className="mb-8">
              <p className="font-display font-semibold text-[0.8rem] uppercase tracking-[0.08em] text-solar-dim mb-4">
                How to apply
              </p>
              <ol className="flex flex-col gap-2.5">
                {HOW_TO_APPLY.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-[0.88rem] text-slate-900">
                    <span className="font-display font-bold text-solar mt-0.5 shrink-0 text-[0.75rem]">
                      0{i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3 border-t border-sand-dim pt-6">
              {CONTACT_DETAILS.map(({ label, value }) => (
                <div key={label} className="flex gap-3 text-[0.88rem] text-ink">
                  <span className="text-slate min-w-[72px] font-display font-medium">{label}</span>
                  <span className="font-display">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  )
}
