import { DeepPartial, Repository } from "typeorm";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from "../../interfaces/user.interface";
import { User } from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/app.error";
import {
  userResponseSchema,
  userUpdateSchema,
} from "../../schemas/user.schema";

export const patchUserService = async (
  userId: number,
  data: IUserUpdate
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const validatedData = userUpdateSchema.parse(data);
  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const newUserData = userRepository.create({
    ...user,
    ...validatedData,
  } as DeepPartial<User>);

  await userRepository.save(newUserData);

  const returnedUser = userResponseSchema.parse(newUserData);

  return returnedUser;
};
