import { z } from "zod";
import {
  carImageUpdateSchema,
  carImageRequestSchema,
  carImageResponseSchema,
  carImageSchema,
} from "../schemas/car_image.schema";

export type ICarImage = z.infer<typeof carImageSchema>;
export type ICarImageRequest = z.infer<typeof carImageRequestSchema>;
export type ICarImageResponse = z.infer<typeof carImageResponseSchema>;
export type ICarImageUpdate = z.infer<typeof carImageUpdateSchema>;
