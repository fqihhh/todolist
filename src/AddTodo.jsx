import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoListSlice";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [region, setRegion] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (!name.trim() || !className.trim() || !region.trim()) return;

    dispatch(
      addTodo({
        name,
        className,
        region
      })
    );

    navigate("/todolist");
  };

  return (
    <div>
      <h1>Add Todo</h1>

      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={className}
        placeholder="Enter class"
        onChange={(e) => setClassName(e.target.value)}
      />

      <input
        type="text"
        value={region}
        placeholder="Enter region"
        onChange={(e) => setRegion(e.target.value)}
      />

      <button onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}