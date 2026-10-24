import type { Metadata } from 'next'
import { Eyebrow } from '@/components/atoms'
import { ProjectCard } from '@/components/molecules'
import { CtaSection } from '@/components/organisms'
import { sanityFetch } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/queries'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies and completed work from Solar Tide — residential solar, C&I installs, consultancy, and energy audits across Rwanda.',
}

const FILTERS = [
  { label: 'All',          value: 'all'         },
  { label: 'Residential',  value: 'residential'  },
  { label: 'C&I Solar',   value: 'commercial'   },
  { label: 'Consultancy', value: 'consultancy'  },
  { label: 'Energy Audit', value: 'audit'        },
] as const

export default async function ProjectsPage() {
  const projects = await sanityFetch<Project[]>({
    query: projectsQuery,
    revalidate: 30,
  })

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-sand pt-24 pb-16">
        <div className="wrap max-w-[640px]">
          <Eyebrow className="text-tide mb-5">Completed work</Eyebrow>
          <h1
            className="font-display font-semibold text-sand leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
          >
            Projects &amp; Case Studies
          </h1>
          <p className="text-[1rem] leading-relaxed text-slate">
            A record of what we have delivered — updated as projects complete.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
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
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand-dim border border-sand-dim">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-display font-semibold text-ink text-[1.2rem] mb-3">No projects yet.</p>
              <p className="text-slate-700 text-[0.95rem]">
                Add your first project in the{' '}
                <a href="/studio" className="text-solar underline">Sanity Studio</a>.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
