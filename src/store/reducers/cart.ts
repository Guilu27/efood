import { createSlice } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { close } = cartSlice.actions
export default cartSlice.reducer
