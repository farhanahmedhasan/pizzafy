import { useSelector } from 'react-redux'
import { Link } from 'react-router'

import { getTotalPizzas, getTotalPrice } from '../features/cart/cartSlice'
import { formatCurrency } from '../utils/helpers'

export default function AppLayoutCartOverview() {
  const totalPrice = useSelector(getTotalPrice)
  const totalPizzas = useSelector(getTotalPizzas)

  return (
    <div className="row-auto flex items-center justify-between bg-stone-800 text-stone-200 text-sm uppercase py-4 px-3 sm:px-6 sm:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}
