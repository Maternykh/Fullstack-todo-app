import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slice/todoSlice";
import inputSlice from "./Slice/inputTodos";

export const store = configureStore({
  reducer: { todo: todoSlice, inputTod: inputSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
