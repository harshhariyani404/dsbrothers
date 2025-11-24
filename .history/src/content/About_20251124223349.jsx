import React from "react";
import { Helmet } from "react-helmet";
import style from "../style/About.module.css";

const SITE_URL = "https://dsbrothers.netlify.app";
const LOGO = "/Photos/logo.jpeg";

const About = () => {
  const title = "About D.S. Brothers | Premium Jewelry in Surat";
  const description =
    "Learn about D.S. Brothers — a Surat-based handcrafted jewelry brand creating gold, diamond and silver pieces since 2008.";

  return (
    <section className={style.about}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={LOGO} />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={LOGO} />
      </Helmet>

      <div className={style.about__container}>
        <h1 className={style.about__title}>About us</h1>
        <hr className={style.about__divider} />

        <div className={style.about__intro}>
          <p className={style.about__text}>
            At D.S. Brothers, we believe jewelry tells stories and creates connections. Founded in 2008 in Surat, we craft pieces that balance tradition and modern design, using high-quality materials and precise workmanship.
          </p>

          <div className={style.about__imageWrap}>
            <img
              src="/Photos/visitingcard.jpeg"
              alt="D.S. Brothers visiting card"
              className={style.about__image}
              loading="lazy"
            />
          </div>
        </div>

        <h2>Vision</h2>
        <p>
          To translate every customer's dream into fine Indian jewellery, spreading joy through thoughtful design and craftsmanship.
        </p>

        <h2>Mission</h2>
        <p>
          To exceed expectations in quality, selection and service by understanding local tastes and continuously innovating our designs.
        </p>

        <hr className={style.about__divider} />
        <div className={style.about__leaders}>
          <div className={style.leader}>
            <h3>Surat Branch Head</h3>
            <strong>Pritesh Domadiya</strong>
            <p>
              Founder & CEO. A visionary combining design sensibility and business experience to build a trusted jewelry brand.
            </p>
          </div>

          <hr className={style.about__divider} />

          <div className={style.leader}>
            <h3>Mumbai Branch Head</h3>
            <strong>Jenish Domadiya</strong>
            <p>
              Co-founder & COO. Focused on operations, supplier relations and ensuring product quality at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
