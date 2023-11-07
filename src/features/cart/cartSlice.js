import { createSlice, current } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  total: 0,
  amount: 4,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.amount = state.cartItems.length;
    },
    increaseAmount: (state, action) => {
      const currentItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      currentItem.amount++;
      state.amount = state.cartItems.length;
      //   state.cartItems.filter((item) => {
      //     if (item.id === action.payload) {
      //       item.amount++;
      //     }
      //   });
    },
    decreaseAmount: (state, { payload }) => {
      const currentItem = state.cartItems.find((item) => item.id === payload);
      currentItem.amount--;
      if (currentItem.amount === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      }
      state.amount = state.cartItems.length;
    },
    calculateTotal: (state) => {
      let amount = 0,
        total = 0;
      state.cartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        state.amount = amount;
        state.total = total;
      });
    },
  },
});
export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;
