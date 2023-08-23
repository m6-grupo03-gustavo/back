import { Repository } from "typeorm";
import { IUserResponse } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/app.error";
import { userResponseSchema } from "../../schemas/user.schema";

export const getUserByIdService = async (
  userId: number
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const returnedUser = userResponseSchema.parse(user);

  return returnedUser;
};
