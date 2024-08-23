import { createSlice } from "@reduxjs/toolkit"

const intialState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "Best Sellers",
    sortProperty: "rating",
  },
}

const filterSlice = createSlice({
  name: "filter",
  intialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setFilter(state, action) {
      state.sort = action.payload.sort
      state.currentPage = Number(state.payload.currentPage)
      state.categoryId = Number(state.payload.categoryId)
    },
  },
})

export const selectSort = (state) => state.filter.sort

export const { setCategoryId, setSearchValue, setSort, setFilter } =
  filterSlice.actions
export default filterSlice
