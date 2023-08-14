import { Request, Response } from "express";
import { createTokenService } from "../services/Login/createToken.service";

export const createTokenController = async (req: Request, res: Response) => {
  const token = createTokenService(req.body);

  return res.json(token);
};
