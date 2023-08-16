import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  patchUserController,
} from "../controllers/user.controller";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id",ensureIsAuthMiddleware, getUserController);
userRoutes.patch("/:id",ensureIsAuthMiddleware, patchUserController);
userRoutes.delete("/:id",ensureIsAuthMiddleware, deleteUserController);
