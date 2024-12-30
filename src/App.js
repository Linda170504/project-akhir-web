import React, { useState,  } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
// import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';
import './index.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Home />
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default App;