import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { CarUserComments } from "../../entities/car_user_comment.entities";
import { ICommentResponse } from "../../interfaces/comment.interface";
import { AppError } from "../../errors/app.error";
import { Car } from "../../entities/car.entitie";


export const listCommentsByCarService = async (carId: number): Promise<ICommentResponse[]> => {
  const commentRepository: Repository<CarUserComments> = AppDataSource.getRepository(CarUserComments);
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const findCar = await carRepository.findOne({
    where: {
      id: carId,
    },
  });

  if (!findCar) {
    throw new AppError("Car not found", 404);
  }

    const commentsForCar = await commentRepository
    .createQueryBuilder("comment")
    .leftJoin("comment.user", "user")
    .where("comment.car = :carId", { carId })
    .select([
      "comment.comment as comment",
      "comment.id as id",
      "comment.register_date as register_date",
      "user.id as userId",
      "user.name as userName"
    ])
    .getRawMany();

  return commentsForCar;
};