import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  className?: string
}

/** Monospace label tag — used at the bottom of service and project cards. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-[0.72rem] tracking-[0.06em] uppercase text-tide',
        className,
      )}
    >
      {children}
    </span>
  )
}
