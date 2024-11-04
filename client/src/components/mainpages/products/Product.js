import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductLists/ProductList";

const Product = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  return (
    <div className="products">
      {products &&
        products.map((product) => (
          <ProductList key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Product;
