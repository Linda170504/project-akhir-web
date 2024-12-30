import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [cakes, setCakes] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [newCake, setNewCake] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const [editingCake, setEditingCake] = useState(null);
  const [isCartVisible, setIsCartVisible] = useState(false); // State untuk mengontrol visibilitas keranjang

  // Mengambil data dari file JSON di folder public
  useEffect(() => {
    fetch('/cakes.json') // Path relatif ke folder public
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari JSON');
        }
        return response.json();
      })
      .then((data) => setCakes(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  // Menambahkan kue ke dalam daftar
  const handleAddCake = () => {
    if (newCake.name && newCake.price) {
      setCakes([...cakes, { ...newCake, id: Date.now().toString() }]);
      setNewCake({
        id: '',
        name: '',
        description: '',
        price: '',
        image: '',
      });
    }
  };

  // Mengedit kue yang ada
  const handleEditCake = (cake) => {
    setEditingCake(cake);
    setNewCake(cake);
  };

  // Mengupdate kue yang sudah ada
  const handleUpdateCake = () => {
    setCakes(cakes.map((cake) => (cake.id === editingCake.id ? newCake : cake)));
    setEditingCake(null);
    setNewCake({
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
    });
  };

  // Menghapus kue dari daftar
  const handleDeleteCake = (id) => {
    setCakes(cakes.filter((cake) => cake.id !== id));
  };

  // Menambahkan item ke dalam keranjang belanja
  const addToCart = (cake) => {
    const existingItem = cart.find((item) => item.id === cake.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...cake, quantity: 1 }]);
    }
    setTotal(total + parseInt(cake.price)); // Konversi harga ke number
    setIsCartVisible(true); // Tampilkan keranjang setelah item ditambahkan
  };

  // Menghapus item dari keranjang belanja
  const removeFromCart = (cakeId) => {
    const itemToRemove = cart.find((item) => item.id === cakeId);
    // Hapus item dari keranjang
    setCart(cart.filter((item) => item.id !== cakeId));
    // Update total
    setTotal(total - itemToRemove.price * itemToRemove.quantity);
  
    // Jika keranjang kosong, sembunyikan keranjang
    if (cart.length === 1) {
      setIsCartVisible(false);  // Menyembunyikan keranjang jika kosong
    }
  };
  
  return (
    <section id="menu" className="menu-section">
      <h2>Menu Kami</h2>

     

      {/* Daftar Menu */}
      <div className="menu-list">
        {cakes.map((cake) => (
          <div key={cake.id} className="menu-item">
            <img
              src={cake.image}
              alt={cake.name}
              className="menu-item-image"
            />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <p className="menu-item-price">Rp {parseInt(cake.price).toLocaleString()}</p>
            <div className='btn-container'>
            <button className='btn' onClick={() => addToCart(cake)}>
              +
            </button>
            <button className='btn' onClick={() => handleEditCake(cake)}>Edit</button>
            <button className='btn' onClick={() => handleDeleteCake(cake.id)}>-</button>
          </div>
          </div>
        ))}
      </div>

      {/* Keranjang Belanja - Posisi Fixed */}
      <div className={`cart ${isCartVisible ? 'visible' : 'hidden'}`}>
        <h3>Keranjang Belanja</h3>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.name} x {item.quantity}
            </span>
            <button onClick={() => removeFromCart(item.id)}>Hapus</button>
          </div>
        ))}
        <p>Total: Rp {total.toLocaleString()}</p>
      </div>
       {/* Form untuk menambah atau mengedit kue */}
       <div className="cake-form">
        <h3>{editingCake ? 'Edit Kue' : 'Tambah Kue'}</h3>
        <input
          type="text"
          name="name"
          value={newCake.name}
          placeholder="Nama Kue"
          onChange={(e) => setNewCake({ ...newCake, name: e.target.value })}
        />
        <textarea
          name="description"
          value={newCake.description}
          placeholder="Deskripsi"
          onChange={(e) => setNewCake({ ...newCake, description: e.target.value })}
        />
        <input
          type="number"
          name="price"
          value={newCake.price}
          placeholder="Harga"
          onChange={(e) => setNewCake({ ...newCake, price: e.target.value })}
        />
        <input
          type="text"
          name="image"
          value={newCake.image}
          placeholder="URL Gambar"
          onChange={(e) => setNewCake({ ...newCake, image: e.target.value })}
        />

        <button onClick={editingCake ? handleUpdateCake : handleAddCake}>
          {editingCake ? 'Perbarui Kue' : 'Tambah Kue'}
        </button>
      </div>
    </section>
  );
};

export default Menu;
