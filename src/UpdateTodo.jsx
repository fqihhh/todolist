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

  // Isi input setelah todo ditemukan
  useEffect(() => {
    if (todo) {
      setName(todo.name);
    }
  }, [todo]);

  const handleUpdateTodo = () => {
    if (!name.trim()) return;

    dispatch(updateTodo({ id: Number(id), name }));
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
        placeholder="Enter todo name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleUpdateTodo}>
        Update
      </button>
    </div>
  );
}