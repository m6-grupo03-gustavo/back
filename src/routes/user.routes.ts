import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  patchUserController,
} from "../controllers/user.controller";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id", getUserController);
userRoutes.patch("/:id", patchUserController);
userRoutes.delete("/:id", deleteUserController);
