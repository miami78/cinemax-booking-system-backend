import {
  register,
  updateUser,
  deleteUser,
  login
} from "../controllers/userController";
import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import validationMiddleware from "../middleware/validationMiddleware";
import CreateUserDto from "../dtos/userDto";

const userRouter = Router();
userRouter.post("/users/register", validationMiddleware(CreateUserDto),register);
userRouter.post("/users/login", login);
userRouter.patch("/users/:id", authMiddleware, updateUser);
userRouter.delete("/users/:id", authMiddleware, deleteUser);

export { userRouter };
