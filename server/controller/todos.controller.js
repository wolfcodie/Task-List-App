import todos from "../models/todo.model.js";

export const getAllTodos = async (req, res) => {
  const filter = req.query.filter;
  console.log(filter);
  try {
    if (filter == "all") {
      const todoList = await todos.find();
      return res.status(200).json({ msg: "secces", data: todoList });
    } else {
      const todoList = await todos.find({ completed: filter });
      return res.status(200).json({ msg: "secces", data: todoList });
    }
  } catch (error) {
    return res.status(500).json({ msg: "error", data: error.message });
  }
};

export const addTodo = async (req, res) => {
  try {
    const { description } = req.body;

    if (description.length < 3)
      return res
        .status(200)
        .json({ msg: "error", data: "inputs must be filled" });
    const newtodo = new todos({ description: description });
    const inserted = newtodo.save();
    if (inserted) {
      return res
        .status(200)
        .json({ msg: "secces", data: "todo added seccsfully" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "error", data: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const id = req.params.todoId;

  try {
    const findTodo = await todos.findOneAndUpdate({ _id: id }, { ...req.body });
    if (findTodo) {
      return res
        .status(200)
        .json({ msg: "secces", data: "todo updates seccesfully" });
    } else {
      return res.status(400).json({ msg: "error", data: "not Found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "error", data: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const findTodo = await todos.findOneAndDelete({ _id: id });
    if (findTodo) {
      return res
        .status(200)
        .json({ msg: "secces", data: "todo deleted seccesfully" });
    } else {
      return res.status(400).json({ msg: "error", data: "not Found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "error", data: error.message });
  }
};
