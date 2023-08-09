import { AppDataSource } from "../data-source";
import { Car } from "../entities/car.entitie";
import { ICarResponse, ICarUpdate } from "../interfaces/car.interface";

export const updateCarService = async (
  carId: number,
  data: ICarUpdate
): Promise<ICarResponse> => {
  const carRepository = AppDataSource.getRepository(Car);

  const findCar = await carRepository.findOneBy({ id: carId });


  const updatedCar = carRepository.create({
    ...findCar,
    ...data,
  });
  const updatedCarData = await carRepository.save(updatedCar);

  return updatedCarData;
};