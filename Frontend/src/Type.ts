import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";

export interface todoMap {
  _id: number;
  title: string;
  value: string;
  data: number;
  Category: string;
}
export interface initialTodoMap {
  todos: todoMap[];
  Loading: boolean;
}
export interface todoInput {
  title: string;
  value: string;
  Category: string;
}
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
