import { Form, redirect, useNavigation } from 'react-router'
import { useActionData } from 'react-router'

import { createOrder } from '../../services/apiRestaurant'
import { isValidPhone } from '../../utils/helpers'

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
  const formErrors = useActionData()
  const navigation = useNavigation().state
  const cart = fakeCart

  return (
    <div className="max-w-3xl mx-auto my-10">
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label htmlFor="customer">First Name</label>
          <input type="text" name="customer" id="customer" required />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" required />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required />
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <button disabled={navigation === 'submitting'}>
            {navigation === 'submitting' ? 'Placing Order' : 'Order Now'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export async function clientCreateOrderAction({ request }) {
  const data = Object.fromEntries(await request.formData())

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on'
  }

  const errors = {}

  if (!isValidPhone(order.phone)) errors.phone = 'Please enter your valid phone number'

  if (Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order)

  return redirect(`/order/${newOrder.id}`)
}
