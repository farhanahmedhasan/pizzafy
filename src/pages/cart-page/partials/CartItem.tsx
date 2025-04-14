import { formatCurrency } from '../../../utils/helpers'
import Button from '../../../components/ui/Button'
import ICartItem from '../../../types/cart-item'

interface IProps {
  cartItem: ICartItem
}

export default function CartItem(props: IProps) {
  return (
    <li className="py-3 border-b border-stone-200 md:flex md:justify-between md:items-center md:gap-4">
      <p>
        {props.cartItem.quantity} &times; {props.cartItem.name}
      </p>
      <div className="flex justify-between md:gap-4">
        <p className="self-end md:self-center text-sm font-bold">
          {formatCurrency(props.cartItem.quantity * props.cartItem.unitPrice)}
        </p>
        <Button size="sm">Delete</Button>
      </div>
    </li>
  )
}
