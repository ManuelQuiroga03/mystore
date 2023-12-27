import React from 'react';
import ProductList from '../../Components/ProductList/ProductList';

const Home = ({cartItems, handleAddToCart }) => {
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <ProductList cartItems={cartItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
