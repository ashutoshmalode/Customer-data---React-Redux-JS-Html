import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: [],
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      const { customeName, phoneNo } = action.payload;
      return state.filter((customer) => (customer.name !== customeName && customer.phoneNo !== phoneNo));
    },
  },
});

export const { add, remove } = customerSlice.actions;

export default customerSlice.reducer;
