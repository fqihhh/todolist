import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nextId++, name: action.payload.name });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, name } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) todo.name = name;
    }
  }
});

export const { addTodo, removeTodo, updateTodo } =
  todoListSlice.actions;

export default todoListSlice.reducer;