import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(3, "Name is required"),

  mobile: z
    .string()
    .min(10, "Mobile must be 10 digits")
    .max(10, "Mobile must be 10 digits"),

  address: z.string().min(5, "Address is required"),
});

export type CustomerSchemaType = z.infer<typeof customerSchema>;
