import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({ data }: { data: Product[] }) => {
  return (
    <div className="py-10">
      <h2 className="h2-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
