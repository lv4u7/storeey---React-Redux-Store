import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      //we receive the item in action payload
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice -= existingItem.price;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const selectedItems = (state) => state.cart.items;
export const totalPrice = (state) => state.cart.totalPrice;

export const { addToCart, clearCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
