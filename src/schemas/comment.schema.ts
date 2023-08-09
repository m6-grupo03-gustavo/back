import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  comment: z.string().max(255),
});
export const commentRequestSchema = commentSchema.omit({
  id: true,
});
export const commentResponseSchema = commentSchema;

export const commentUpdateSchema = commentRequestSchema.optional();
