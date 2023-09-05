import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { Car } from "../entities/car.entitie";
import { AppError } from "../errors/app.error";
import { Repository } from "typeorm";
import { CarUserComments } from "../entities/car_user_comment.entities";

export const ensureIsUserOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.baseUrl === "/car") {
    const userId = parseInt(res.locals.userId);
    const carId = parseInt(req.params.id);

    const userRepository = AppDataSource.getRepository(User);
    const findUSer = await userRepository.findOneBy({ id: userId });

    const carRepository = AppDataSource.getRepository(Car);

    const findCar = await carRepository.findOne({
      where: {
        id: carId,
      },
      relations: ["user"],
    });
    if (findCar?.user.id !== findUSer!.id) {
      throw new AppError("You must be user owner", 403);
    }

    return next();
  } else if (req.baseUrl === "/user") {
    const userTokenId = parseInt(res.locals.userId);
    const userParamsId = parseInt(req.params.id);

    if (userTokenId !== userParamsId) {
      throw new AppError("You must be user owner", 403);
    }
    return next();
  } else if (req.baseUrl === "/comments") {
    const userTokenId = parseInt(res.locals.userId);
    const id = parseInt(req.params.commentId);
    const commentRepository: Repository<CarUserComments> =
      AppDataSource.getRepository(CarUserComments);

    const comment = await commentRepository.findOne({
      where: {
        id: id,
      },
    });

    if (userTokenId !== Number(comment?.user)) {
      throw new AppError("You must be user owner", 403);
    }
    return next();
  }
};
