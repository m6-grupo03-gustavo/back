import { AppDataSource } from "../data-source";
import { Car } from "../entities/car.entitie";
import { ICarResponse, ICarUpdate } from "../interfaces/car.interface";
import { carResponseSchema } from "../schemas/car.schema";

export const updateCarService = async (
  carId: number,
  data: ICarUpdate
): Promise<ICarResponse> => {
  const carRepository = AppDataSource.getRepository(Car);

  const findCar = await carRepository.findOneBy({ id: carId });


  const updatedCar = carRepository.create({
    ...findCar,
    ...data,
    name: data.name !== undefined ? data.name : findCar!.name,
    brand: data.brand !== undefined ? data.brand : findCar!.brand,
    model: data.model !== undefined ? data.model : findCar!.model,
    year: data.year !== undefined ? data.year : findCar!.year,
    fuel: data.fuel !== undefined ? data.fuel : findCar!.fuel,
    value: data.value !== undefined ? data.value : findCar!.value,
    description: data.description !== undefined ? data.description : findCar!.description,
    is_published: data.is_published !== undefined ? data.is_published : findCar!.is_published,
  });
  const updatedCarData = await carRepository.save(updatedCar);

  return carResponseSchema.parse(updatedCarData);
};