import React from "react";
import styles from "../style/HeroSection.module.css";

const HeroSection = ({ title,names, description, imageUrl, altText }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.imgwrap}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={altText || "Hero banner image"}
        />
      </div>
      <div className={styles.contant}>
        <h1>{title}</h1>
        <h2>{names}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
