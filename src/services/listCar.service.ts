import { Repository } from "typeorm"
import { ICarListResponse } from "../interfaces/car.interface"
import { Car } from "../entities/car.entitie"
import { AppDataSource } from "../data-source"
import { carResponseListSchema } from "../schemas/car.schema"

const listCarService = async(): Promise<ICarListResponse> => {
    const carRepository: Repository<Car> = AppDataSource.getRepository(Car)
    const cars = await carRepository.find({
        relations: ["carImages"]
    })
    
    const allCars = carResponseListSchema.parse(cars)
    return allCars
}
export default listCarService