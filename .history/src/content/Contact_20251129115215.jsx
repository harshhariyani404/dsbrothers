import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../style/contact.css";

const SITE_URL = "https://dsbrothers.group";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic frontend validation already present; integrate with backend API when ready.
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact D.S. Brothers | Surat Jewelry Store</title>
        <meta name="description" content="Contact D.S. Brothers for custom jewelry orders, enquiries and service. Visit us in Surat or call +91-9727937612." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact D.S. Brothers | Surat Jewelry Store" />
        <meta property="og:description" content="Reach out for custom jewelry orders, bridal sets and repairs." />
      </Helmet>

      <div className="container">
        <div className="info-section">
          <h2>Contact</h2>
          <p>
            Got a question, proposal, or want a custom design? Fill the form and we'll respond quickly.
          </p>

          <div><strong>Phone:</strong> +91 8200429787</div>
          <div><strong>Phone:</strong> +91 9727937612</div>
          <div><strong>Email:</strong> dsbrotherssurat@gmail.com</div>
          <div><strong>Address:</strong> Surat, Gujarat, India</div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
          <div className="form-group">
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
            <label>Your Email</label>
          </div>

          <div className="form-group">
            <textarea name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
