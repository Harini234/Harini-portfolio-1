// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Harini Viswanathan</p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/harini-viswanathan01/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in">
              <img
                src={`${process.env.PUBLIC_URL}/images/icons8-linkedin-48.png`}
                alt="Linkedin"
              />
            </i>
          </a>
          <a
            href="https://github.com/Harini234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github">
              <img
                src={`${process.env.PUBLIC_URL}/images/icons8-github-48.png`}
                alt="Github"
              />
            </i>
          </a>
          <a
            href="mailto:viswanathantm1970@gmail.com"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fas fa-envelope">
              <img
                src={`${process.env.PUBLIC_URL}/images/icons8-mail-48.png`}
                alt="Gmail"
              />
            </i>
          </a>

        </div>
        <p>Connect with me and let's work together!</p>
        <p>
          <a href="#contact" className="footer-link">
            Contact Me
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
