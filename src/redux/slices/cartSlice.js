import { createSlice } from "@reduxjs/toolkit"

const intialState = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
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
      },0)
    },
    minusItem(state,action){
        
    }

  },
})
