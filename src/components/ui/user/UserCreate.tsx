import { useState } from 'react'

export default function UserCreate() {
  const [username, setUsername] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-stone-600 text-sm mb-4 md:text-base">👋 welcome! Please start by telling us your name:</p>

      <input
        className="w-72"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your full name"
      />

      {username !== '' && (
        <div>
          <button>Start Ordering</button>
        </div>
      )}
    </form>
  )
}
