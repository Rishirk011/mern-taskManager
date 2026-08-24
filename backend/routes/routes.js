import {taskRoute} from "./taskRoutes.js";
import {userRoute} from "./userRoutes.js"
import { Router } from "express";

export const router = Router();

router.use('/taskcollections',taskRoute);
router.use('/usercollections',userRoute);

