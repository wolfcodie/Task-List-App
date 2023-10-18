import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controller/todos.controller.js";
export const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);
todosRouter.post("/", addTodo);
todosRouter.patch("/:todoId", updateTodo);
todosRouter.delete("/:todoId", deleteTodo);
