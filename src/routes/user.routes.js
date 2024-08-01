import { Router } from "express";
import { createUser, deleteUser, getAllUser, updatedUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user', getAllUser);
userRouter.delete('/user/:id', deleteUser);
userRouter.patch('/user/:id', updatedUser);

export { userRouter }