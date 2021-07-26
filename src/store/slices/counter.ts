import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      return { count: state.count + 1 };
    },
    decrease: (state) => {
      return { count: state.count - 1 };
    },
    increaseAsync: () => {},
  },
});

export const { increase, decrease, increaseAsync } = counterSlice.actions;

export default counterSlice.reducer;
