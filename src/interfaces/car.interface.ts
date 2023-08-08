import { z } from "zod";
import {
  carRequestSchema,
  carResponseSchema,
  carSchema,
} from "../schemas/car.schema";

export type ICar = z.infer<typeof carSchema>;
export type ICarRequest = z.infer<typeof carRequestSchema>;
export type ICarResponse = z.infer<typeof carResponseSchema>;
