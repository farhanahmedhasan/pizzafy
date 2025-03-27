import { useLoaderData } from 'react-router'

export default function OrderShowPage() {
  const order = useLoaderData()

  return (
    <div>
      <h2 className="text-xl font-semibold">Order status: {order.status}</h2>
    </div>
  )
}
