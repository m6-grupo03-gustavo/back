import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Car } from "../entities/car.entitie";
import { AppError } from "../errors/app.error";
const ensureIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const carId: number = parseInt(req.params.id);
  const carRepository = AppDataSource.getRepository(Car);
  const findCar = await carRepository.findOneBy({
    id: carId,
  });
  if (!findCar) {
    throw new AppError("Car not found", 404);
  }
  res.locals.carId = findCar;
  return next();
};

export {
    ensureIdExistsMiddleware
}