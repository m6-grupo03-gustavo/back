import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  comment: z.string().max(255),
  register_date: z
  .date()
  .nullish()
  .default(() => new Date()),
});
export const commentRequestSchema = commentSchema.omit({
  id: true,
  register_date: true,
});
export const commentResponseSchema = commentSchema;

export const commentUpdateSchema = commentRequestSchema.optional();
