import { z } from "zod";

const accountStateChoices = ["buyer", "seller"];

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email().max(255),
  password: z.string().max(255),
  name: z.string().max(255),
  cpf: z.string().max(11),
  phone: z.string().max(255),
  birthdate: z.string().max(10),
  description: z.string().max(255).nullish(),
  zipcode: z.string().max(255),
  state: z.string().max(255),
  city: z.string().max(255),
  street: z.string().max(255),
  number: z.string(),
  complement: z.string().max(255).nullish(),
  register_date: z
    .date()
    .nullish()
    .default(() => new Date()),
  account_state: z.union([z.literal("buyer"), z.literal("seller")]),
  reset_token: z.string().nullish()
});
export const userRequestSchema = userSchema.omit({
  id: true,
  register_date: true,
});
export const userResponseSchema = userSchema.omit({
  password: true,
});
export const usersResponseSchema =z.array(userSchema.omit({
  password: true,
}));

export const userUpdateSchema = z.object({
  email: z.string().email().max(255).optional(),
  password: z.string().max(255).optional(),
  name: z.string().max(255).optional(),
  cpf: z.string().max(11).optional(),
  phone: z.string().max(255).optional(),
  birthDate: z.date().optional(),
  description: z.string().max(255).optional(),
  zipcode: z.string().max(255).optional(),
  state: z.string().max(255).optional(),
  city: z.string().max(255).optional(),
  street: z.string().max(255).optional(),
  number: z.string().optional(),
  complement: z.string().max(255).optional(),
  accountState: z.union([z.literal("buyer"), z.literal("seller")]).optional(),
  reset_token: z.string().nullish()
});


export const userSchemaEmail = z.object({
  email: z.string().email().max(255),
});
export const userSchemaPassword = z.object({
  password: z.string().max(255),
});