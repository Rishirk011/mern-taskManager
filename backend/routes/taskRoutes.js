import { Router } from "express";
import {
    getTasks,
    addTask,
    updateTasks,
    deleteTasks

} from '../controllers/taskController.js';
import protect from "../middlewares/authMiddleware.js";


export const taskRoute = Router();

taskRoute.get('/',protect,getTasks);
taskRoute.post('/',protect,addTask);
taskRoute.put('/:id',protect,updateTasks);
taskRoute.delete('/:id',protect,deleteTasks);



