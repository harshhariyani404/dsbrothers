import React from "react";
import { Helmet } from "react-helmet";
import Products from "../products/Products.jsx";

const SITE_URL = "https://dsbrothers.group";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Products & Services | D.S. Brothers</title>
        <meta name="description" content="Explore our full catalog of necklaces, bracelets, earrings, chains, rings and diamond pieces at D.S. Brothers." />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <meta property="og:title" content="Products & Services | D.S. Brothers" />
        <meta property="og:description" content="Full catalog of premium Indian jewelry: bridal sets, daily-wear, and custom pieces." />
      </Helmet>

      <main>
        <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Our Products</h1>
        {/* Show all products on services page */}
        <Products showAll={true} />
      </main>
    </>
  );
};

export default Services;
