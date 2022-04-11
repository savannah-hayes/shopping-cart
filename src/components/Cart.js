import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const Cart = () => {
  const products = useSelector((store) => store.cart.items);

  return (
    <div>
      <div>
        <span role="img" aria-label="cart">🛒</span>
        <div>Total: </div>
      </div>
      <ul>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
};

export default Cart;