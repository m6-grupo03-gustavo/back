import { z } from "zod";
import {
  commentRequestSchema,
  commentResponseSchema,
  commentSchema,
  commentUpdateSchema,
} from "../schemas/comment.schema";

export type IComment = z.infer<typeof commentSchema>;
export type ICommentRequest = z.infer<typeof commentRequestSchema>;
export type ICommentResponse = z.infer<typeof commentResponseSchema>;
export type ICommentUpdate = z.infer<typeof commentUpdateSchema>;
