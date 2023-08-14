import { Repository } from "typeorm"
import { ICarResponse } from "../../interfaces/car.interface"
import { Car } from "../../entities/car.entitie"
import { AppDataSource } from "../../data-source"
import { carResponseSchema } from "../../schemas/car.schema"


export const listCarByIdService = async (id: number): Promise<ICarResponse | null> => {
    const carRepository: Repository<Car> = AppDataSource.getRepository(Car)
    const car = await carRepository.findOne({
        where:{
            id: id
        },
        relations: ["carImages"]
    })
    const carResponse = carResponseSchema.parse(car)
    return carResponse;
}
