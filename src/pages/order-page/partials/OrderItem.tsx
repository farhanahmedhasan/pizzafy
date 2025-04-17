import { formatCurrency } from '../../../utils/helpers'

interface IProps {
  isLoadingIngredients: boolean
  item: Record<string, string | number>
  ingredients: string[]
}

function OrderItem(props: IProps) {
  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{props.item.quantity}&times;</span> {props.item.name}
        </p>
        <p className="font-bold">{formatCurrency(props.item.totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        Ingredients: {props.isLoadingIngredients ? 'Loading...' : props.ingredients.join(', ')}
      </p>
    </li>
  )
}

export default OrderItem
