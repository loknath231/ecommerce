// src/components/Cart.js
import React from "react";

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      cartItems.map((item) => (
        <div key={item.id} className="cart-item" >
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))
    )}
  </div>
);

export default Cart;
