"use client";

import { Button } from "@/components/ui/button";
import { addItemToCart, removeItemToCart } from "@/lib/actions/cart.actions";
import { Cart, CartItem } from "@/types";
import { Loader, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";

const AddToCart = ({ item, cart }: { item: CartItem; cart: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error(res.message);
      }

      toast(res.message, {
        action: {
          label: "Go to cart",
          onClick: () => router.push("/cart"),
        },
      });
    });
  };

  const handleRemoveToCart = async () => {
    startTransition(async () => {
      const res = await removeItemToCart(item.productId);

      if (!res.success) {
        toast.error(res.message);
      }

      toast(res.message, {
        action: {
          label: "Go to cart",
          onClick: () => router.push("/cart"),
        },
      });
    });
  };

  const exitingItem = cart.items.find((x) => x.productId === item.productId);

  return exitingItem ? (
    <div>
      <Button variant={"outline"} onClick={handleRemoveToCart}>
        {isPending ? <Loader className="animate-spin" /> : <Minus />}
      </Button>
      <span className="mx-4">{exitingItem.qty}</span>
      <Button variant={"outline"} onClick={handleAddToCart}>
        {isPending ? <Loader className="animate-spin" /> : <Plus />}
      </Button>
    </div>
  ) : (
    <Button className="w-full" onClick={handleAddToCart}>
      {isPending ? <Loader className="animate-spin" /> : <Plus />}
      Add to cart
    </Button>
  );
};

export default AddToCart;
