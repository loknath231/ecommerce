// src/pages/CartPage.js
import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems] = useState([
    // Example cart items
  ]);

  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;