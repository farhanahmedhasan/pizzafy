import { Link } from 'react-router'

export default function CartPage() {
  return (
    <div>
      <Link to="/menu" className="text-sm text-blue-500 hover:text-blue-600 hover:underline">
        &larr; Back to menu
      </Link>
      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order Pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  )
}
