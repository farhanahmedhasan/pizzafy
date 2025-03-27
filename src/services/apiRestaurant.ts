const API_URL = 'https://react-fast-pizza-api.jonas.io/api'

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`)
    if (!res.ok) throw new Response('Failed to fetch menu', { status: 500 })
    const { data } = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching menu:', error)

    if (error instanceof Error) {
      throw new Response('Failed to fetch menu', { status: 500 })
    } else {
      throw new Response('Failed to fetch menu', { status: 500 })
    }
  }
}

export async function getOrder(id: string | undefined) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`)
    if (!res.ok) throw new Response(`Couldn't find order with the id:${id}`, { status: 404 })
    const { data } = await res.json()
    return data
  } catch (error: unknown) {
    console.log('Error fetching order:', error)

    if (error instanceof Response) {
      throw error
    }

    if (error instanceof Error) {
      throw new Response(error.message, { status: 500 })
    }

    throw new Response('An unknown error occurred', { status: 500 })
  }
}
