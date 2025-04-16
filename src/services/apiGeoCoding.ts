// LocationIQ
async function getAddress({ lat, long }: { lat: number; long: number }) {
  try {
    const res = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=${
        import.meta.env.VITE_LOCATION_IQ_GEO_API_KEY
      }&lat=${lat}&lon=${long}&format=json`
    )

    if (!res.ok) throw Error('Failed getting the address')

    const data = await res.json()
    const address = data.address

    return `${address.road ?? ''} ${address.quarter ?? ''} ${address.city ?? ''}`.trim()
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    } else {
      console.error('Unknown error:', error)
    }
  }
}
export default getAddress

// OpenCage
// async function getAddress({ lat, long }: Record<string, number>) {
//   const res = await fetch(
//     `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${long}&key=${import.meta.env.VITE_OPEN_CAGE_GEO_API_KEY}`
//   )

//   const data = await res.json()
//   const address = data.results[0].formatted
//   console.log(data)
//   console.log(data.results[0].formatted)
//   return address
// }
