import React from "react";
import productype from "./productype";
import styles from "../style/Services.module.css"

const Services = () => {
  return <div className={styles.product}>
  <h1>OUR PRODUCTS</h1>
  <div className={styles.productype}>
    {productype.map(product => (
      <div key={product.id}>
      <img src={product.img} alt=""></img>
      <p>{product.name}</p>
      </div>
    ))}
  </div>
  <div className="list">
    <div className="cards">
      
    </div>
  </div>
  </div>;
};

export default Services;
