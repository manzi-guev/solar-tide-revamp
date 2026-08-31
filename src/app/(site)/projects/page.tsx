import type { Metadata } from 'next'
import { Eyebrow } from '@/components/atoms'
import { ProjectCard } from '@/components/molecules'
import { CtaSection } from '@/components/organisms'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies and completed work from Solar Tide — residential solar, C&I installs, consultancy, and energy audits across Rwanda.',
}

/* Fallback data — replace via Sanity */
const FALLBACK: Project[] = [
  { _id: '1', title: 'Rooftop array — commercial office park, Kigali',          slug: { current: 'rooftop-office-park-kigali'    }, type: 'commercial',  date: '2025-03-01', stats: [{ label: 'kWp installed', value: '—' }, { label: 'month build', value: '—' }] },
  { _id: '2', title: 'Off-grid home system, Southern Province',                  slug: { current: 'off-grid-home-southern'         }, type: 'residential', date: '2025-01-01', stats: [{ label: 'kWp installed', value: '—' }, { label: 'battery', value: '—' }] },
  { _id: '3', title: 'Solar carport feasibility, commercial parking sites',       slug: { current: 'solar-carport-kigali'           }, type: 'consultancy', date: '2024-09-01', stats: [{ label: 'sites assessed', value: '—' }, { label: 'report', value: '—' }] },
  { _id: '4', title: 'Load profiling & efficiency review, industrial client',     slug: { current: 'load-profiling-industrial'      }, type: 'audit',       date: '2024-06-01', stats: [{ label: '% savings', value: '—' }, { label: 'weeks', value: '—' }] },
]

const FILTERS = [
  { label: 'All',           value: 'all'        },
  { label: 'Residential',   value: 'residential' },
  { label: 'C&I Solar',     value: 'commercial'  },
  { label: 'Consultancy',   value: 'consultancy' },
  { label: 'Energy Audit',  value: 'audit'       },
] as const

export default function ProjectsPage() {
  /*
   * TODO: Fetch from Sanity when connected.
   * const projects = await sanityFetch<Project[]>({ query: projectsQuery, tags: ['project'] })
   */
  const projects = FALLBACK

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-sand pt-24 pb-16">
        <div className="wrap max-w-[640px]">
          <Eyebrow className="text-tide mb-5">Completed work</Eyebrow>
          <h1 className="font-display font-semibold text-sand leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            Projects &amp; Case Studies
          </h1>
          <p className="text-[1rem] leading-relaxed text-slate">
            A record of what we have delivered. Each entry is updated as projects
            complete — add real data via the Sanity CMS.
          </p>
        </div>
      </section>

      {/* Filter tabs — client-side filtering would go here; static for now */}
      <section className="bg-sand py-3 border-b border-sand-dim sticky top-[72px] z-10">
        <div className="wrap flex gap-2 overflow-x-auto no-scrollbar">
          {FILTERS.map(({ label, value }) => (
            <span
              key={value}
              className="font-mono text-[0.72rem] uppercase tracking-[0.06em] px-3.5 py-2 border border-sand-dim text-slate-700 whitespace-nowrap cursor-pointer hover:border-ink hover:text-ink transition-colors"
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-sand py-16">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand-dim border border-sand-dim">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
