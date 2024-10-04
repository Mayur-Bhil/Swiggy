import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, actions) => {
      //mutating the state over

      //redux toolkit USES IMMER BTS
      //WE HAVE TO MUTATE THE STATE
      //IMMER FINDS THE DIFF BETWEEN NEW STATE AND OLD STATE
      state.items.push(actions.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    //["PIZZA"]
    clearCart: (state) => {
      //WE CAN ALSO USE return {items : []};
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
