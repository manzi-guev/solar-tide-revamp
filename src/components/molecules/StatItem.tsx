import { cn } from '@/lib/cn'

interface StatItemProps {
  label: string
  value: string
  className?: string
  /** Invert colours for use on dark backgrounds */
  dark?: boolean
}

export function StatItem({ label, value, className, dark = false }: StatItemProps) {
  return (
    <div
      className={cn(
        'flex justify-between font-mono text-[0.82rem]',
        'border-t pt-3',
        dark
          ? 'border-slate/20 text-slate'
          : 'border-sand-dim text-slate-700',
        className,
      )}
    >
      <span>{label}</span>
      <span className={dark ? 'text-sand' : 'text-ink'}>{value}</span>
    </div>
  )
}
