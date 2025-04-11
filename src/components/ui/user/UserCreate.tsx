import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { updateUsername } from '../../../features/user/userSlice'
import Button from '../Button'

export default function UserCreate() {
  const [username, setUsername] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!username) return

    dispatch(updateUsername(username))
    navigate('/menu')
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
          <Button type="submit">Start Ordering</Button>
        </div>
      )}
    </form>
  )
}
