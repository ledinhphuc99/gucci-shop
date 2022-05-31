import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./shopping-cart/cartItemslide";

 const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,

    }
})

export default store;