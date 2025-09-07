import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#222',
      color: '#fff',
      padding: '32px 0',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <a href="/" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>Home</a>
        <a href="/about" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>About</a>
        <a href="/contact" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>Contact</a>
        <a href="/products" style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}>Products</a>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 8px' }}>
          Twitter
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 8px' }}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 8px' }}>
          LinkedIn
        </a>
      </div>
      <div style={{ fontSize: '14px' }}>
        &copy; {new Date().getFullYear()} DS Brother. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;