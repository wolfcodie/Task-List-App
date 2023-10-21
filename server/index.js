import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { todosRouter } from "./routes/todos.js";
import "dotenv/config";

//middlwares
const corsOptions = {
  origin: 'https://task-list-app-nine.vercel.app',
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
//routes
app.use("/api/todos", todosRouter);
//db connection
mongoose.connect(process.env.MONGODB_URI).catch((e) => {
  console.error("MongoDB connection error:", e.message);
});

//starting the server
app.listen(process.env.LOCAL_PORT);
