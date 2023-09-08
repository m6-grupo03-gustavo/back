"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentUpdateSchema = exports.commentResponseSchema = exports.commentRequestSchema = exports.commentSchema = void 0;
const zod_1 = require("zod");
exports.commentSchema = zod_1.z.object({
    id: zod_1.z.number(),
    comment: zod_1.z.string().max(255),
    register_date: zod_1.z
        .date()
        .nullish()
        .default(() => new Date()),
});
exports.commentRequestSchema = exports.commentSchema.omit({
    id: true,
    register_date: true,
});
exports.commentResponseSchema = exports.commentSchema;
exports.commentUpdateSchema = exports.commentRequestSchema.optional();
