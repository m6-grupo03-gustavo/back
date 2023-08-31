import { Repository } from "typeorm";
import { ICommentRequest } from "../../interfaces/comment.interface";
import { CarUserComments } from "../../entities/car_user_comment.entities";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { AppError } from "../../errors/app.error";

export const createCommentService = async (
  data: ICommentRequest,
  userId: number,
  carId: number
) => {
  const commentRepository: Repository<CarUserComments> = AppDataSource.getRepository(CarUserComments)

  const carRepository: Repository<Car> = AppDataSource.getRepository(Car)

  const findCar = await carRepository.findOne({
    where: {
      id: carId
    }
  })

  if(!findCar){
    throw new AppError("Car not found", 404);
  }

  const newComment = commentRepository.create({
    ...data,
    user: { id: userId },
    car: { id: carId }
  });
  await commentRepository.save(newComment)
  const loadedCommentCar = await commentRepository
    .createQueryBuilder("comment")
    .leftJoin("comment.user", "user")
    .leftJoin("comment.car", "car")
    .where("comment.id = :id", { id: newComment.id })
    .select([
      "comment.comment as comment",
      "comment.id as id",
      "comment.register_date as register_date",
      "user.id as userId",
      "user.name as userName",
      "car.id as carId",
    ])
    .getRawOne();
  return loadedCommentCar
};