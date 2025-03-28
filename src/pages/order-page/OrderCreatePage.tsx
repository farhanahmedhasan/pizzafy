import { Form } from 'react-router'

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

export default function OrderCreatePage() {
  const cart = fakeCart

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label htmlFor="customer">First Name</label>
          <input type="text" name="customer" id="customer" required />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" required />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required />
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" required />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <button>Order Now</button>
        </div>
      </Form>
    </div>
  )
}
