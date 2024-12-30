import React from 'react';
import './footer.css';

const Footer = () => (
  <footer id="footer" className="app-footer">
    <div className="footer-container">
      {/* Informasi Kontak */}
      <div className="footer-info">
        <h4>Hubungi Kami</h4>
        <p><strong>Lokasi:</strong> Jl. Kue Lezat No. 123, Jakarta</p>
        <p><strong>Customer Service:</strong> 0812-3456-7890</p>
      </div>

      {/* Peta Lokasi */}
      <div className="footer-map">
        <h4>Lokasi Kami</h4>
        <iframe
          title="Lokasi Universitas Ahmad Dahlan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5891294422418!2d110.38312119999999!3d-7.833234900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5701a2ae1c23%3A0x173dbeeddc56d9e!2sUniversitas%20Ahmad%20Dahlan%20-%20Kampus%204!5e0!3m2!1sid!2sid!4v1735283984086!5m2!1sid!2sid"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    {/* Hak Cipta */}
    <div className="footer-bottom">
      <p>&copy; 2024 Blissful Cakes | All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
