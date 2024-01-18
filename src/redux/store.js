import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./todoListSlice";

export default configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});
