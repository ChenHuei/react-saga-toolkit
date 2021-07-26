import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  list: Todo[];
}
export interface Todo {
  id: number;
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
    putTodo: (state, action: PayloadAction<Todo>) => {
      state.list.splice(
        state.list.findIndex((item) => item.id === action.payload.id),
        1,
        action.payload
      );
      return state;
    },
    getTodo: () => {},
  },
});

export const { addTodo, setTodo, putTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
