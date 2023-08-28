import { Router } from "express";
import { createCommentController, deleteCommentController, listCommentController, updateCommentController } from "../controllers/comments.controller";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";
import { ensureIsUserOwner } from "../middlewares/ensureIsUserOwner.middleware";


export const commentsRoutes = Router();

commentsRoutes.post("/:carId", ensureIsAuthMiddleware, createCommentController)

commentsRoutes.get("/:carId", ensureIsAuthMiddleware, listCommentController)

commentsRoutes.patch("/:commentId", ensureIsAuthMiddleware, ensureIsUserOwner, updateCommentController)

commentsRoutes.delete("/:commentId", ensureIsAuthMiddleware, ensureIsUserOwner, deleteCommentController)


