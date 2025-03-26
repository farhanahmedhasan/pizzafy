export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400 border-l-4">
          <div className="absolute inset-0 flex justify-center items-center text-xl text-red-500 font-bold">🍕</div>
        </div>
      </div>
    </div>
  )
}
