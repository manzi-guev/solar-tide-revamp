import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Eyebrow, Button, Badge, PortableTextBody } from '@/components/atoms'
import { sanityFetch } from '@/sanity/lib/client'
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/queries'
import { PROJECT_TYPE_LABELS, type Project } from '@/types'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: projectSlugsQuery,
    revalidate: false,
  })
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await sanityFetch<Project | null>({
    query: projectBySlugQuery,
    params: { slug },
    revalidate: 30,
  })
  return {
    title: project?.title ?? slug.replace(/-/g, ' '),
    description: project?.client
      ? `${project.title} — Solar Tide project for ${project.client}.`
      : 'Solar Tide project case study.',
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = await sanityFetch<Project | null>({
    query: projectBySlugQuery,
    params: { slug },
    revalidate: 30,
  })

  if (!project) notFound()

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
          <h1
            className="font-display font-semibold text-sand leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
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
          {project.body ? (
            <PortableTextBody value={project.body} />
          ) : (
            <p className="text-slate-500 text-[0.9rem] italic">
              No description added yet. Edit this project in the{' '}
              <a href="/studio" className="text-solar underline">Sanity Studio</a>.
            </p>
          )}
          <div className="mt-10">
            <Button href="/projects" variant="outline" size="md">← Back to projects</Button>
          </div>
        </div>
      </section>
    </>
  )
}
