import { Repository } from "typeorm";
import { ICarRequest, ICarResponse } from "../interfaces/car.interface";
import { Car } from "../entities/car.entitie";
import { AppDataSource } from "../data-source";
import { CarImages } from "../entities/car_image.entitie";


const createCarService = async (data: ICarRequest, userId: number): Promise<ICarResponse> => {
    
    const carRespository: Repository<Car> = AppDataSource.getRepository(Car)
    const carImageRepository: Repository<CarImages> = AppDataSource.getRepository(CarImages)

    const newData = {
        ...data,
        user: {id:userId}
    };
    const newCar = carRespository.create(newData)
    await carRespository.save(newCar)
    const saveImage = data.carImages.map(async(image) => {
        const carImage = carImageRepository.create({
            url: image.url,
            car: newCar
        })
        return carImageRepository.save(carImage)
    })
    return newCar
}
export {
    createCarService
}