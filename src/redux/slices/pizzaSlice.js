import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params
    const { data } = await axios.get(
      `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    return data
  }
)

const intialState = {
  items: [],
  status: "loading",
}

const pizzaSlice = createSlice({
  name: "pizza",
  intialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading", 
        state.items = []
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = "success", 
        state.items = action.payload
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error", 
        state.items = []
      })
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
