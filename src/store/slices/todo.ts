import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  list: Todo[];
}
export interface Todo {
  title: string;
  done: boolean;
}

const initialState: TodoState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
