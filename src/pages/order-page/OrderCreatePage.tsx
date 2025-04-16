import { ActionFunctionArgs, Form, redirect, useNavigation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useActionData } from 'react-router'
import { useState } from 'react'

import {
  fetchAddress,
  getAddressError,
  getAddressStatus,
  getUserAddress,
  getUsername
} from '../../features/user/userSlice'
import { getCart, getTotalPrice, resetCart } from '../../features/cart/cartSlice'
import FormErrorPartial from '../../components/form/partials/FormErrorPartial'
import { formatCurrency, isValidPhone } from '../../utils/helpers'
import { Label } from '../../components/form/partials/Label'
import { createOrder } from '../../services/apiRestaurant'
import store, { AppDispatch } from '../../store'
import Button from '../../components/ui/Button'
import IOrder from '../../types/order'

export default function OrderCreatePage() {
  const [hasPriority, setHasPriority] = useState<boolean>(false)

  const formErrors = useActionData()
  const navigation = useNavigation().state
  const username = useSelector(getUsername)
  const address = useSelector(getUserAddress)
  const addressStatus = useSelector(getAddressStatus)
  const addressError = useSelector(getAddressError)
  const cart = useSelector(getCart)
  const totalCartPrice = useSelector(getTotalPrice)
  const dispatch = useDispatch<AppDispatch>()

  const finalPrice = hasPriority ? totalCartPrice + totalCartPrice * 0.2 : totalCartPrice

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
          <div className="relative">
            <input
              className="w-full border border-stone-200 pl-4 pr-32 py-2 text-sm transition-all rounded-full placeholder:text-stone-400 focus-primary md:pl-6 md:pr-36 md:py-3"
              type="text"
              defaultValue={address}
              name="address"
              id="address"
              required
            />
            {addressStatus !== 'succeeded' && addressStatus !== 'failed' && (
              <Button
                className="w-fit absolute right-[3px] top-[3px] md:right-[5px] md:top-[5px]"
                type="button"
                size="sm"
                disabled={addressStatus === 'loading'}
                onClick={() => dispatch(fetchAddress())}
              >
                Get Address
              </Button>
            )}
          </div>

          {addressError && <FormErrorPartial message={addressError} />}
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="flex items-center gap-x-2">
          <input
            className="h-6 w-6 accent-yellow-400 focus-primary focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            onChange={() => setHasPriority((prev) => !prev)}
          />
          <Label className="font-medium" htmlFor="priority">
            Want to give your order priority?
          </Label>
        </div>

        <div className="mt-8">
          <Button disabled={navigation === 'submitting'}>
            {navigation === 'submitting' ? 'Placing Order' : `Order Now for ${formatCurrency(finalPrice)}`}
          </Button>
        </div>
        <FormErrorPartial message={formErrors?.cart} className="mt-10" />
      </Form>
    </section>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function clientCreateOrderAction({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData()) as Record<string, string>
  const errors: Record<string, string> = {}

  const order: IOrder = {
    customer: data.customer,
    phone: data.phone,
    address: data.address,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on'
  }

  if (!order.cart.length) {
    errors.cart = 'Please add item to the cart before placing an order'
  }
  if (!isValidPhone(order.phone)) errors.phone = 'Please enter your valid phone number'
  if (Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order)

  store.dispatch(resetCart())

  return redirect(`/order/${newOrder.id}`)
}
