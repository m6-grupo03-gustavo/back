import { Router } from "express";
import { EnsureRequestData } from "../middlewares/ensureRequestData.middleware"
import { carRequestSchema, carUpdateSchema } from "../schemas/car.schema";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";
import { createCarImageController, deleteCarImageController } from "../controllers/carImage.controller";
import { createCarController, 
         deleteCarController, 
         listCarByIdController, 
         listCarsController, 
         updateCarController 
        } from "../controllers/car.controller";
import { pagination } from "../middlewares/pagination.middleware";

export const CarRouter = Router()

CarRouter.get("", pagination, listCarsController)
CarRouter.get("/:id", ensureIdExistsMiddleware, listCarByIdController)
CarRouter.post("", EnsureRequestData(carRequestSchema), createCarController)
CarRouter.patch("/:id",EnsureRequestData(carUpdateSchema), ensureIdExistsMiddleware ,updateCarController)
CarRouter.delete("/:id",ensureIdExistsMiddleware, deleteCarController)

CarRouter.post("/car-Image/:id", ensureIdExistsMiddleware, createCarImageController)
CarRouter.delete("/car-Image/:id/image:imageId", ensureIdExistsMiddleware, deleteCarImageController)

