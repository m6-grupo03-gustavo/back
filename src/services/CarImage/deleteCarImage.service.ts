import { AppDataSource } from "../../data-source"
import { Car } from "../../entities/car.entitie"
import { CarImages } from "../../entities/car_image.entitie"
import { AppError } from "../../errors/app.error"

export const deleteCarImageService= async(carId:number, imageId:number): Promise<void> =>{
    const carRepository = AppDataSource.getRepository(Car)
    const carImageRepository = AppDataSource.getRepository(CarImages)

    const findCar = await carRepository.findOne({
        where: {
            id: carId
        },
        relations: ["carImages"]
    })

    const carImagesArr = findCar?.carImages

    const findInArr = carImagesArr?.find(image => image.id === imageId)

    if(!findInArr){
        throw new AppError("Image not found", 404)
    }

    const findImage = await carImageRepository.findOneBy({id: imageId})
    if(!findImage){
        throw new AppError("Image not found", 404)
    }
    
    carImageRepository.remove(findImage)
}