import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:akulrajeevan8@gmail.com">akulrajeevan8@gmail.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/akulrajeevan/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/b_chase18/" target="_blank" rel="noopener noreferrer">Instagram Profile</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/FlameBuster" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      </p>
    </section>
  );
};

export default Contact;
