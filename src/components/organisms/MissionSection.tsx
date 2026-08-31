import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'

export function MissionSection() {
  return (
    <section id="mission" className="bg-ink-800 text-sand py-24 md:py-[104px] relative overflow-hidden">

      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #2C8C89 0%, transparent 70%)' }}
      />

      <div className="wrap relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-16 items-start">

          {/* Left — label + headline */}
          <ScrollReveal>
            <Eyebrow className="text-tide mb-5">Our mission</Eyebrow>
            <h2
              className="font-display font-semibold text-sand leading-[1.18] max-w-[16ch]"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)' }}
            >
              Powering all people — everywhere the sun shines.
            </h2>
            <div className="mt-8">
              <Button href="/about" variant="ghost" size="md">
                Get to know us
              </Button>
            </div>
          </ScrollReveal>

          {/* Right — story */}
          <ScrollReveal delay={0.1} className="flex flex-col gap-5 text-[0.98rem] leading-[1.78] text-[#C7D2DC]">
            <p>
              The sun rises every morning and gives our planet life. Ocean tides can be
              predicted thousands of years in advance. The wind is a force of nature that
              has a place in legends of nearly all the peoples of the earth. Visionaries
              have long understood: it was only a matter of time before the tide turned —
              before the human race started harnessing these natural phenomena for
              electrical power.
            </p>
            <p>
              Surya Pasang (Solar Tide) is a multinational, full-service renewable energy
              company comprised of engineers and technicians residing in{' '}
              <strong className="text-sand font-semibold">5 nations on 3 continents</strong>.
              We are based in the first, second, and third world — the U.S., Rwanda,
              Burundi, China, and Indonesia. We live in the places we work, and we work
              in the places we live, so we understand the true importance of local,
              economical solutions.
            </p>
            <p>
              Our for-profit company operates according to principles of low environmental
              impact and educational programme support. We are people who care about
              renewable energy and the planet we live on — people who plan to change the
              world and live well while doing it.
            </p>
          </ScrollReveal>

        </div>

        {/* Divider line */}
        <div className="mt-16 border-t border-slate/10" />
      </div>
    </section>
  )
}
