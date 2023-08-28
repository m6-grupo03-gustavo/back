import { AppDataSource } from "../../data-source";
import { CarUserComments } from "../../entities/car_user_comment.entities";
import { AppError } from "../../errors/app.error";

export const deleteCommentService = async (commentId: number): Promise<void> => {
  const commentRepository = AppDataSource.getRepository(CarUserComments);

  const findComment = await commentRepository.findOneBy({ id: commentId});

  if (!findComment) {
    throw new AppError("Comment not found", 404);
  }

  commentRepository.remove(findComment);
};
