import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import {
  userRequestSchema,
  userResponseSchema,
} from "../../schemas/user.schema";
import { AppError } from "../../errors/app.error";

export const createUserService = async (
  data: IUserRequest
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const validatedData = userRequestSchema.parse(data);

  const findUser = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  const user: User = userRepository.create(validatedData as DeepPartial<User>);
  await userRepository.save(user);

  const returnedUser = userResponseSchema.parse(user);

  return returnedUser;
};
