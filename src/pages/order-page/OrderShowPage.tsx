import { useFetcher, useLoaderData } from 'react-router'
import { useReactToPrint } from 'react-to-print'
import { useEffect, useRef } from 'react'

import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers'
import { updateOrder } from '../../services/apiRestaurant'
import Button from '../../components/ui/Button'
import OrderItem from './partials/OrderItem'
import Pill from '../../components/ui/Pill'

export default function OrderShowPage() {
  const pdfRef = useRef<HTMLDivElement>(null)
  const order = useLoaderData()
  const fetcher = useFetcher()

  const handlePrint = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: `Order: ${order.id}`
  })

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
  }, [fetcher])

  return (
    <section ref={pdfRef} className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <h2 className="text-xl font-semibold">
          Order #{order.id}: {order.status}
        </h2>
        <div className="space-x-2">
          <Button variant="link" size="none" onClick={() => handlePrint()}>
            Download PDF ⬇️
          </Button>
          {order.priority && <Pill variant="secondary">Priority</Pill>}
          <Pill>{order.status} order</Pill>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {calcMinutesLeft(order.estimatedDelivery) >= 0
            ? `Only ${calcMinutesLeft(order.estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(order.estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200 border-y border-y-stone-200">
        {order.cart.map((item) => (
          <OrderItem
            key={item.pizzaId}
            item={item}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={fetcher.data?.find((el) => el.id === item.pizzaId).ingredients ?? []}
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(order.orderPrice)}</p>
        {order.priority && (
          <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(order.priorityPrice)}</p>
        )}
        <p className="font-bold">To pay on delivery: {formatCurrency(order.orderPrice + order.priorityPrice)}</p>
      </div>

      {!order.priority && <UpdateOrder />}
    </section>
  )
}

function UpdateOrder() {
  const fetcher = useFetcher()
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button>Make it priority</Button>
    </fetcher.Form>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function clientUpdateOrderPriority({ request, params }) {
  const data = { priority: true }
  await updateOrder(params.OrderId, data)
  return null
}
