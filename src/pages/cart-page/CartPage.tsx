import { useSelector } from 'react-redux'

import Button from '../../components/ui/Button'
import CartItem from './partials/CartItem'
import { RootState } from '../../store'

export default function CartPage() {
  const username = useSelector((state: RootState) => state.user.username)
  const cart = useSelector((state: RootState) => state.cart.cart)

  return (
    <section className="px-4 py-3">
      <Button href="/menu" variant="link" size="none">
        &larr; Back to menu
      </Button>

      <h2 className="text-xl font-semibold mt-7">Your cart, {username}</h2>

      <ul className="mt-2">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} cartItem={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button href="/order/new">Order Pizzas</Button>
        <Button variant="secondary" className="py-2.5 sm:py-3.5">
          Clear cart
        </Button>
      </div>
    </section>
  )
}
