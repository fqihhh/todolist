import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeTodo } from "./todoListSlice";

export default function ListTodo() {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch(removeTodo({ id }));
    }
  };

  return (
    <div>
      <h1>List Todo</h1>

      <Link to="/todolist/add">Add Todo</Link>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Class</th>
            <th>Region</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan="5">No todos available</td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.class}</td>
                <td>{todo.region}</td>
                <td>
                  <Link to={`/todolist/${todo.id}/edit`}>
                    Update
                  </Link>{" "}
                  <button onClick={() => handleDelete(todo.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}