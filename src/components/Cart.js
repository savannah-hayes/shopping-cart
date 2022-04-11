import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CartItem from "./CartItem";

const CartContainer = styled.div`
  background: #282828;
  color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const CartEmoji = styled.span`
  background: white;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
`;

const CartTotal = styled.div`
  display: flex;
  align-items: center;
`;

const CartAmount = styled.div`
  font-size: 30px;
  margin-left: 10px;
`;

const CartItems = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 40%;
  gap: 10px;
  min-height: 110px;
`;

const Cart = () => {
  const products = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ));

  return (
    <CartContainer>
      <CartTotal>
        <CartEmoji role="img" aria-label="cart">🛒</CartEmoji>
        <CartAmount>Total: {totalPrice}:-</CartAmount>
      </CartTotal>
      <CartItems>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartItems>
    </CartContainer>
  )
};

export default Cart;