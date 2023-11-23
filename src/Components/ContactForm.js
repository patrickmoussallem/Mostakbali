import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './ContactForm.css';

export default function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgaiump",
        "template_f2g8jrg",
        form.current,
        "lQ1BFGc62BB7nVgyL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };





  
  return (
    <div id="contact-us-form">
      <div className="contact-us-form">
        <h3>Contact Us</h3>
        <form ref={form} onSubmit={sendEmail}>
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
