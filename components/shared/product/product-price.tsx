const ProductPrice = ({ price }) => {
  const stringPrice = Number(price).toFixed(2);
  const arrPrice = stringPrice.split(".");
  const [intPrice, floatPrice] = arrPrice;

  return (
    <p>
      <span className="text-xs align-super">$</span>
      {intPrice}
      <span className="text-xs align-super">.{floatPrice}</span>
    </p>
  );
};

export default ProductPrice;
