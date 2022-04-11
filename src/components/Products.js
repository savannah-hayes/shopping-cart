import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const allProducts = useSelector((store) => store.products)

  return (
    <div>
      {allProducts.map(product => (
        <Product key={product.id} product={product} /> 
      ))}
    </div>
  )
};

export default Products;