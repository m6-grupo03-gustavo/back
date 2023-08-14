import { createUserService } from "../services/User/createUser.service";
import { Request, Response } from "express";
import { getUserService } from "../services/User/getUser.service";
import { patchUserService } from "../services/User/patchUser.service";
import { deletUserService } from "../services/User/deletUser.service";

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
  const userId = Number(req.params.id);

  const user = await getUserService(userId);

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
