import { Router } from "express";
import { deleteCarController, updateCarController } from "../controllers/car.controller.willian";
import { EnsureRequestData } from "../middlewares/EnsureRequestData.middleware";

export const CarRouter = Router()
CarRouter.get("")
CarRouter.get("/:id")
CarRouter.post("")
// Add schema de update de car 
CarRouter.patch("/:id",EnsureRequestData(), updateCarController)
CarRouter.delete("/:id", deleteCarController)
