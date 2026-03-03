import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ListTodo from "./ListTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";
import todoListReducer from "./todoListSlice.js";

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/todolist" />} />
          <Route path="/todolist" element={<ListTodo />} />
          <Route path="/todolist/add" element={<AddTodo />} />
          <Route path="/todolist/:id/edit" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);