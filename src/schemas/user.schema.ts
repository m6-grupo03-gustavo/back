import { z } from "zod";

const accountStateChoices = ["buyer", "saller"] as const;

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email().max(255),
  password: z.string().max(255),
  name: z.string().max(255),
  cpf: z.string().max(11),
  phone: z.string().max(255),
  birthDate: z.date(),
  description: z.string().max(255).nullish(),
  zipcode: z.string().max(255),
  state: z.string().max(255),
  city: z.string().max(255),
  street: z.string().max(255),
  number: z.number(),
  complement: z.string().max(255).nullish(),
  register_date: z
    .date()
    .nullish()
    .default(() => new Date()),
  accountState: z.union([z.literal("buyer"), z.literal("saller")]),
});
export const userRequestSchema = userSchema.omit({
  id: true,
  register_date: true,
});
export const userResponseSchema = userSchema.omit({
  password: true,
});
