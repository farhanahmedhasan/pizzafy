import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import getAddress from '../../services/apiGeoCoding'
import { RootState } from '../../store'

interface IUser {
  username: string
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  address: string
  error: string
}

function getGeoData(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true
    })
  })
}

const fetchAddress = createAsyncThunk('user/fetchAddressByCoords', async () => {
  const pos = await getGeoData()

  const latLong = {
    lat: pos.coords.latitude,
    long: pos.coords.longitude
  }

  const address = await getAddress(latLong)

  return { latLong, address }
})

const initialState: IUser = {
  username: '',
  status: 'idle',
  address: '',
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending, (state) => {
      state.status = 'loading'
      state.address = 'Allow location access to auto generate location'
    })

    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.address = action.payload.address ?? ''
      state.status = 'succeeded'
    })

    builder.addCase(fetchAddress.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? ''
      state.address = ''
    })
  }
})

export const { updateUsername } = userSlice.actions
export { fetchAddress }
export default userSlice.reducer

export const getUsername = (state: RootState) => state.user.username
export const getUserAddress = (state: RootState) => state.user.address
