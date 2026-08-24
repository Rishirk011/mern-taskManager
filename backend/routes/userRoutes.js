import { Router } from "express";
import {
    registerUser,
    loginUser,
    getMe,
} from '../controllers/userController.js';
import protect from "../middlewares/authMiddleware.js";

export const userRoute = Router();

userRoute.post('/register',registerUser);
userRoute.post('/login',loginUser);
userRoute.get('/me',protect,getMe);



