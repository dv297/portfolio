/**
 * @license
 * Copyright &copy 2018 Cerner Corporation
 *
 * @author Daniel Vu
 */

import React from 'react'

import './ContactForm.css'

const ContactForm = props => {
  return (
    <form
      className="contact-form"
      {...props}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label style={{ display: 'none' }}>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" className="contact-form-input" />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        className="contact-form-input"
      />
      <label htmlFor="comment">Comment:</label>
      <textarea
        rows="4"
        cols="50"
        id="comment"
        className="contact-form-input"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
