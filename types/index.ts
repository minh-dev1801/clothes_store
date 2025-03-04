import { insertedProductChema } from "@/lib/validator";
import { z } from "zod";

export type Product = z.infer<typeof insertedProductChema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
