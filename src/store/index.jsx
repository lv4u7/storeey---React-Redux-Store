import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./../redux/cartSlice/index";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
