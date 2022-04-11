import React from 'react'

const CartItem = ({ key, product }) => {
  return (
    <li key={key}>
      <span role="img" aria-label={product.title}>{product.emoji}</span>
      <div>
        <span>x{product.quantity}</span>
        <span>{product.price * product.quantity}:-</span>
      </div>
      <span>
        <button type="button">-</button>
        <button type="button">+</button>
      </span>
    </li>
  )
};

export default CartItem;