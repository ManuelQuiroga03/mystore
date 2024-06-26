import React, { useState } from "react";
import "../../Styles/ProductFilter.css"

  const ProductFilter = ({ categories, selectedCategory, onCategoryChange, onFilterChange,onPriceFilterChange }) => {
    const [filter, setFilter] = useState("");
    const [priceRange, setPriceRange] = useState("");

    const handleFilterChange = (event) => {
      setFilter(event.target.value);
      onFilterChange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    onCategoryChange(category);
  };

  const handlePriceRangeChange = (event) => {
    const selectedRange = event.target.value;
    setPriceRange(selectedRange);

    let minPrice, maxPrice;

    switch (selectedRange) {
      case "lt15":
        minPrice = 0;
        maxPrice = 15;
        break;
      case "16to50":
        minPrice = 16;
        maxPrice = 50;
        break;
      case "51to100":
        minPrice = 51;
        maxPrice = 100;
        break;
      case "gt100":
        minPrice = 101;
        maxPrice = Number.POSITIVE_INFINITY;
        break;
      default:
        minPrice = 0;
        maxPrice = Number.POSITIVE_INFINITY;
    }

    onPriceFilterChange(minPrice, maxPrice);
  };

  return (
    <div className="container product-filter">
      <input
        style={{"border-radius":"5px"}}
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={handleFilterChange}
      />

      <select value={selectedCategory} onChange={handleCategoryChange} style={{"border-radius":"5px"}}>
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select value={priceRange} onChange={handlePriceRangeChange} style={{"border-radius":"5px"}}>
        <option value="">All prices</option>
        <option value="lt15">Less $15</option>
        <option value="16to50">$16 - $50</option>
        <option value="51to100">$51 - $100</option>
        <option value="gt100">More than $100</option>
      </select>
    </div>
  );
};

export default ProductFilter;
