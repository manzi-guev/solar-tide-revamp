import { cn } from '@/lib/cn'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'span' | 'p'
  showLine?: boolean
}

export function Eyebrow({
  children,
  className,
  as: Tag = 'div',
  showLine = true,
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'font-mono text-[0.78rem] tracking-[0.12em] uppercase',
        'flex items-center gap-2.5',
        className,
      )}
    >
      {showLine && (
        <span className="inline-block w-[26px] h-px bg-current shrink-0" aria-hidden="true" />
      )}
      {children}
    </Tag>
  )
}
