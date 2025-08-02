import React, { useState } from 'react';
import '../style/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="container">
        <div className="info-section">
          <h2>Feel free to Contect</h2>
          <p>
            Got a question, proposal, or just want to say hello? I'd love to hear from you.
            Fill out the form and I’ll get back to you as soon as I can.
          </p>
          <div><img src="@" alt="" />+91 972793612</div><br />
          <div><img src="@" alt="" />jenish.domadiya@gmail.com</div> <br />
          <div><img src="@" alt="" />Surat, Gujrat, India</div><br />
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Your Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Your Email</label>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Contact

