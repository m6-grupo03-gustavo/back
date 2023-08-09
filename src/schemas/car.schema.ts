import { z } from "zod";
import { carImmageRequestSchema, carImmageSchema } from "./car_immage.schema";

export const carSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  brand: z.string().max(255),
  model: z.string().max(255),
  year: z.string().max(4),
  fuel: z.string().max(255),
  value: z.number().min(0).max(9999999999.99),
  description: z.string().max(255),
  is_published: z.boolean(),
  carImages: z.array(carImmageSchema)
});
export const carRequestSchema = carSchema.omit({
  id: true,
  carImages: true
}).extend({
  carImages: z.array(carImmageRequestSchema)
})
export const carResponseSchema = carSchema;

export const carResponseListSchema = z.array(carResponseSchema)