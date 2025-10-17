import React from "react";
import style from "../style/About.module.css";

const About = () => {
  return (
    <section className={style.about}>
      <div className={style.about__container}>
        <h1 className={style.about__title}>About us</h1>
        <hr className={style.about__divider} />

        <div className={style.about__intro}>
          <p className={style.about__text}>
            At D.S brothers, we believe in the power of jewelry to tell stories and create connections. Our journey began with a simple idea: to craft pieces that resonate with the heart and soul of our customers. With a commitment to quality and a passion for design, we have grown into a brand that embodies elegance and authenticity.
          </p>

          <div className={style.about__imageWrap}>
            <img
              src="/Photos/visitingcard.jpeg"
              alt="D.S brothers visiting card"
              className={style.about__image}
            />
          </div>
        </div>
        <h2>Vision</h2>
        <p>
          To understand and delight the world, translating everyone’s dream and personality into fine Indian jewellery, and spread the happiness from it to all.
        </p>
        <h2>Mission</h2>
        <p>
          To give every customer much more than what he/she asks for in terms of quality, selection, value for money and customer service, by understanding local tastes and preferences and innovating constantly to eventually provide an unmatched experience in Indian jewellery shopping.
        </p>
        <hr className={style.about__divider} />
        <div className={style.about__leaders}>
          <div className={style.leader}>
            <h3>Surat Branch Head</h3>
            <strong>Pritesh Domadiya</strong>
            <p>
              Founder & CEO of D.S brothers, brings a passion for timeless design and fine craftsmanship to the world of jewelry. With a background in design and business, he built the brand to blend tradition with modern elegance. Under his leadership, D.S brothers has become a trusted name for customers seeking quality, creativity, and meaning in every piece.
            </p>
          </div>
          <hr className={style.about__divider} />
          <div className={style.leader}>
            <h3>Mumbai Branch Head</h3>
            <strong>Jenish Domadiya</strong>
            <p>
              Co-founder & COO of D.S brothers, brings a wealth of experience in operations and customer service to the jewelry industry. With a keen eye for detail and a commitment to excellence, he ensures that every piece meets the highest standards. His dedication to building strong relationships with customers and suppliers has been instrumental in the brand's success and growth.
            </p>
          </div>
          {/* <hr className={style.about__divider} />
          <div className={style.leader}>
            <h3>Owners and faunders</h3>
            <strong>Dineshbhai Domadiya, Hasmukhbhai Domadiya, Lalabhai Domadiya & Jatinbhai Domadiya</strong>
            <p>
              Co-founder & COO of D.S brothers, brings a wealth of experience in operations and customer service to the jewelry industry. With a keen eye for detail and a commitment to excellence, he ensures that every piece meets the highest standards. His dedication to building strong relationships with customers and suppliers has been instrumental in the brand's success and growth.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;