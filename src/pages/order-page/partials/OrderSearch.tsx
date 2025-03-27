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
