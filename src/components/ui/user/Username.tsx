import { useSelector } from 'react-redux'

import { getUsername } from '../../../features/user/userSlice'

export default function Username() {
  const username = useSelector(getUsername)

  if (!username) return null

  return <p className="hidden text-sm font-semibold md:block">{username}</p>
}
