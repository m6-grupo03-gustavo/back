import { z } from "zod";

export const carSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  brand: z.string().max(255),
  model: z.string().max(255),
  year: z.string().max(4),
  fuel: z.string().max(255),
  value: z.number().max(255),
  description: z.string().max(255),
  is_published: z.boolean(),
});
export const carRequestSchema = carSchema.omit({
  id: true,
});
export const carResponseSchema = carSchema;
