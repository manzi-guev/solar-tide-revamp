import { Button, ScrollReveal } from '@/components/atoms'

export function CtaSection() {
  return (
    <section className="bg-ink py-24 text-center relative overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]"
      >
        <div
          className="w-[700px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #F2A63D 0%, transparent 65%)' }}
        />
      </div>

      {/* Waveform accents */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[60px] opacity-15 overflow-hidden">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30"
            fill="none" stroke="#F2A63D" strokeWidth="1.5" />
          <path d="M0,44 Q150,28 300,44 T600,44 T900,44 T1200,44"
            fill="none" stroke="#2C8C89" strokeWidth="1" />
        </svg>
      </div>

      <div className="wrap max-w-[600px] relative z-[1]">
        <ScrollReveal>
          <h2
            className="font-display font-semibold text-sand mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          >
            Ready to talk about your site?
          </h2>
          <p className="text-slate text-[1rem] leading-relaxed mb-8 max-w-[42ch] mx-auto">
            Share a few details and we will follow up with next steps — whether
            that is a system quote, an audit, or a consultancy scope.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contact" variant="solid" size="lg">
              Request a site assessment
            </Button>
            <Button href="/projects" variant="ghost" size="lg">
              See our work
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
