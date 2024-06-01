// src/components/Product.js
import React from 'react';

const Product = ({ product, addToCart }) => (
  <div className="product">
    <img src={product.image} alt={product.name} className="product-image" />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>₹{product.price}</p>
    <button onClick={(product) => addToCart(product)}>Add to Cart</button>
  </div>
);

export default Product;