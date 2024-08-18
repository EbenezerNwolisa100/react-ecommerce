import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        setMessage('Product has already been added to cart');
        return prevCart;
      } else {
        setMessage('');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity + change, 1) }
          : product
      )
    );
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((total, product) => total + product.quantity, 0)} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} message={message} setMessage={setMessage} cart={cart} />} />
          <Route path="/products/:productId" element={<ProductDetails addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
