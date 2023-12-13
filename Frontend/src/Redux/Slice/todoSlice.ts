import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialTodoMap, todoMap } from "../../Type";

const initialState: initialTodoMap = {
  todos: [],
  Loading: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, actions: PayloadAction<todoMap[]>) => {
      state.todos = actions.payload;
    },
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.Loading = actions.payload;
    },
  },
});
export const { setTodos, setLoading } = todoSlice.actions;

export default todoSlice.reducer;
