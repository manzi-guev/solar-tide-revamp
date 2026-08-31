import Link from 'next/link'
import { cn } from '@/lib/cn'
import { PROJECT_TYPE_LABELS, type Project } from '@/types'
import { formatYear } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug.current}`}
      className={cn(
        'group block bg-ink p-[34px_32px] transition-colors duration-250',
        'hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-tide',
        className,
      )}
    >
      {/* Meta row */}
      <div className="flex justify-between items-baseline font-mono text-[0.72rem] tracking-[0.05em] uppercase text-tide mb-4">
        <span>{project.type ? PROJECT_TYPE_LABELS[project.type] : ''}</span>
        {project.date && (
          <span className="text-slate">{formatYear(project.date)}</span>
        )}
      </div>

      <h3 className="font-display font-semibold text-[1.15rem] text-sand mb-2.5 leading-[1.3] group-hover:text-solar transition-colors duration-200">
        {project.title}
      </h3>

      {project.client && (
        <p className="text-[0.93rem] leading-[1.65] text-[#AEBBC8] mb-4">
          {project.location?.city
            ? `${project.client} — ${project.location.city}, ${project.location.country ?? ''}`
            : project.client}
        </p>
      )}

      {/* Stats */}
      {project.stats && project.stats.length > 0 && (
        <div className="flex gap-6 font-mono text-[0.78rem] text-slate border-t border-sand/10 pt-3.5">
          {project.stats.slice(0, 2).map((stat) => (
            <span key={stat.label}>
              <strong className="text-sand font-medium">{stat.value}</strong>{' '}
              {stat.label}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
