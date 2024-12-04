import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have any questions? We would love to hear from you. Please fill
            out the form on the right, and we’ll get back to you as soon as
            possible.
          </p>

          <div className="contact-details">
            <p><i className="fas fa-phone-alt"></i> 7066768452</p>
            <p><i className="fas fa-envelope"></i> keshavbarkule1997@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Bansilal nagar Chatrapati Sambhajinagar</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit"><i className="fas fa-paper-plane"></i> Submit</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
