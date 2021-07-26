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
      return { list: [...state.list, action.payload] };
    },
    setTodo: (state, action: PayloadAction<Todo[]>) => {
      return { list: action.payload };
    },
    getTodo: () => {},
  },
});

export const { addTodo, setTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
