import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        const data = await response.json();
        console.log(data);
        
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;