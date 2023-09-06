"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carImageUpdateSchema = exports.carImageResponseSchema = exports.carImageRequestSchema = exports.carImageSchema = void 0;
const zod_1 = require("zod");
exports.carImageSchema = zod_1.z.object({
    id: zod_1.z.number(),
    url: zod_1.z.string().max(255),
});
exports.carImageRequestSchema = exports.carImageSchema.omit({
    id: true,
});
exports.carImageResponseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    url: zod_1.z.string(),
    carId: zod_1.z.number()
});
exports.carImageUpdateSchema = zod_1.z.object({
    url: zod_1.z.string().max(255).optional(),
});
