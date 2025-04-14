import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ICartItem from '../../types/cart-item'

interface ICart {
  cart: ICartItem[]
}

const initialState: ICart = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      state.cart.push(action.payload)
    },

    removeItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },

    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (item) {
        item.quantity++
        item.totalPrice = item.quantity * item.unitPrice
      }
    },

    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (item) {
        item.quantity--
        item.totalPrice = item.quantity * item.unitPrice
      }
    },

    resetCart(state) {
      state.cart = []
    }
  }
})

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, resetCart } = cartSlice.actions
export default cartSlice.reducer
