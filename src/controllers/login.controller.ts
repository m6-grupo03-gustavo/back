import { Request, Response } from "express";
import { createTokenService } from "../services/Login/createToken.service";

export const createTokenController = async (req: Request, res: Response) => {
  const token = await createTokenService(req.body);

  return res.json({"token":token});
};
