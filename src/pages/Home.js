// src/pages/Home.js
import React, { useState } from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Gamcha",
      description: "Multitasking cloth piece (Pack of 4)",
      price: 200,
      image: "images/gamcha.jpg",
    },
    {
      id: 2,
      name: "Phool Design Saree",
      description: "Nice women saree crafted over handloom",
      price: 550,
      image: "images/adivasi-saree.jpg",
    },
    {
      id: 3,
      name: "Phool Design Futha",
      description: "Nice Mens Lungi crafted over handloom",
      price: 500,
      image: "images/adivasi-futha.jpg",
    },
    {
      id: 4,
      name: "Plain Saree",
      description: "Nice women saree crafted over handloom",
      price: 450,
      image: "images/adivasi-saree.jpg",
    },
    {
      id: 5,
      name: "Plain Futha",
      description: "Nice Mens Lungi crafted over handloom",
      price: 400,
      image: "images/adivasi-futha.jpg",
    },
    // Add more products as needed
  ]);

  return (
    <div className="home">
      <h1>Home</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
