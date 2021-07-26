import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
    increaseAsync(state) {
      return state;
    },
  },
});

export const { increase, decrease, increaseAsync } = counterSlice.actions;

export default counterSlice.reducer;
