import React, { useState } from 'react';
import products from './product';
import styles from '../style/Products.module.css';
import Productype from './Productype';

const Products = ({ showAll = false }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedType, setSelectedType] = useState('All');

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

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {});

  return (
    <section className={styles.products}>
      
      {/* Product type filter bar */}
      <Productype selectedType={selectedType} onTypeSelect={handleTypeSelect} />

      {/* Category-wise product listing */}
      <div>
        {Object.keys(groupedProducts).map((type, typeIndex) => (
          <div key={typeIndex}>

            {/* Category Heading */}
            <h2 className={styles.categoryHeading}>{type}</h2>

            <div className={styles.productGrid}>
              {groupedProducts[type]
                .slice(0, showAll ? groupedProducts[type].length : visibleCount)
                .map((product, idx) => (
                  <div className={styles.productCard} key={idx}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.content}>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        ))}
      </div>

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
