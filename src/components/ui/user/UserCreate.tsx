import { useState } from 'react'
import Button from '../Button'

export default function UserCreate() {
  const [username, setUsername] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-stone-600 text-sm mb-4 md:text-base">👋 welcome! Please start by telling us your name:</p>

      <input
        className="w-72 mb-8 px-4 py-1 outline-0 border border-stone-200 rounded-full"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your full name"
      />

      {username !== '' && (
        <div>
          <Button>Start Ordering</Button>
        </div>
      )}
    </form>
  )
}
