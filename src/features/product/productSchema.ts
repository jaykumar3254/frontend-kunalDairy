import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  price: z.string().min(1),
  unit: z.string().min(1),
});

export type ProductSchemaType =
  z.infer<typeof productSchema>;