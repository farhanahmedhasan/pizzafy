import { Link, useNavigate } from 'react-router'

interface IProps {
  disabled?: boolean
  href?: string
  variant?: string
  children: React.ReactNode
}

export default function Button(props: IProps) {
  const navigate = useNavigate()

  if (props.href === '-1') {
    return (
      <button
        className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        {props.children}
      </button>
    )
  }

  if (props.href && props.variant === 'link') {
    return (
      <Link to={props.href} className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 hover:underline">
        {props.children}
      </Link>
    )
  }

  return (
    <button
      disabled={props.disabled}
      className="bg-yellow-400 text-stone-800 tracking-wide font-semibold uppercase px-4 py-3 rounded-full cursor-pointer transition-all hover:bg-yellow-500 focus-primary focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {props.children}
    </button>
  )
}
