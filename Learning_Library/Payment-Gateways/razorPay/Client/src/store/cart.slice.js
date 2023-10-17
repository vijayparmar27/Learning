import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exstingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (exstingItem) {
        exstingItem.totalPrice += newItem.price;
        exstingItem.quantity += 1;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalAmount += newItem.price
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload
      const exstingItem = state.itemsList.find((item)=>item.id === id)
      if(exstingItem.quantity === 1){
        state.totalQuantity--;
        state.totalAmount -= exstingItem.price
        const findIndex = state.itemsList.findIndex((item)=>item.id === id)
        state.itemsList.splice(findIndex,1)
      }else{
        exstingItem.quantity  --;
        exstingItem.totalPrice -= exstingItem.price;
        state.totalQuantity--;
        state.totalAmount -= exstingItem.price
      }
    },
    setShowCard(state) {
        state.showCart = !state.showCart
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
