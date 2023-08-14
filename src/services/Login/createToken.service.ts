import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/app.error";
import { ILoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";

export const createTokenService = async (data: ILoginRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      userEmail: user.email,
      userName: user.name,
    },
    process.env.SECRET_KEY!,
    { expiresIn: "1h" }
  );

  return token;
};
