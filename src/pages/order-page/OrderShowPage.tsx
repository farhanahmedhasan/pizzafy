import { useLoaderData } from 'react-router'

import Pill from '../../components/ui/Pill'

export default function OrderShowPage() {
  const order = useLoaderData()
  console.log(order)

  return (
    <section className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap gap-x-8 items-center justify-between">
        <h2 className="text-xl font-semibold">
          Order #{order.id}: {order.status}
        </h2>
        <div className="space-x-2">
          {order.priority && <Pill variant="secondary">Priority</Pill>}
          <Pill>{order.status} order</Pill>
        </div>
      </div>

      <div></div>
    </section>
  )
}
