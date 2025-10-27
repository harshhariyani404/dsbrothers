import React from "react";
import { Title, Meta } from "react-head";
import HeroSection from "../sections/HeroSection";
import Products from "../products/Products.jsx";
import Videos from "../products/Videos";

const Home = () => {
  return (
    <div>
      <Title>D.S. Brothers | Handcrafted Jewelry Since 2008</Title>
      <Meta
        name="description"
        content="Shop handcrafted gold, diamond, and silver jewelry from D.S. Brothers. Established 2008."
      />
      <Meta
        name="keywords"
        content="DS Brothers, jewelry, handcrafted jewelry, gold chain, necklace, bracelet, diamond jewelrygold rings, diamond rings, gold necklaces, gold bracelets, custom jewelry, Surat jewelry,ds brothers"
      />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            "name": "D.S. Brothers",
            "image": "/Photos/logo.jpeg",
            "description": "Handcrafted gold, diamond, and silver jewelry since 2008.",
            "url": "https://dsbrothers.netlify.app",
            "telephone": "+91-9727937612",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Patel Chambers, Varschha Road",
              "addressLocality": "Surat City",
              "addressRegion": "Gujarat",
              "postalCode": "395007",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/ds_brothers_official_4162/"
            ]
          }
        `}
      </script>

      <HeroSection
        title="D.S. Brothers"
        names="Since 2008"
        description="We create customized products for you."
        videoUrl="/Videos/BG.mp4"
        altText="Background video"
      />
      <Videos />
      <Products />
    </div>
  );
};

export default Home;
