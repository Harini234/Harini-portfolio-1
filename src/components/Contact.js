// src/components/Contact.js
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1>Get In Touch</h1>
      <p>
      I’m always excited to explore new opportunities and engage in meaningful conversations. Whether you're considering a collaboration, have inquiries about my work, or simply want to connect, feel free to reach out. I look forward to hearing from you and building something great together!
      </p>
      <form
        action="mailto:viswanathantm1970@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" class="btn">
          Shoot the Message!
        </button>
      </form>
    </div>
  );
}

export default Contact;
