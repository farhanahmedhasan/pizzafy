import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import getAddress from '../../services/apiGeoCoding'

interface IUser {
  username: string
}

function getGeoData(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true
    })
  })
}

async function fetchAddress() {
  const pos = await getGeoData()

  const latLong = {
    lat: pos.coords.latitude,
    long: pos.coords.longitude
  }

  const address = await getAddress(latLong)
  console.log(address)

  return { latLong, address }
}

fetchAddress()

const initialState: IUser = {
  username: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    }
  }
})

export const { updateUsername } = userSlice.actions
export default userSlice.reducer

export const getUsername = (state: RootState) => state.user.username
