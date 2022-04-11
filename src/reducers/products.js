import { createSlice } from "@reduxjs/toolkit";

const productData = [
  { id: 1, title: "Iphone", price: 400, emoji: "📱" },
  { id: 2, title: "MacBook", price: 900, emoji: "💻" },
  { id: 3, title: "Smartwatch", price: 350, emoji: "⌚️" },
  { id: 4, title: "iMac", price: 1000, emoji: "🖥" }
]

const products = createSlice({
  name: "products",
  initialState: productData
});

export default products;