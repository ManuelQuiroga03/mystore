import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../Services/api";
import ProductItem from "../ProductList/ProductItem";

import "../../Styles/Products.css";

const ProductList = ({cartItems, handleAddToCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="card-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} cartItems={cartItems} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
