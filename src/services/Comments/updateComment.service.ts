import { Repository } from "typeorm";
import { ICommentResponse, ICommentUpdate } from "../../interfaces/comment.interface";
import { CarUserComments } from "../../entities/car_user_comment.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/app.error";


export const updateCommentService = async (
  data: ICommentUpdate,
  id: number,
): Promise<ICommentResponse> => {
  const commentRepository: Repository<CarUserComments> = AppDataSource.getRepository(CarUserComments);

  const comment = await commentRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }
  const newCommentData = commentRepository.create({
    ...comment,
    ...data,
  });
  await commentRepository.save(newCommentData);
  return newCommentData
};

