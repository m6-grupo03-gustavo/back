import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  patchUserController,
} from "../controllers/user.controller";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";
import { ensureIsUserOwner } from "../middlewares/ensureIsUserOwner.middleware";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("/:id",ensureIsAuthMiddleware, getUserController);
userRoutes.patch("/:id",ensureIsAuthMiddleware, ensureIsUserOwner, patchUserController);
userRoutes.delete("/:id",ensureIsAuthMiddleware,ensureIsUserOwner, deleteUserController);
