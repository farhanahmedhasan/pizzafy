import { useDispatch } from 'react-redux'

import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../../../features/cart/cartSlice'
import { formatCurrency } from '../../../utils/helpers'
import Button from '../../../components/ui/Button'
import ICartItem from '../../../types/cart-item'

interface IProps {
  cartItem: ICartItem
}

export default function CartItem(props: IProps) {
  const dispatch = useDispatch()
  return (
    <li className="py-3 border-b border-stone-200 md:flex md:justify-between md:items-center md:gap-4">
      <p>
        {props.cartItem.quantity} &times; {props.cartItem.name}
      </p>
      <div className="flex justify-between md:gap-4">
        <p className="self-end md:self-center text-sm font-bold">
          {formatCurrency(props.cartItem.quantity * props.cartItem.unitPrice)}
        </p>
        <div className="flex gap-4">
          <Button size="sm" onClick={() => dispatch(increaseItemQuantity(props.cartItem.pizzaId))}>
            +
          </Button>
          <Button
            size="sm"
            disabled={props.cartItem.quantity === 1}
            onClick={() => dispatch(decreaseItemQuantity(props.cartItem.pizzaId))}
          >
            -
          </Button>
          <Button size="sm" variant="destroy" onClick={() => dispatch(removeItem(props.cartItem.pizzaId))}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  )
}
