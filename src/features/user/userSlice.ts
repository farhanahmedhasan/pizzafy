import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface IUser {
  username: string
}

const initialState: IUser = {
  username: 'as'
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
