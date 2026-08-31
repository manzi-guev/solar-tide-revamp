import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import Link from 'next/link'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        solid:   'bg-solar text-ink hover:bg-[#ffb852] rounded-md',
        ghost:   'border border-sand/30 text-sand hover:border-sand rounded-md',
        outline: 'border border-ink text-ink hover:bg-ink hover:text-sand rounded-md',
        tide:    'bg-tide text-sand hover:bg-tide-dim rounded-md',
        link:    'text-tide underline-offset-4 hover:underline p-0',
      },
      size: {
        sm: 'text-[0.85rem] px-[18px] py-[9px]',
        md: 'text-[0.92rem] px-6 py-[13px]',
        lg: 'text-base px-8 py-[15px]',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  if (asChild) {
    return (
      <Slot className={classes} {...(props as React.HTMLAttributes<HTMLElement>)}>
        {children}
      </Slot>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
