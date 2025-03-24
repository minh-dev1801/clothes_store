import {
  insertedProductChema,
  insertCartSchema,
  cartItemSchema,
} from "@/lib/validator";
import { z } from "zod";

export type Product = z.infer<typeof insertedProductChema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof insertCartSchema>;