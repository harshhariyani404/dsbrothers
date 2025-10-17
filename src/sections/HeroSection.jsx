import React from "react";
import styles from "../style/HeroSection.module.css";

const HeroSection = ({ title, names, description, videoUrl, altText }) => {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.bgVideo}
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      {/* Overlay Content */}
      <div className={styles.overlay}>
        <h1>{title}</h1>
        <h2>{names}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;