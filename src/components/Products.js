import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Product from "./Product";

const AllProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Products = () => {
  const allProducts = useSelector((store) => store.products)

  return (
    <AllProducts>
      {allProducts.map(product => (
        <Product key={product.id} product={product} /> 
      ))}
    </AllProducts>
  )
};

export default Products;