import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema>;
export type IUserRequest = z.infer<typeof userRequestSchema>;
export type IUserResponse = z.infer<typeof userResponseSchema>;
