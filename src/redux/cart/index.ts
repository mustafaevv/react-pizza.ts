import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart") || "{}");
// const saveToLocalStorage = (state) => localStorage.getItem('cart', JSON.stringify(state))

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state[action.payload.id] = {
        ...action.payload,
        quantity: 1,
      };
    },
    removeFromCart: (state, action) => {
      delete state[action.payload];
    },
    addOne: (state, action) => {
      state[action.payload].quantity++;
    },
    removeOne: (state, action) => {
      if (state[action.payload].quantity > 1) {
        state[action.payload].quantity--;
      }
    },
  },
});

export const getItemCount = createSelector(
  (state: any) => Object.values(state.cart),
  (cartItems) =>
    cartItems.reduce((acc: any, item: any) => acc + item.quantity, 0)
);

export const { addToCart, removeFromCart, addOne, removeOne } = cart.actions;

export default cart.reducer;
