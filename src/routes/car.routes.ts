import { Router } from "express";
import { createCarController, listCarsController, listCarByIdController } from "../controllers/car.controller.carol";
import { carRequestSchema } from "../schemas/car.schema";
import { EnsureRequestData } from "../middlewares/ensureRequestData.middleware";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";

export const CarRouter = Router()
CarRouter.get("", listCarsController)
CarRouter.get("/:id", ensureIdExistsMiddleware, listCarByIdController)
CarRouter.post("", EnsureRequestData(carRequestSchema), createCarController)
CarRouter.patch("/:id")
CarRouter.delete("/:id")
