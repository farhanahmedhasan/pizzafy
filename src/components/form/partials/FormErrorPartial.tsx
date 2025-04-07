import { cn } from '../../../utils/helpers'

interface IProps {
  className?: string
  message?: string
}

export default function FormErrorPartial(props: IProps) {
  return <p className={cn('text-xs font-semibold text-red-600 ml-2', props.className)}>{props.message}</p>
}
