// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
import todoReducer from "../slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
