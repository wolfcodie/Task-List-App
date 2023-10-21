import axios from "axios";

export const getAllTodos = (setTodos, filter) => {
  axios
    .get("http://localhost:4000/api/todos", { params: { filter: filter } })
    .then((res) => {
      const apiRes = res.data;

      setTodos(apiRes.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const addTodo = (description) => {
  axios
    .post("http://localhost:4000/api/todos", { description })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
export const deleteTodo = (id) => {
  axios
    .delete(`http://localhost:4000/api/todos/${id}`)
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
};

export const updateTodo = (id, description) => {
  axios
    .patch(`http://localhost:4000/api/todos/${id}`, {
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
};
export const updateTextTodo = (id, description) => {
  axios
    .patch(`http://localhost:4000/api/todos/${id}`, {
      description: description,
    })
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
};
