import Button from '../../components/ui/Button'

export default function CartPage() {
  return (
    <div>
      <Button href="/menu" variant="link" size="none">
        &larr; Back to menu
      </Button>
      <h2>Your cart, %NAME%</h2>

      <div>
        <Button href="/order/new">Order Pizzas</Button>
        <button>Clear cart</button>
      </div>
    </div>
  )
}
