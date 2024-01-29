import React, { useState, useEffect } from "react";
import ProductItem from "../ProductList/ProductItem";
import ProductFilter from "../ProductList/ProductFilter"; // Importa el componente ProductFilter

import "../../Styles/Products.css";

const ProductList = ({ cartItems,handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products); // Agrega un estado para los productos filtrados
  const [categories, setCategories] = useState([]); // Agrega un estado para las categorías
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0); // Declarar minPrice con useState
  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filter) => {
    setFilteredProducts(products.filter((product) => {
      return product.title.toLowerCase().includes(filter.toLowerCase());
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category ? products.filter((product) => product.category === category) : products
    );
  };

  const handlePriceFilterChange = (min, max) => {
    setMinPrice(min); // Actualizar el estado minPrice
    setMaxPrice(max);
    setFilteredProducts(
      products.filter(
        (product) => product.price >= min && product.price <= max
      )
    );
  };

  return (
    <div>
      {/* <h2>Product List</h2> */}
      <ProductFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onFilterChange={handleFilterChange}
        onPriceFilterChange={handlePriceFilterChange}/> 

      <div className="card-container">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} cartItems={cartItems} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
