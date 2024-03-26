import { Router } from "express";
import * as userController from "../controllers/userController"

const userRouter = Router();

userRouter.post('/user', userController.createUser);

export default userRouter;