import { useNavigate } from 'react-router'

interface IProps {
  message?: string
}

export default function Error404Page(props: IProps) {
  const url = window.location.pathname
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 text-center p-6">
      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Oops! This slice is missing.</p>
      <p className="text-lg text-gray-600 mb-10">The page you&apos;re looking for might have been eaten.</p>

      <p className="text-sm text-red-600 mb-12">{props.message || `${url} this slice doesn't exists`}</p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
        alt="Pizza slice"
        className="w-32 drop-shadow-lg animate-bounce"
      />

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-red-600 transition-all cursor-pointer"
      >
        Go Back 🍕
      </button>
    </div>
  )
}
