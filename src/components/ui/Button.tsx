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
        secondary:
          'text-stone-600 tracking-wide uppercase border-2 border-stone-200 hover:text-stone-700 hover:bg-stone-300 focus:ring-2 focus:text-800 focus:bg-stone-300 focus:ring-stone-300',
        link: 'text-sm text-blue-500 hover:text-blue-600 hover:underline focus:ring-0'
      },
      size: {
        primary: 'px-4 py-3 rounded-full sm:px-6 sm:py-4',
        icon: 'py-2 px-6',
        lg: 'rounded-md px-8',
        sm: 'text-xs px-4 py-2 rounded-full md:px-5 md:py-2.5',
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
