import React, { useState, useEffect } from 'react';
import products from './product';
import styles from '../style/Products.module.css';
import Productype from './Productype';
import LazyLoadImage from '../components/LazyLoadImage'; // ⭐ lazy load

const Products = ({ showAll = false }) => {
  const [selectedType, setSelectedType] = useState('All');
  const [visibleCounts, setVisibleCounts] = useState({});

  // Filter by type
  const filteredProducts =
    selectedType === 'All'
      ? products
      : products.filter(product => product.type === selectedType);

  // Group by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {});

  // Reset visible count when type changes
  useEffect(() => {
    const counts = {};
    Object.keys(groupedProducts).forEach(type => {
      counts[type] = 8;
    });
    setVisibleCounts(counts);
  }, [selectedType]);

  const handleTypeSelect = (type) => setSelectedType(type);

  const handleLoadMore = (type) => {
    setVisibleCounts(prev => ({
      ...prev,
      [type]: prev[type] + 8
    }));
  };

  return (
    <section className={styles.products}>

      <Productype selectedType={selectedType} onTypeSelect={handleTypeSelect} />

      <div>
        {Object.keys(groupedProducts).map((type, index) => (
          <div key={index}>
            
            <h2 className={styles.categoryHeading}>{type}</h2>

            <div className={styles.productGrid}>
              {groupedProducts[type]
                .slice(0, showAll ? groupedProducts[type].length : visibleCounts[type])
                .map((product, idx) => (
                  <div className={styles.productCard} key={idx}>
                    
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />

                    <div className={styles.content}>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>

                  </div>
                ))}
            </div>

            {!showAll &&
              visibleCounts[type] < groupedProducts[type].length && (
                <div className={styles.loadMoreWrap}>
                  <button onClick={() => handleLoadMore(type)} className={styles.button}>
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
