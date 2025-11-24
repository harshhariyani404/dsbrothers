import React, { useState } from 'react';
import products from './product';
import styles from '../style/Products.module.css';
import Productype from './Productype';

const Products = ({ showAll = false }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedType, setSelectedType] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);


  // Filter products by selected type
  const filteredProducts =
    selectedType === 'All'
      ? products
      : products.filter(product => product.type === selectedType);

  const handleLoadMore = () => setVisibleCount(prev => prev + 8);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setVisibleCount(8); // Reset visible count on filter change
  };

  // Decide how many products to show
  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, visibleCount);

  return (
    <section className={styles.products}>
      {/* Product type filter bar */}
      <Productype selectedType={selectedType} onTypeSelect={handleTypeSelect} />
      {/* Product cards */}
      {productsToShow.map((product, idx) => (
  <div className={styles.productCard} key={idx}>
    <img 
      src={product.image} 
      alt={product.name} 
      onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
      style={{ cursor: "pointer" }}
    />

    <div className={styles.content}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      {/* Expandable Section */}
      {openIndex === idx && (
        <div className={styles.subOpen}>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Category:</strong> {product.type}</p>
          <button className={styles.buyNow}>View More</button>
        </div>
      )}
    </div>
  </div>
))}

      {/* Load More button only on Home page */}
      {!showAll && visibleCount < filteredProducts.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className={styles.button} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;