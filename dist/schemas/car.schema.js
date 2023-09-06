"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carUpdateSchema = exports.carResponseListSchema = exports.carResponseSchema = exports.carRequestSchema = exports.carSchema = void 0;
const zod_1 = require("zod");
const car_image_schema_1 = require("./car_image.schema");
const user_schema_1 = require("./user.schema");
exports.carSchema = zod_1.z.object({
    id: zod_1.z.number(),
    brand: zod_1.z.string().max(255),
    model: zod_1.z.string().max(255),
    color: zod_1.z.string().max(255),
    km: zod_1.z.number().nonnegative(),
    year: zod_1.z.string().max(4),
    fuel: zod_1.z.string().max(255),
    value: zod_1.z.number().min(0).max(9999999999.99),
    description: zod_1.z.string().max(255),
    is_published: zod_1.z.boolean().default(true),
    carImages: zod_1.z.array(car_image_schema_1.carImageSchema)
});
exports.carRequestSchema = exports.carSchema.omit({
    id: true,
    carImages: true
}).extend({
    carImages: zod_1.z.array(car_image_schema_1.carImageRequestSchema)
});
exports.carResponseSchema = exports.carSchema.extend({
    user: user_schema_1.userResponseSchema
});
exports.carResponseListSchema = zod_1.z.array(exports.carResponseSchema);
exports.carUpdateSchema = exports.carSchema.omit({
    id: true,
    carImages: true
}).optional();
