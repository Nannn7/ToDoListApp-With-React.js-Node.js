import express from "express";
import cors from "cors";
import ToDoListRoute from "./routes/ToDoListRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ToDoListRoute);

app.listen(5000, () => console.log('Server Up and Running...'));