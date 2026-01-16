import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slicer/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
