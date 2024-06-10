// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: "4fb3967c-dede-4239-bb7c-80299249ac97",
        title: "task1",
        content: "content",
        isDone: false,
      },
      {
        id: "17788493-d4f2-42dd-bc9d-9d4d9a15a647",
        title: "task2",
        content: "content content",
        isDone: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
