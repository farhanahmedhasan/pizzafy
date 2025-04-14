import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface IUser {
  username: string
}

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
