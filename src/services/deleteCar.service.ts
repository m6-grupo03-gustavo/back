import { AppDataSource } from "../data-source";
import { Car } from "../entities/car.entitie";
import { AppError } from "../errors/app.error";

export const deleteCarService = async (carId: number): Promise<void> => {
  const carRepository = AppDataSource.getRepository(Car);

  const findCar = await carRepository.findOneBy({ id: carId });

  if (!findCar) {
    throw new AppError("Car not found", 404);
  }

  carRepository.remove(findCar);
};
