import { z } from "zod";
import {
  carImageUpdateSchema,
  carImmageRequestSchema,
  carImmageResponseSchema,
  carImmageSchema,
} from "../schemas/car_immage.schema";

export type ICarImmage = z.infer<typeof carImmageSchema>;
export type ICarImmageRequest = z.infer<typeof carImmageRequestSchema>;
export type ICarImmageResponse = z.infer<typeof carImmageResponseSchema>;
export type ICarImageUpdate = z.infer<typeof carImageUpdateSchema>;
