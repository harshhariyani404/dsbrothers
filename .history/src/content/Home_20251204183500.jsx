import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../sections/HeroSection";
import Products from "../products/Products.jsx";
import Videos from "../products/Videos";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const SITE_URL = "https://dsbrothers.group";
const SITE_NAME = "D.S. Brothers";
const LOGO = "/Photos/logo.jpeg";
const BROCHURE = "/mnt/data/products.pdf"; // local uploaded file path (replace with public URL when deployed)

const Home = () => {
  const title = `${SITE_NAME} | Handcrafted Jewelry Since 2008`;
  const description =
    "Shop handcrafted gold, diamond and silver jewelry from D.S. Brothers, Surat. Custom designs, bridal sets & everyday elegance.";

  return (
    <>
      <Helmet>
        {/* Basic / Required */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="D.S. Brothers, jewelry, gold necklace, diamond ring, handcrafted jewelry, Surat jewelry" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={LOGO} />
        <meta property="og:image:alt" content="D.S. Brothers logo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={LOGO} />

        {/* Helpful for search engines / browsers */}
        <link rel="icon" href={LOGO} />

        {/* JSON-LD Organization / JewelryStore */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            name: SITE_NAME,
            url: SITE_URL,
            logo: LOGO,
            image: LOGO,
            description: description,
            telephone: "+91-9727937612",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Patel Chambers, Varschha Road",
              addressLocality: "Surat City",
              addressRegion: "Gujarat",
              postalCode: "395007",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/ds_brothers_official_4162/"
            ],
            brochure: BROCHURE // local path included (replace with public URL when live)
          })}
        </script>

        {/* Website schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <HeroSection
        title="D.S. Brothers"
        names="Since 2008"
        description="We create custom diamonds for you — unique shapes, premium quality and endless possibilities."
        videoUrl="/Videos/BG.mp4"
        altText="Background video"
      />

      {/* <Videos /> */}
      <Products />
      <About />
      <Contact />
    </>
  );
};

export default Home;
