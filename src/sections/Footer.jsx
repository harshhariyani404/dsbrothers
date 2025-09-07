import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#222',
        color: '#fff',
        padding: '32px 0',
        textAlign: 'center',
        marginTop: '40px',
      }}
    >
      {/* Navigation Links */}
      <div style={{ marginBottom: '16px' }}>
        <a href="/" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>Home</a>
        <a href="/about" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>About</a>
        <a href="/contact" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>Contact</a>
        <a href="/products" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>Products</a>
      </div>

      {/* Social Icons */}
      <div style={{ marginBottom: '16px', fontSize: '20px' }}>
        <a
          href="https://www.instagram.com/ds_brothers_official_4162/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', margin: '0 12px' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', margin: '0 12px' }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/919727937612"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', margin: '0 12px' }}
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: '14px' }}>
        &copy; {new Date().getFullYear()} DS Brothers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
