import { Repository } from "typeorm"
import { ICarResponse } from "../interfaces/car.interface"
import { Car } from "../entities/car.entitie"
import { AppDataSource } from "../data-source"
import { carResponseSchema } from "../schemas/car.schema"


const listCarByIdService = async (id: number): Promise<ICarResponse> => {
    const carRepository: Repository<Car> = AppDataSource.getRepository(Car)
    const cars = await carRepository.findBy({
        id:id
    })
    const carResponse = carResponseSchema.parse(cars)
    return carResponse
}
export default listCarByIdService