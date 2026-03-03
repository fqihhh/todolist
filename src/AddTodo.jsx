import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "./todoListSlice";

export default function AddTodo() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (!name.trim()) return; // validasi kosong

    dispatch(addTodo({ name }));
    setName(""); // reset input
    navigate("/todolist");
  };

  return (
    <div>
      <h1>Add Todo</h1>

      <input
        type="text"
        placeholder="Enter todo name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}