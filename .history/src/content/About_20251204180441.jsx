import React from "react";
import { Helmet } from "react-helmet";
import style from "../style/About.module.css";

const SITE_URL = "https://dsbrothers.group";
const LOGO = "/Photos/logo.jpeg";

const About = () => {
  const title = "About D.S. Brothers | Premium Diamonds in Surat";
  const description =
    "D.S. Brothers is a Surat-based diamond company specializing in high-quality loose diamonds and custom-crafted fine jewellery since 2008.";

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
        <h1 className={style.about__title}>About Us</h1>
        <hr className={style.about__divider} />

        {/* Intro Section */}
        <div className={style.about__intro}>
          <p className={style.about__text}>
            D.S. Brothers is a trusted diamond company based in Surat,
            shaping brilliance since 2008. We specialize in high-quality loose
            diamonds across multiple shapes and cuts. Along with diamonds, we
            also create premium handcrafted jewellery made to celebrate life’s
            most precious moments. With strong craftsmanship, ethical sourcing,
            and modern designing, every piece reflects trust, beauty and lasting
            value.
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

        <hr className={style.about__divider} />

        {/* Branches Section */}
        <div className={style.about__branches}>
          <h2>Our Branches</h2>
          <p>
            With strong presence in major diamond markets,
            D.S. Brothers delivers premium diamonds and fine crafted jewellery
            across India — trusted for perfection and purity.
          </p>

          <div className={style.branchList}>
            <div className={style.branch}>
              <h3>Surat Branch</h3>
              <p>
                Our flagship branch and design studio is located in Surat,
                the hub of diamond excellence. Here, the journey of our brand
                began in 2008 — handling sourcing, processing, quality checks
                and custom diamond design solutions.
              </p>
            </div>

            <div className={style.branch}>
              <h3>Mumbai Branch</h3>
              <p>
                Our Mumbai branch focuses on customer expansion,
                corporate relationships and premium service. This location helps
                us bring D.S. Brothers’ craftsmanship and diamonds to wider
                markets and jewellery businesses.
              </p>
            </div>
          </div>
        </div>

        <hr className={style.about__divider} />

        {/* Leadership Section */}
        <div className={style.about__leaders}>
          <div className={style.leader}>
            <h3>Founder & CEO</h3>
            <strong>Pritesh Domadiya</strong>
            <p>
              With deep expertise in diamonds and customer experience,
              he has built D.S. Brothers on the foundation of honesty,
              precision and reliability. Under his leadership, the brand
              continues to deliver diamond brilliance and beautifully crafted
              jewellery that customers cherish for a lifetime.
            </p>
          </div>
        </div>

        <hr className={style.about__divider} />

        {/* Vision & Mission */}
        <h2>Vision</h2>
        <p>
          To become India’s most trusted source of exceptional diamonds
          while crafting fine jewellery that brings joy, meaning and celebration
          to every customer.
        </p>

        <h2>Mission</h2>
        <p>
          To deliver brilliance through innovation and craftsmanship —
          offering diamonds and jewellery that exceed expectations in
          beauty, precision and long-term value.
        </p>
      </div>
    </section>
  );
};

export default About;
