import { Eyebrow } from '@/components/atoms'

export function PositionSection() {
  return (
    <section id="about" className="bg-ink-700 text-sand py-[88px] relative overflow-hidden">
      <div className="wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

        {/* Left */}
        <div>
          <Eyebrow className="text-solar mb-[22px]">Why Solar Tide</Eyebrow>
          <h2
            className="font-display font-semibold leading-[1.25] max-w-[16ch]"
            style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)' }}
          >
            Grounded in the grid, not just the panel.
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-[18px] text-[1rem] leading-[1.75] text-[#C7D2DC]">
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
        </div>

      </div>
    </section>
  )
}
