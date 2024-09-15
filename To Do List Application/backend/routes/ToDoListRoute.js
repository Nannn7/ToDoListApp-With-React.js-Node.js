import express from "express";
import { getTasks, getTasksById, createTasks, updateTasks, deleteTasks } from "../controllers/ToDoListController.js";

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTasksById);
router.post('/tasks', createTasks);
router.patch('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTasks);

export default router;