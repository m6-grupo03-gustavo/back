import { Repository } from "typeorm";
import { IUserResponse } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/app.error";
import { usersResponseSchema } from "../../schemas/user.schema";

export const getUserService = async (): Promise<any> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User[] = await userRepository.find();

  const returnedUser = usersResponseSchema.parse(user);
  return returnedUser;
};
