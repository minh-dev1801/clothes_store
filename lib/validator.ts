import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) =>
      /^[0-9]*\.[0-9]{2}$/.test(formatNumberWithDecimal(Number(value))),
    "Price must be exactly two decimal places"
  );

export const insertedProductChema = z.object({
  name: z.string().min(3, "Name must be at least 3 character"),
  slug: z.string().min(3, "Slug must be at least 3 charater"),
  category: z.string().min(3, "Category must be at least 3 character"),
  description: z.string().min(3, "Description must be at least 3 character"),
  images: z.array(z.string()).min(1, "Image must be at least 1 image"),
  price: currency,
  brand: z.string().min(3, "Brand must be at least 3 character"),
  stock: z.coerce.number(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});
