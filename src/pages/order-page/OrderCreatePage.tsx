import { ActionFunctionArgs, Form, redirect, useNavigation } from 'react-router'
import { useActionData } from 'react-router'
import { useSelector } from 'react-redux'

import FormErrorPartial from '../../components/form/partials/FormErrorPartial'
import { Label } from '../../components/form/partials/Label'
import { getUsername } from '../../features/user/userSlice'
import { createOrder } from '../../services/apiRestaurant'
import { getCart } from '../../features/cart/cartSlice'
import { isValidPhone } from '../../utils/helpers'
import Button from '../../components/ui/Button'
import IOrder from '../../types/order'

export default function OrderCreatePage() {
  const formErrors = useActionData()
  const navigation = useNavigation().state
  const username = useSelector(getUsername)
  const cart = useSelector(getCart)

  return (
    <section className="px-4 py-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2">
          <Label htmlFor="customer">First Name</Label>
          <input
            className="w-full border border-stone-200 px-4 py-2 text-sm transition-all rounded-full placeholder:text-stone-400 focus-primary md:px-6 md:py-3"
            type="text"
            name="customer"
            id="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <input
            className="w-full border border-stone-200 px-4 py-2 text-sm transition-all rounded-full placeholder:text-stone-400 focus-primary md:px-6 md:py-3"
            type="tel"
            name="phone"
            id="phone"
            required
          />
          {formErrors?.phone && <FormErrorPartial message={formErrors.phone} />}
        </div>

        <div className="mb-5 flex flex-col gap-2">
          <Label htmlFor="address">Address</Label>
          <input
            className="w-full border border-stone-200 px-4 py-2 text-sm transition-all rounded-full placeholder:text-stone-400 focus-primary md:px-6 md:py-3"
            type="text"
            name="address"
            id="address"
            required
          />
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="flex items-center gap-x-2">
          <input
            className="h-6 w-6 accent-yellow-400 focus-primary focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <Label className="font-medium" htmlFor="priority">
            Want to give your order priority?
          </Label>
        </div>

        <div className="mt-8">
          <Button disabled={navigation === 'submitting'}>
            {navigation === 'submitting' ? 'Placing Order' : 'Order Now'}
          </Button>
        </div>
      </Form>
    </section>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function clientCreateOrderAction({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData()) as Record<string, string>

  const order: IOrder = {
    name: data.customer,
    phone: data.phone,
    address: data.address,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on'
  }

  const errors: Record<string, string> = {}

  if (!isValidPhone(order.phone)) errors.phone = 'Please enter your valid phone number'

  if (Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order)

  return redirect(`/order/${newOrder.id}`)
}
