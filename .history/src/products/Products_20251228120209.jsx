import React, { useState, useEffect } from 'react';
import products from './product';
import styles from '../style/Products.module.css';
import Productype from './Productype';

const Products = ({ showAll = false }) => {
  const [selectedType, setSelectedType] = useState('All');
  const [visibleCounts, setVisibleCounts] = useState({}); // store visible count per category

  // Filter products by type
  const filteredProducts =
    selectedType === 'All'
      ? products
      : products.filter(product => product.type === selectedType);

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {});

  // Initialize counts for categories when filter changes
  useEffect(() => {
    const counts = {};
    Object.keys(groupedProducts).forEach(type => {
      counts[type] = 8; // default show 8 per category
    });
    setVisibleCounts(counts);
  }, [selectedType]);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  // Load more for specific category
  const handleLoadMore = (type) => {
    setVisibleCounts(prev => ({
      ...prev,
      [type]: prev[type] + 8
    }));
  };

  return (
    <section className={styles.products}>

      {/* Filter Bar */}
      <Productype selectedType={selectedType} onTypeSelect={handleTypeSelect} />

      {/* Category-wise listing */}
      <div>
        {Object.keys(groupedProducts).map((type, index) => (
          <div key={index}>
            
            {/* Category Title */}
            <h2 className={styles.categoryHeading}>{type}</h2>

            <div className={styles.productGrid}>
              {groupedProducts[type]
                .slice(0, showAll ? groupedProducts[type].length : visibleCounts[type])
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

            {/* Load More for each category */}
            {!showAll &&
              visibleCounts[type] < groupedProducts[type].length && (
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button
                    className={styles.button}
                    onClick={() => handleLoadMore(type)}
                  >
                    Load More
                  </button>
                </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
