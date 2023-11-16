import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <div id="contact-us-form">
      <div className="contact-us-form">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" id="name" placeholder="Your name.." />

          <label htmlFor="email">Your email:</label>
          <input type="email" name="email" id="email" placeholder="Your email.." />

          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" id="subject" placeholder="Subject.." />

          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" placeholder="Your message.."></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
