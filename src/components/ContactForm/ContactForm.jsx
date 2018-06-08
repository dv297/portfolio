/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react';

import './ContactForm.css';

const ContactForm = (props) => {
  return (
    <form className="contact-form" {...props} netlify-honeypot="bot-field">
      <p className="contact-form-hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" className="contact-form-input" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" className="contact-form-input" />
      <label htmlFor="comment">Comment:</label>
      <textarea rows="4" cols="50" name="comment" className="contact-form-input" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
