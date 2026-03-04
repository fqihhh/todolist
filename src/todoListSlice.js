import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { name, className, region } = action.payload;

      state.push({
        id: nextId++,
        name,
        class: className,
        region
      });
    },

    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      const { id, name, className, region } = action.payload;
      const todo = state.find(todo => todo.id === id);

      if (todo) {
        todo.name = name;
        todo.class = className;
        todo.region = region;
      }
    }
  }
});

export const { addTodo, removeTodo, updateTodo } =
  todoListSlice.actions;

export default todoListSlice.reducer;