import { useDispatch, useSelector } from 'react-redux'

import {
  addItem,
  decreaseItemQuantity,
  getItemById,
  increaseItemQuantity,
  removeItem
} from '../../../features/cart/cartSlice'
import { cn, formatCurrency } from '../../../utils/helpers'
import Button from '../../../components/ui/Button'
import IMenuItem from '../../../types/menu-item'

interface IProps {
  menu: IMenuItem
}

export default function MenuItem(props: IProps) {
  const existingItem = useSelector(getItemById(props.menu.id))
  const dispatch = useDispatch()

  function togglAddRemoveCartItem() {
    if (existingItem) {
      dispatch(removeItem(props.menu.id))
    } else {
      dispatch(
        addItem({
          pizzaId: props.menu.id,
          name: props.menu.name,
          unitPrice: props.menu.unitPrice,
          quantity: 1
        })
      )
    }
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={cn('h-24', props.menu.soldOut && 'grayscale-90 opacity-70')}
        src={props.menu.imageUrl}
        alt={props.menu.name}
      />
      <div className="flex flex-col flex-1">
        <p className="font-medium">{props.menu.name}</p>
        <p className={cn('text-sm italic capitalize text-stone-600', props.menu.soldOut && 'text-stone-400')}>
          {props.menu.ingredients.join(', ')}
        </p>

        <div className="flex justify-between text-sm mt-auto">
          {!props.menu.soldOut ? (
            <p className="self-end">{formatCurrency(props.menu.unitPrice)}</p>
          ) : (
            <p className="text-stone-500">Sold Out</p>
          )}

          {!props.menu.soldOut && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  disabled={existingItem?.quantity === 1 || !existingItem}
                  onClick={() => existingItem && dispatch(decreaseItemQuantity(existingItem.pizzaId))}
                >
                  -
                </Button>
                <Button
                  size="sm"
                  onClick={() => existingItem && dispatch(increaseItemQuantity(existingItem.pizzaId))}
                  disabled={!existingItem}
                >
                  +
                </Button>
              </div>

              <Button size="sm" onClick={togglAddRemoveCartItem} className="w-42 flex justify-center">
                {existingItem ? 'Remove from cart' : 'Add to cart'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
