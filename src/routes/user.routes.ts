import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  resetUserPasswordController,
  patchUserController,
  resetUserPasswordEmailController,
  getUserControllerById,
} from "../controllers/user.controller";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";
import { ensureIsUserOwner } from "../middlewares/ensureIsUserOwner.middleware";
import { EnsureRequestData } from "../middlewares/ensureRequestData.middleware";
import { userSchemaEmail, userSchemaPassword } from "../schemas/user.schema";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("/", getUserController);
userRoutes.get("/:id",ensureIsAuthMiddleware, getUserControllerById);
userRoutes.patch("/:id",ensureIsAuthMiddleware, ensureIsUserOwner, patchUserController);
userRoutes.delete("/:id",ensureIsAuthMiddleware,ensureIsUserOwner, deleteUserController);

userRoutes.post("/resetUserPassword", resetUserPasswordEmailController);
userRoutes.patch("/resetUserPassword/:token", resetUserPasswordController);
