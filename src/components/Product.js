import React from "react";
import { useDispatch } from "react-redux";

import cart from "reducers/cart";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article>
      <span role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>
      <button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => {dispatch(cart.actions.addItem(product))}}>
        Add to cart
      </button>
    </article>
  )
}

export default Product;