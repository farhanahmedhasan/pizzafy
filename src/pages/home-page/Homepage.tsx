import { useSelector } from 'react-redux'

import UserCreate from '../../components/ui/user/UserCreate'
import { getUsername } from '../../features/user/userSlice'
import Button from '../../components/ui/Button'

export default function Homepage() {
  const username = useSelector(getUsername)

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl font-semibold mb-8 px-4 md:text-3xl">
        The best pizza <br />
        <span className="text-yellow-500">Straight out of oven, straight to you.</span>
      </h1>

      {username === '' ? <UserCreate /> : <Button href="/menu">Continue Ordering, {username}</Button>}
    </div>
  )
}
