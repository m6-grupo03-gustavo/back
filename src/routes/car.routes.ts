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
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.middleware";
import { ensureUserIsSeller } from "../middlewares/ensureUserIsSeller.middleware";

export const CarRouter = Router()

CarRouter.get("", pagination, listCarsController)
CarRouter.get("/:id", ensureIdExistsMiddleware, listCarByIdController)
CarRouter.post("",ensureIsAuthMiddleware, EnsureRequestData(carRequestSchema),ensureUserIsSeller, createCarController)
CarRouter.patch("/:id",ensureIsAuthMiddleware, EnsureRequestData(carUpdateSchema), ensureIdExistsMiddleware, ensureUserIsSeller ,updateCarController)
CarRouter.delete("/:id",ensureIsAuthMiddleware, ensureIdExistsMiddleware, ensureUserIsSeller, deleteCarController)

CarRouter.post("/car-Image/:id",ensureIsAuthMiddleware, ensureIdExistsMiddleware, ensureUserIsSeller, createCarImageController)
CarRouter.delete("/car-Image/:id/image:imageId",ensureIsAuthMiddleware,  ensureIdExistsMiddleware, ensureUserIsSeller, deleteCarImageController)

