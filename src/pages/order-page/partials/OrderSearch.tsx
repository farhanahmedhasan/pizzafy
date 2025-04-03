import { useNavigate } from 'react-router'
import { useState } from 'react'

import { formatToSlug } from '../../../utils/helpers'

export default function OrderSearch() {
  const navigate = useNavigate()
  const [query, setQuery] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!query || query.trim() === '') return

    navigate(`/order/${formatToSlug(query)}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="bg-yellow-100 text-sm w-28 px-4 py-2 rounded-full transition-all sm:w-64 sm:focus:w-72 placeholder:text-stone-400 focus:outline-0 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
        type="text"
        id="text"
        name="order"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        placeholder="Search order #"
      />
    </form>
  )
}
