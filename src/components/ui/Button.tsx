import { cva, VariantProps } from 'class-variance-authority'
import { Link } from 'react-router'
import React from 'react'

import { cn } from '../../utils/helpers'

const buttonVariants = cva(
  'inline-flex font-semibold transition-all cursor-pointer focus:outline-0 focus:ring disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-yellow-400 text-stone-800 tracking-wide uppercase hover:bg-yellow-500 focus:ring-offset-2 focus:ring-yellow-500',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-sm text-blue-500 hover:text-blue-600 hover:underline focus:ring-0'
      },
      size: {
        primary: 'px-4 py-3 rounded-full sm:px-6 sm:py-4',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        none: ''
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'primary'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, href, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))

    if (href) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

export default Button
