import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    close: (state) => {
      state.isOpen = false
    },
    open: (state) => {
      state.isOpen = true
    },
    add: (state, action: PayloadAction<MenuItem>) => {
      const menuItem = state.items.find((item) => item.id === action.payload.id)

      if (!menuItem) {
        state.items.push(action.payload)
      } else {
        alert('A comida já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { close, open, add, remove } = cartSlice.actions
export default cartSlice.reducer
