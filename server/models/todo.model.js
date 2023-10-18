import mongoose from "mongoose";

const todoModule = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const todos = mongoose.model("todos", todoModule);
export default todos;
