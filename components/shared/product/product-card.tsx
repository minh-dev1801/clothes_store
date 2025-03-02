import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCart = () => {
  return (
    <Card>
      <CardHeader>
        <Link href="product/123">
          <Image
            src="/public/imges/sample-products/p1-1.jpg"
            alt="Product 1"
            width={300}
            height={300}
            priority
          />
        </Link>
      </CardHeader>

      <CardContent>
        <div className="text-xs">MWC</div>
        <Link href="product/123">
          <h2 className="text-sm font-medium">Tome cuser</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>0 Stars</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCart;
