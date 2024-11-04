import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

const Product = () => {
  const state = useContext(GlobalState);
  console.log(state);
  return <div className="products"></div>;
};

export default Product;
