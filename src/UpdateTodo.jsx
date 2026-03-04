import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "./todoListSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTodo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state) =>
    state.todoList.find((todo) => todo.id === Number(id))
  );

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setClassName(todo.class);
      setRegion(todo.region);
    }
  }, [todo]);

  const handleUpdateTodo = () => {
    if (!name.trim() || !className.trim() || !region.trim()) return;

    dispatch(updateTodo({
      id: Number(id),
      name,
      className,
      region
    }));

    navigate("/todolist");
  };

  if (!todo) {
    return <h2>Todo not found</h2>;
  }

  return (
    <div>
      <h1>Edit Todo</h1>

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

      <button onClick={handleUpdateTodo}>
        Update
      </button>
    </div>
  );
}