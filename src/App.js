import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Components/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  }
  return (
    <Router>
      <Navbar handleAddToCart={handleAddToCart} cartItems={cartItems} />
      <Routes>
        <Route path="" element={<Home cartItems={cartItems} handleAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
      </Routes>
      {/* <Home cartItems={cartItems} handleAddToCart={handleAddToCart}/>
      <Cart cartItems={cartItems}/> */}
    </Router>
  );
};

export default App;
