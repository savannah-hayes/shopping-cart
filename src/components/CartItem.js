import React from "react";
import { useDispatch } from "react-redux";

import cart from "reducers/cart";

const CartItem = ({ key, product }) => {
  const dispatch = useDispatch();

  return (
    <li key={key}>
      <span role="img" aria-label={product.title}>{product.emoji}</span>
      <div>
        <span>x{product.quantity}</span>
        <span>{product.price * product.quantity}:-</span>
      </div>
      <span>
        <button type="button" onClick={() => {dispatch(cart.actions.removeItem(product))}}>-</button>
        <button type="button" onClick={() => {dispatch(cart.actions.addItem(product))}}>+</button>
      </span>
    </li>
  )
};

export default CartItem;