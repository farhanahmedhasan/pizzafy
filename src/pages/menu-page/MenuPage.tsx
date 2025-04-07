import { useLoaderData } from 'react-router'

import IMenuItem from '../../types/menu-item'
import MenuItem from './partials/MenuItem'

export default function MenuPage() {
  const menu = useLoaderData()

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: IMenuItem) => {
        return <MenuItem key={pizza.id} menu={pizza} />
      })}
    </ul>
  )
}
