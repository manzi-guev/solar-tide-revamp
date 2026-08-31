import { Tag } from '@/components/atoms'
import { cn } from '@/lib/cn'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({ service, icon, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'bg-sand flex flex-col p-[38px_32px_40px] transition-colors duration-250',
        'hover:bg-[#fdfcf9]',
        className,
      )}
    >
      {icon && (
        <div className="w-10 h-10 mb-6 shrink-0" aria-hidden="true">
          {icon}
        </div>
      )}

      <h3 className="font-display font-semibold text-[1.2rem] text-ink mb-3 leading-[1.3]">
        {service.title}
      </h3>

      {service.description && (
        <p className="text-[0.95rem] leading-[1.65] text-slate-900 mb-5">
          {service.description}
        </p>
      )}

      {service.tag && (
        <Tag className="mt-auto">{service.tag}</Tag>
      )}
    </article>
  )
}
