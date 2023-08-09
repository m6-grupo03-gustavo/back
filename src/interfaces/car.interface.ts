import { z } from "zod";
import {
  carRequestSchema,
  carResponseListSchema,
  carResponseSchema,
  carSchema,
  carUpdateSchema,
} from "../schemas/car.schema";

export type ICar = z.infer<typeof carSchema>;
export type ICarRequest = z.infer<typeof carRequestSchema>;
export type ICarResponse = z.infer<typeof carResponseSchema>;
export type ICarListResponse = z.infer<typeof carResponseListSchema>;
export type ICarUpdate = z.infer<typeof carUpdateSchema>;
