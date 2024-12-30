import React, { useState } from 'react';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Hasil pencarian untuk: "${searchQuery}"`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-brand-container">
          {/* <img src="/img/logo-linda.png" alt="Blissful Cakes Logo" className="navbar-logo" /> */}
          <h1 className="navbar-brand">Blissful</h1>
        </div>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Cari kue..."
            className="navbar-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="navbar-search-btn">🔍</button>
        </form>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#menu" className="navbar-link">Menu</a></li>
          <li><a href="#footer" className="navbar-link">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
