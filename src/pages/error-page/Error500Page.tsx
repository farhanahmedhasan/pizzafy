import { useRouteError } from 'react-router'
import Button from '../../components/ui/Button'

export default function Error500Page() {
  const error = useRouteError() as { data?: string }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">⚠️ Oops!</h1>
      <p className="text-xl font-semibold text-gray-800 mb-2">{error.data}</p>
      <p className="text-lg text-gray-600 mb-4">Please try again later.</p>

      <Button href="/">Go Home 🍕</Button>
    </div>
  )
}
