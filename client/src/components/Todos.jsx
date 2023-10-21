import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { getAllTodos } from "../api/todos";

function Todos({ filter }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos(setTodos, filter);
  }, [todos]);

  return (
    <section className="flex flex-wrap justify-center  gap-4 m-auto w-[90%]">
      {todos &&
        todos.map((todo) => {
          return <Todo key={todo._id} todo={todo} />;
        })}
    </section>
  );
}

export default Todos;
