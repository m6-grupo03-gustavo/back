import { z } from "zod";
import {
  carImmageRequestSchema,
  carImmageResponseSchema,
  carImmageSchema,
} from "../schemas/car_immage.schema";

export type ICarImmage = z.infer<typeof carImmageSchema>;
export type ICarImmageRequest = z.infer<typeof carImmageRequestSchema>;
export type ICarImmageResponse = z.infer<typeof carImmageResponseSchema>;
