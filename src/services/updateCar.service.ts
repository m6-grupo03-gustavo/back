import { AppDataSource } from "../data-source"
import { Car } from "../entities/car.entitie"
import { ICarResponse } from "../interfaces/car.interface"
import { carResponseSchema } from "../schemas/car.schema"

export const updateCarService = async (carId: number, data: any): Promise<ICarResponse> => {
    const carRepository = AppDataSource.getRepository(Car)

    const findCar = await carRepository.findOneBy({id: carId})

    const newData = {...findCar, ...data}

    const updateCar = carRepository.create(newData)

    return carResponseSchema.parse(updateCar)
}
