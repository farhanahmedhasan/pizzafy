import Button from '../../components/ui/Button'
import CartItem from './partials/CartItem'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15
  }
]

export default function CartPage() {
  const cart = fakeCart
  return (
    <section className="px-4 py-3">
      <Button href="/menu" variant="link" size="none">
        &larr; Back to menu
      </Button>

      <h2 className="text-xl font-semibold mt-7">Your cart, %NAME%</h2>

      <ul className="mt-2">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
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
