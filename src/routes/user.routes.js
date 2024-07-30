import { Router } from "express";
import { createUser, getAllUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user', getAllUser);

export { userRouter }