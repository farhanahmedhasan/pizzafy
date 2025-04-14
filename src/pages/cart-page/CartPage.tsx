import { useDispatch, useSelector } from 'react-redux'

import { getCart, resetCart } from '../../features/cart/cartSlice'
import { getUsername } from '../../features/user/userSlice'
import Button from '../../components/ui/Button'
import CartItem from './partials/CartItem'

export default function CartPage() {
  const username = useSelector(getUsername)
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  const isCartEmpty = cart.length === 0

  return (
    <section className="px-4 py-3">
      <Button href="/menu" variant="link" size="none">
        &larr; Back to menu
      </Button>

      <h2 className="text-xl font-semibold mt-7">{isCartEmpty ? 'Your cart is empty' : `Your cart, ${username}`}</h2>

      <ul className="mt-2">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} cartItem={item} />
        ))}
      </ul>

      {isCartEmpty && <p className="font-semibold">Please add item to place an order</p>}
      {!isCartEmpty && (
        <div className="mt-6 space-x-2">
          <Button href="/order/new">Order Pizzas</Button>
          <Button variant="secondary" className="py-2.5 sm:py-3.5" onClick={() => dispatch(resetCart())}>
            Clear cart
          </Button>
        </div>
      )}
    </section>
  )
}
