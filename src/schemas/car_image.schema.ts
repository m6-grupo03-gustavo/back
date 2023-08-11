import { z } from "zod";

export const carImageSchema = z.object({
  id: z.number(),
  url: z.string().max(255),
});
export const carImageRequestSchema = carImageSchema.omit({
  id: true,
});
export const carImageResponseSchema = z.object({
  id: z.number(),
  url: z.string(),
  carId: z.number()
});

export const carImageUpdateSchema = z.object({
  url: z.string().max(255).optional(),
})
