import ProductCart from "./product-card";

const ProductList = () => {
  return (
    <div className="py-10">
      <h2 className="h2-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCart />
      </div>
    </div>
  );
};

export default ProductList;
