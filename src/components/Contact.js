import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1pj0od",
        "template_46hv7dn",
        e.target,
        "user_DYfbzmH4UuXiGWj5bh1Ar"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="portfolio-contact">
      <h1>CONTACT ME!</h1>
      <form onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
