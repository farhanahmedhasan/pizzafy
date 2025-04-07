import Button from '../../../components/ui/Button'
import { formatCurrency } from '../../../utils/helpers'

export default function CartItem({ item }) {
  return (
    <li className="py-3 border-b border-stone-200 md:flex md:justify-between md:items-center md:gap-4">
      <p>
        {item.quantity} &times; {item.name}
      </p>
      <div className="flex justify-between md:gap-4">
        <p className="self-end md:self-center text-sm font-bold">{formatCurrency(item.totalPrice)}</p>
        <Button size="sm">Delete</Button>
      </div>
    </li>
  )
}
