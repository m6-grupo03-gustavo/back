import { Repository } from "typeorm";
import { ICarRequest, ICarResponse } from "../interfaces/car.interface";
import { Car } from "../entities/car.entitie";
import { AppDataSource } from "../data-source";
import { carResponseSchema } from "../schemas/car.schema";
import { CarImages } from "../entities/car_image.entitie";


const createCarService = async (data: ICarRequest, userId: number): Promise<ICarResponse> => {
    const carRespository: Repository<Car> = AppDataSource.getRepository(Car)
    const carImageRepository: Repository<CarImages> = AppDataSource.getRepository(CarImages)
    const saveImage = data.images.map((image) => {
        const carImage = carImageRepository.create({
            url: image.url
        })
        return carImageRepository.save(carImage)
    })
    const savedImages = await Promise.all(saveImage);
    const newData = {
        ...data,
        user: {id:userId},
    };
    const newCar = carRespository.create(newData)
    await carRespository.save(newCar)
    const newCarSave = carResponseSchema.parse(newCar)
    return newCarSave
}
export {
    createCarService
}