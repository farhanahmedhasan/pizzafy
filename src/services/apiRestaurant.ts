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
