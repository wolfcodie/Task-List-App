import React, { useContext } from "react";
import { deleteTodo, updateTodo } from "../api/todos";
import { editTextContext, errorContext } from "../App";

function Todo({ todo }) {
  const setMsg = useContext(errorContext);
  const setText = useContext(editTextContext);
  const date = todo.createdAt;
  const todoDate = date.slice("T", 10);
  const handelDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo._id);
    setMsg({ type: "error", content: "todo deleted seccefully" });
  };
  const handelUpdate = (e) => {
    e.preventDefault();
    updateTodo(todo._id, true, todo.description);
    setMsg({ type: "secces", content: "todo Updated seccefully" });
  };
  return (
    <article
      className={
        todo.completed === true
          ? "border border-green-500 w-[300px] bg-0 p-4 rounded-lg"
          : "border w-[300px] bg-white p-4 rounded-lg"
      }
    >
      <p className="text-[12px]">{todoDate}</p>
      <h1 className="text-[14px] my-4 text-blue">{todo.description}</h1>
      <div className="buttons flex gap-2 justify-center item-center">
        {todo.completed === false && (
          <button
            onClick={handelUpdate}
            className="bg-green-500  text-white p-2 px-4 rounded-md"
          >
            Complete
          </button>
        )}
        <button
          onClick={() =>
            setText({ id: todo._id, description: todo.description })
          }
          className="bg-orange-400  text-white p-2 px-4 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={handelDelete}
          className="bg-red-700  text-white p-2 px-4 rounded-md"
        >
          X
        </button>
      </div>
    </article>
  );
}

export default Todo;
