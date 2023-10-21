import axios from "axios";

export const getAllTodos = (setTodos, filter) => {
  axios
    .get("https://task-list-app-nine.vercel.app/api/todos", { params: { filter: filter } })
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
    .post("https://task-list-app-nine.vercel.app/api/todos", { description })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
export const deleteTodo = (id) => {
  axios
    .delete(`https://task-list-app-nine.vercel.app/api/todos/${id}`)
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
};

export const updateTodo = (id, description) => {
  axios
    .patch(`https://task-list-app-nine.vercel.app/api/todos/${id}`, {
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
};
export const updateTextTodo = (id, description) => {
  axios
    .patch(`https://task-list-app-nine.vercel.app/api/todos/${id}`, {
      description: description,
    })
    .then((res) => console.log(res))
    .catch((e) => {
      console.log(e);
    });
};
