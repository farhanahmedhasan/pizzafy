import { formatCurrency } from '../../../utils/helpers'
import IMenuItem from '../../../types/menu-item'

interface IProps {
  menu: IMenuItem
}

export default function MenuItem(props: IProps) {
  return (
    <li>
      <img src={props.menu.imageUrl} alt={props.menu.name} />
      <div>
        <p>{props.menu.name}</p>
        <p>{props.menu.ingredients.join(', ')}</p>

        <div>{!props.menu.soldOut ? <p>{formatCurrency(props.menu.unitPrice)}</p> : 'Sold Out'}</div>
      </div>
    </li>
  )
}
