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
    addTodo: (state, action: PayloadAction<Todo | Todo[]>) => {
      return Array.isArray(action.payload)
        ? { list: action.payload }
        : { list: [...state.list, action.payload] };
    },
    getTodo: () => {},
  },
});

export const { addTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
