import React from 'react';


const Cart = ({ cart, addToCart, removeFromCart, note, handleNoteChange, handleOrder }) => (
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
);

export default Cart;
