import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoInput } from "../../Type";

const initialState: todoInput = {
  title: "",
  value: "",
  Category: "",
};
export const inputSlice = createSlice({
  name: "inputTod",
  initialState,
  reducers: {
    setTitle: (state, actions: PayloadAction<string>) => {
      state.title = actions.payload;
    },
    setValue: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
    setCategory: (state, actions: PayloadAction<string>) => {
      state.Category = actions.payload;
    },
    clearInputs: (state) => {
      state.title = "";
      state.value = "";
      state.Category = "";
    },
  },
});
export const { setTitle, setValue, setCategory, clearInputs } =
  inputSlice.actions;

export default inputSlice.reducer;
