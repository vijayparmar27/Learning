import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.Slice";
import cartSlice from "./cart.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;