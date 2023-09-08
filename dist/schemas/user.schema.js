"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaPassword = exports.userSchemaEmail = exports.userUpdateSchema = exports.usersResponseSchema = exports.userResponseSchema = exports.userRequestSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const accountStateChoices = ["buyer", "seller"];
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    email: zod_1.z.string().email().max(255),
    password: zod_1.z.string().max(255),
    name: zod_1.z.string().max(255),
    cpf: zod_1.z.string().max(11),
    phone: zod_1.z.string().max(255),
    birthdate: zod_1.z.string().max(10),
    description: zod_1.z.string().max(255).nullish(),
    zipcode: zod_1.z.string().max(255),
    state: zod_1.z.string().max(255),
    city: zod_1.z.string().max(255),
    street: zod_1.z.string().max(255),
    number: zod_1.z.string(),
    complement: zod_1.z.string().max(255).nullish(),
    register_date: zod_1.z
        .date()
        .nullish()
        .default(() => new Date()),
    account_state: zod_1.z.union([zod_1.z.literal("buyer"), zod_1.z.literal("seller")]),
    reset_token: zod_1.z.string().nullish()
});
exports.userRequestSchema = exports.userSchema.omit({
    id: true,
    register_date: true,
});
exports.userResponseSchema = exports.userSchema.omit({
    password: true,
});
exports.usersResponseSchema = zod_1.z.array(exports.userSchema.omit({
    password: true,
}));
exports.userUpdateSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(255).optional(),
    password: zod_1.z.string().max(255).optional(),
    name: zod_1.z.string().max(255).optional(),
    cpf: zod_1.z.string().max(11).optional(),
    phone: zod_1.z.string().max(255).optional(),
    birthDate: zod_1.z.date().optional(),
    description: zod_1.z.string().max(255).optional(),
    zipcode: zod_1.z.string().max(255).optional(),
    state: zod_1.z.string().max(255).optional(),
    city: zod_1.z.string().max(255).optional(),
    street: zod_1.z.string().max(255).optional(),
    number: zod_1.z.string().optional(),
    complement: zod_1.z.string().max(255).optional(),
    accountState: zod_1.z.union([zod_1.z.literal("buyer"), zod_1.z.literal("seller")]).optional(),
    reset_token: zod_1.z.string().nullish()
});
exports.userSchemaEmail = zod_1.z.object({
    email: zod_1.z.string().email().max(255),
});
exports.userSchemaPassword = zod_1.z.object({
    password: zod_1.z.string().max(255),
});
