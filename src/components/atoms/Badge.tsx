import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center font-mono text-[0.68rem] tracking-[0.06em] uppercase',
  {
    variants: {
      variant: {
        default:  'bg-sand-dim text-slate-900 border border-sand-dim',
        solar:    'bg-solar-pale text-solar-dim border border-solar/30',
        tide:     'bg-tide-pale text-tide-dim border border-tide/30',
        ink:      'bg-ink text-sand border border-ink',
      },
      size: {
        sm: 'px-2 py-0.5 rounded-[2px]',
        md: 'px-2.5 py-1 rounded-[2px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}
