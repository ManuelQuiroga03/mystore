import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Components/Cart/Cart';
import ChejoutPage from './Pages/Checkout/ChejoutPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
      toast.success('Product added to cart', {
        position: "top-right",
        autoClose: 2000, // Cerrar automáticamente después de 3 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <Router>
      <Navbar handleAddToCart={handleAddToCart} cartItems={cartItems} />
      <Routes>
        <Route path="" element={<Home cartItems={cartItems} handleAddToCart={handleAddToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
        <Route path="/checkout-page" element={<ChejoutPage />} />
      </Routes>
      {/* <Home cartItems={cartItems} handleAddToCart={handleAddToCart}/>
      <Cart cartItems={cartItems}/> */}
      <ToastContainer />
    </Router>
  );
};

export default App;
