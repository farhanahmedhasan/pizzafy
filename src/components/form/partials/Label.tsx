import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'

import { cn } from '../../../utils/helpers'

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn('text-sm leading-none', className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
