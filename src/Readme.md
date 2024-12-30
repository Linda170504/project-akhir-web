
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';
import './index.css';

const App = () => {
  const [cakes, setCakes] = useState([]);
  const [cart, setCart] = useState([]);
  const [note, setNote] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCakes = async () => {
      const response = await fetch('/cakes.json'); 
      const data = await response.json();
      setCakes(data);
    };
    fetchCakes();
  }, []);

  const addToCart = (cake) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cake.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...cake, quantity: 1 }];
    });
  };

  const removeFromCart = (cakeId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === cakeId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleNoteChange = (e) => setNote(e.target.value);

  const handleOrder = () => {
    alert(`Pesanan Anda telah dibuat dengan catatan: ${note}`);
    setCart([]);
    setNote('');
  };

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Home />
        <Menu cakes={cakes} addToCart={addToCart} />
        <Cart 
          cart={cart} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          note={note} 
          handleNoteChange={handleNoteChange} 
          handleOrder={handleOrder} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;

