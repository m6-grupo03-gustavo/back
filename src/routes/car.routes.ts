import { Router } from "express";
import { deleteCarController, updateCarController } from "../controllers/car.controller.willian";
import { EnsureRequestData } from "../middlewares/ensureRequestData.middleware"
import { createCarController, listCarsController, listCarByIdController } from "../controllers/car.controller.carol";
import { carRequestSchema, carUpdateSchema } from "../schemas/car.schema";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";

export const CarRouter = Router()

CarRouter.get("", listCarsController)
CarRouter.get("/:id", ensureIdExistsMiddleware, listCarByIdController)
CarRouter.post("", EnsureRequestData(carRequestSchema), createCarController)
CarRouter.patch("/:id",EnsureRequestData(carUpdateSchema), ensureIdExistsMiddleware ,updateCarController)
CarRouter.delete("/:id",ensureIdExistsMiddleware, deleteCarController)

