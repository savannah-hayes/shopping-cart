import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import cart from "reducers/cart";

const CartItems = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Emoji = styled.span`
  background: white;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  margin-right: 10px;
`;

const CartInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Sum = styled.span`
  display: block;
  font-weight: bold;
  width: 100%;
`;

const Quantity = styled.span`
  margin-right: 10px;
`;

const CartActions = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ActionsButtons = styled.span`
  appearance: none;
  border: none;
  background: rgb(246, 166, 34);
  color: white;
  margin-right: 2px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 20px;
  display: inline-block;
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0.8;
`;

const CartItem = ({ key, product }) => {
  const dispatch = useDispatch();

  return (
    <CartItems key={key}>
      <Emoji role="img" aria-label={product.title}>{product.emoji}</Emoji>
      <CartInfo>
        <Quantity>x{product.quantity}</Quantity>
        <Sum>{product.price * product.quantity}:-</Sum>
      </CartInfo>
      <CartActions>
        <ActionsButtons type="button" onClick={() => { dispatch(cart.actions.removeItem(product)) }}>-</ActionsButtons>
        <ActionsButtons type="button" onClick={() => { dispatch(cart.actions.addItem(product)) }}>+</ActionsButtons>
      </CartActions>
    </CartItems>
  )
};

export default CartItem;