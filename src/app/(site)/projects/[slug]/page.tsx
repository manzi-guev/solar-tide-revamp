import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Eyebrow, Button, Badge } from '@/components/atoms'
import { PROJECT_TYPE_LABELS, type Project } from '@/types'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: slug.replace(/-/g, ' '),
    description: 'Solar Tide project case study.',
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params

  /*
   * TODO: Fetch from Sanity when connected.
   * const project = await sanityFetch<Project>({
   *   query: projectBySlugQuery,
   *   params: { slug },
   *   tags: [`project:${slug}`],
   * })
   * if (!project) notFound()
   */

  /* Placeholder — remove once Sanity is wired */
  const project: Project = {
    _id: slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    slug: { current: slug },
    type: 'commercial',
    date: '2025-01-01',
    client: 'Placeholder client',
    location: { city: 'Kigali', country: 'Rwanda' },
    stats: [
      { label: 'Capacity',  value: '— kWp' },
      { label: 'Duration',  value: '— months' },
      { label: 'Outcome',   value: '—' },
    ],
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-ink border-b border-slate/10" aria-label="Breadcrumb">
        <div className="wrap py-3 flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.05em] uppercase text-slate">
          <Link href="/projects" className="hover:text-sand transition-colors">Projects</Link>
          <span>›</span>
          <span className="text-solar truncate">{project.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-ink text-sand pt-16 pb-14">
        <div className="wrap max-w-[760px]">
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="tide">{PROJECT_TYPE_LABELS[project.type]}</Badge>
            {project.date && (
              <span className="font-mono text-[0.72rem] text-slate">{formatDate(project.date)}</span>
            )}
          </div>
          <h1 className="font-display font-semibold text-sand leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            {project.title}
          </h1>
          {project.location && (
            <Eyebrow className="text-tide" showLine={false}>
              {[project.location.city, project.location.country].filter(Boolean).join(', ')}
            </Eyebrow>
          )}
        </div>
      </section>

      {/* Stats bar */}
      {project.stats && project.stats.length > 0 && (
        <div className="bg-ink-800 border-b border-slate/10">
          <div className="wrap py-5 flex flex-wrap gap-8">
            {project.stats.map(({ label, value }) => (
              <div key={label} className="font-mono text-[0.8rem]">
                <span className="text-slate uppercase tracking-[0.08em] mr-2 text-[0.68rem]">{label}</span>
                <strong className="text-sand font-medium">{value}</strong>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Body */}
      <section className="bg-sand py-16">
        <div className="wrap max-w-[680px]">
          <p className="text-slate-700 text-[0.9rem] italic border border-sand-dim bg-white p-4 mb-8">
            Project description is managed via Sanity CMS. Add content for this project
            in the studio and it will appear here automatically.
          </p>
          <Button href="/projects" variant="outline" size="md">
            ← Back to projects
          </Button>
        </div>
      </section>
    </>
  )
}
