import { Link, useLoaderData } from 'react-router'

import IMenuItem from '../../types/menu-item'
import MenuItem from './partials/MenuItem'

export default function MenuPage() {
  const menu = useLoaderData()

  return (
    <div>
      <Link to={'/cart'}>GO Back to Cart</Link>
      <h3>Menu Page</h3>

      <ul>
        {menu.map((pizza: IMenuItem) => {
          return <MenuItem key={pizza.id} menu={pizza} />
        })}
      </ul>
    </div>
  )
}
