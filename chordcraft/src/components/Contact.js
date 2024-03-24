import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="title">Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input type="text" id="name" className="input" />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input type="email" id="email" className="input" />

        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" className="textarea"></textarea>

        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;