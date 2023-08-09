import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { CarImages } from "../../entities/car_image.entitie";
import { AppError } from "../../errors/app.error";
import { ICarImageRequest, ICarImageResponse } from "../../interfaces/car_immage.interface";
import { carImageResponseSchema } from "../../schemas/car_image.schema";

export const createCarImageService = async (data:ICarImageRequest, carId:number): Promise<ICarImageResponse> =>{
    const carRepository = AppDataSource.getRepository(Car)
    const carImageRepository = AppDataSource.getRepository(CarImages)

    const findCar = await carRepository.findOneBy({id: carId})

    const newImgData = {
        ...data,
        car: findCar!
    }
    const createCarImage = carImageRepository.create(newImgData)

    await carImageRepository.save(createCarImage)
    
    return carImageResponseSchema.parse(createCarImage)

}