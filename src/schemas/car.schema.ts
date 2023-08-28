import { z } from "zod";
import { carImageRequestSchema, carImageSchema } from "./car_image.schema";
import { userResponseSchema } from "./user.schema";

export const carSchema = z.object({
  id: z.number(),
  brand: z.string().max(255),
  model: z.string().max(255),
  color: z.string().max(255),
  km: z.number().nonnegative(),
  year: z.string().max(4),
  fuel: z.string().max(255),
  value: z.number().min(0).max(9999999999.99),
  description: z.string().max(255),
  is_published: z.boolean().default(true),
  carImages: z.array(carImageSchema)
});
export const carRequestSchema = carSchema.omit({
  id: true,
  carImages: true
}).extend({
  carImages: z.array(carImageRequestSchema)
})
export const carResponseSchema = carSchema.extend({
  user: userResponseSchema
});

export const carResponseListSchema = z.array(carResponseSchema);

export const carUpdateSchema = carSchema.omit({
  id: true,
  carImages: true
}).optional()