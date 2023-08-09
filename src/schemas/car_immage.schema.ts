import { z } from "zod";

export const carImmageSchema = z.object({
  id: z.number(),
  url: z.string().max(255),
});
export const carImmageRequestSchema = carImmageSchema.omit({
  id: true,
});
export const carImmageResponseSchema = carImmageSchema;

export const carImageUpdateSchema = carImmageRequestSchema;
