import { Router } from "express";
import { deleteUserController } from "../controllers/car.controller.willian";

export const CarRouter = Router()
CarRouter.get("")
CarRouter.get("/:id")
CarRouter.post("")
CarRouter.patch("/:id")
CarRouter.delete("/:id", deleteUserController)
