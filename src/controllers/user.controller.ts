import { createUserService } from "../services/User/createUser.service";
import { Request, Response } from "express";
import { getUserByIdService } from "../services/User/getUserById.service";
import { patchUserService } from "../services/User/patchUser.service";
import { deletUserService } from "../services/User/deletUser.service";
import { resetPasswordService } from "../services/User/resetEmail.service";
import { resetUserPasswordService } from "../services/User/resetPassword.service";
import { getUserService } from "../services/User/getUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getUserService();
  return res.status(200).json(user);
};

export const getUserControllerById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);

  const user = await getUserByIdService(userId);

  return res.status(200).json(user);
};

export const patchUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);

  const user = await patchUserService(userId, req.body);

  return res.status(200).json(user);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);

  await deletUserService(userId);

  return res.status(204).send();
};

export const resetUserPasswordEmailController = async (
  req: Request,
  res: Response
) => {
  const email = req.body.email;
  await resetPasswordService(email);

  res.json({ message: "Look at your email account" });
};

export const resetUserPasswordController = async (
  req: Request,
  res: Response
) => {
  const resetToken = req.params.token;
  const password = req.body.password;

  console.log(resetToken, password);

  await resetUserPasswordService(resetToken, password);

  res.json({ message: "Your password has been change." });
};
