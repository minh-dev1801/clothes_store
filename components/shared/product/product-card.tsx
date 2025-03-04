import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCart = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardHeader>
        <Link href={"/product/" + product.slug}>
          <Image
            src={product.images[0]}
            alt={`${product.name} image`}
            width={300}
            height={300}
          />
        </Link>
      </CardHeader>

      <CardContent>
        <div className="text-xs">{product.brand}</div>
        <Link href={"/product/" + product.slug}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice price={Number(product.price)} />
          ) : (
            <div>
              <p className="capitalize text-destructive">Out of stock</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCart;
