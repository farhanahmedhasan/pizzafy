import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ICartItem from '../../types/cart-item'
import { RootState } from '../../store'

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
      const existingItem = state.cart.find((item) => item.pizzaId === action.payload.pizzaId)

      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.cart.push(action.payload)
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },

    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (item) {
        item.quantity++
      }
    },

    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (item) {
        item.quantity--
      }
    },

    resetCart(state) {
      state.cart = []
    }
  }
})

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, resetCart } = cartSlice.actions
export default cartSlice.reducer

// derived states from cart
export const getCart = (state: RootState) => state.cart.cart

export const getItemById = (id: number) => (state: RootState) => state.cart.cart.find((item) => item.pizzaId === id)

export const getTotalPrice = (state: RootState): number => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
}

export const getTotalPizzas = (state: RootState): number => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
}
