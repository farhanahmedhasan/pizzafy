const API_URL = 'https://react-fast-pizza-api.jonas.io/api'

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`)
    if (!res.ok) throw Error('Failed getting menu')
    const { data } = await res.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('An unknown error occurred', error)
    }
  }
}
