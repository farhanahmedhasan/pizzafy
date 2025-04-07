import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/helpers'

const pillVariants = cva('text-sm tracking-wide font-semibold uppercase rounded-full', {
  variants: {
    variant: {
      primary: 'text-green-50 bg-green-500',
      secondary: 'text-red-50 bg-red-500'
    },
    size: {
      primary: 'px-3 py-1',
      none: ''
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'primary'
  }
})

interface PillProps extends VariantProps<typeof pillVariants> {
  className?: string
  children: React.ReactNode
}

export default function Pill({ variant, size, className, ...props }: PillProps) {
  return <span className={cn(pillVariants({ variant, size, className }))}>{props.children}</span>
}
