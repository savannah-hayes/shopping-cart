import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import cart from "reducers/cart";

const Article = styled.article`
  background: rgb(255, 223, 231);
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const Emojis = styled.span`
  font-size: 15vw;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Article>
      <Emojis role="img" aria-label={product.title}>{product.emoji}</Emojis>
      <p>{product.price}:-</p>
      <button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => {dispatch(cart.actions.addItem(product))}}>
        Add to cart
      </button>
    </Article>
  )
}

export default Product;