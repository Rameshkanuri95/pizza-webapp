import { configureStore } from "@reduxjs/toolkit";
import cart from "../redux/slices/cartSlice"
import filter from "../redux/slices/filterSlice"
import pizza from "../redux/slices/pizzaSlice"
export const store = configureStore({
    reducer:{
        filter,
        cart,
        pizza
    }
})