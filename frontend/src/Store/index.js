import AuthSlices from "./Slices/AuthSlices";
import CartSlices from "./Slices/CartSlices";
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
        auth:AuthSlices,
        cart:CartSlices
    }
})
export default store