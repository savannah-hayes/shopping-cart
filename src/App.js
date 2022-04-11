import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import products from "reducers/products";
import Cart from "components/Cart"
import Products from "components/Products";

const reducer = combineReducers({
  products: products.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Cart />
      <Products />
    </Provider>
  )
}
