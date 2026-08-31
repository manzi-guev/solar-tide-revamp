import { Eyebrow, Button, ScrollReveal } from '@/components/atoms'
import { ProjectCard } from '@/components/molecules'
import type { Project } from '@/types'

const FALLBACK_PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'Rooftop array — commercial office park, Kigali',
    slug: { current: 'rooftop-office-park-kigali' },
    type: 'commercial',
    date: '2025-03-01',
    stats: [
      { label: 'kWp installed',  value: '—' },
      { label: 'month build',    value: '—' },
    ],
  },
  {
    _id: '2',
    title: 'Off-grid home system, Southern Province',
    slug: { current: 'off-grid-home-southern-province' },
    type: 'residential',
    date: '2025-01-01',
    stats: [
      { label: 'kWp installed',  value: '—' },
      { label: 'battery capacity', value: '—' },
    ],
  },
  {
    _id: '3',
    title: 'Solar carport feasibility, commercial parking sites',
    slug: { current: 'solar-carport-feasibility-kigali' },
    type: 'consultancy',
    date: '2024-09-01',
    stats: [
      { label: 'sites assessed',   value: '—' },
      { label: 'report delivered', value: '—' },
    ],
  },
  {
    _id: '4',
    title: 'Load profiling & efficiency review, industrial client',
    slug: { current: 'load-profiling-efficiency-review' },
    type: 'audit',
    date: '2024-06-01',
    stats: [
      { label: '% savings identified', value: '—' },
      { label: 'week engagement',      value: '—' },
    ],
  },
]

interface ProjectsSectionProps {
  projects?: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const items = projects && projects.length > 0 ? projects : FALLBACK_PROJECTS

  return (
    <section id="projects" className="bg-ink text-sand py-24 md:py-[104px] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] opacity-[0.04]"
        style={{ background: 'radial-gradient(circle at bottom right, #2C8C89, transparent 70%)' }}
      />

      <div className="wrap relative z-[1]">

        <ScrollReveal className="max-w-[56ch] mb-14">
          <Eyebrow className="text-tide mb-4">Completed work</Eyebrow>
          <h2 className="font-display font-semibold text-sand"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            A sample of recent installs and studies.
          </h2>
          <p className="text-[0.98rem] leading-[1.65] text-slate mt-3.5 max-w-[52ch]">
            A working record of what we have delivered — updated as projects complete.
          </p>
        </ScrollReveal>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand/8 border border-sand/8">
          {items.slice(0, 4).map((project, i) => (
            <ScrollReveal key={project._id} delay={0.06 * i}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-8 flex items-center gap-6">
          <Button href="/projects" variant="ghost" size="md">
            View all projects →
          </Button>
          <span className="font-mono text-[0.76rem] text-slate/60 hidden md:inline">
            Placeholder entries — replace via Sanity CMS
          </span>
        </ScrollReveal>

      </div>
    </section>
  )
}
