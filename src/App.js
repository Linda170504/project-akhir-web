import React, { useState } from 'react';
import './App.css';
import './index.css';

const App = () => {
  const [cakes, setCakes] = useState([
    { id: 1, name: 'Black Forest', price: 150000, description: 'Kue coklat dengan cream dan cherry.' },
    { id: 2, name: 'Cheesecake', price: 120000, description: 'Kue keju dengan rasa lembut.' },
  ]);
  const [cart, setCart] = useState([]);
  const [note, setNote] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling navbar menu

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

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleOrder = () => {
    alert(`Pesanan Anda telah dibuat dengan catatan: ${note}`);
    setCart([]);
    setNote('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <nav className="navbar">
          <div className="navbar-container">
            <div className='my-navbar'>
            <img src="logo-linda.png" alt="Blissful Cakes Logo" className="navbar-logo" />
            <h1 className="navbar-brand">Blissful Cakes</h1>
            </div>
            <button 
              className="navbar-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
              <li><a href="#home" className="navbar-link">Home</a></li>
              <li><a href="#menu" className="navbar-link">Menu</a></li>
              <li><a href="#footer" className="navbar-link">Kontak</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="home-section">
          <h2>Selamat Datang di Blissful Cakes</h2>
          <p>
            Blissful Cakes adalah toko kue yang mengutamakan kualitas dan rasa.
            Kami telah melayani pelanggan sejak 1995 dengan beragam pilihan kue,
            bolu, dan pastry terbaik.
          </p>
          <div>
            <ul>
              <li>VISI</li>
              <p>belum kepikiran</p>
              <li>MISI</li>
              <p>mempunyai tokoh kue yang enak waduhhhh</p>
            </ul>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="menu-section">
          <h2>Menu Kami</h2>
          <div className="menu-list">
            {cakes.map((cake) => (
              <div key={cake.id} className="menu-item">
                <h3>{cake.name}</h3>
                <p><strong>Harga:</strong> Rp {cake.price}</p>
                <p>{cake.description}</p>
                <button className="btn" onClick={() => addToCart(cake)}>Tambah ke Keranjang</button>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Section */}
        <section className="cart-section">
          <h2>Keranjang Belanja</h2>
          {cart.length === 0 ? (
            <p>Keranjang Anda kosong.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>Rp {item.price} x {item.quantity}</p>
                  <button className="btn" onClick={() => removeFromCart(item.id)}>-</button>
                  <button className="btn" onClick={() => addToCart(item)}>+</button>
                </div>
              ))}
              <textarea
                placeholder="Catatan untuk pesanan"
                value={note}
                onChange={handleNoteChange}
              />
              <button className="btn btn-primary" onClick={handleOrder}>Beli Sekarang</button>
            </div>
          )}
        </section>
      </main>

      <footer id="footer" className="app-footer">
        <div className="footer-info">
          <p><strong>Lokasi:</strong> Jl. Kue Lezat No. 123, Jakarta</p>
          <p><strong>Customer Service:</strong> 0812-3456-7890</p>
        </div>
        <p>&copy; 2024 Blissful Cakes | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
