import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { CarUserComments } from "../../entities/car_user_comment.entities";
import { ICommentResponse } from "../../interfaces/comment.interface";
import { AppError } from "../../errors/app.error";
import { Car } from "../../entities/car.entitie";


export const listCommentsByCarService = async (carId:number): Promise<ICommentResponse[]> => {
  const commentRepository: Repository<CarUserComments> = AppDataSource.getRepository(CarUserComments);

  const carRepository: Repository<Car> = AppDataSource.getRepository(Car)

  const findCar = await carRepository.findOne({
    where: {
      id: carId
    }
  })

  if(!findCar){
    throw new AppError("Car not found", 404);
  }

  const commentsForCar = await commentRepository.find({
    where: {
      car: { id: carId }
    },
  });

 

  return commentsForCar;
};