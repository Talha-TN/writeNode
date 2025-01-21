import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../slices/PostSlice.jsx"
const store = configureStore({
    reducer:{
           PostSlice
    }
})
export default store