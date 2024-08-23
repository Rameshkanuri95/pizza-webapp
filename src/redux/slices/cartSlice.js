import { createSlice } from "@reduxjs/toolkit"

const intialState = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  intialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count
      }, 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload)

      if (findItem.count > 0) {
        findItem.count--
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((items) => items.id !== action.payload)
    },
    clearItem(state) {
      state.item = []
      state.totalPrice = 0
    },
  },
})

export const selectCart = (state) => state.cart
export const selectCartItemById = (id) => (state) =>
  state.cart.item.find((item) => item.id === id)

export const { addItem, minusItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer
