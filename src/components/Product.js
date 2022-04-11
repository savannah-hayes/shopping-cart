import React from "react";

const Product = ({ product }) => {
  return (
    <article>
      <span role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>
      <button type="button">
        Add to cart
      </button>
    </article>
  )
}

export default Product;