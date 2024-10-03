import React from 'react';
import { FooterStyle } from "./FooterStyle";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
const Footer = () => {
  return (
    <FooterStyle>
      <p>&copy; {new Date().getFullYear()} Pepper Jelly Restaurante. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </FooterStyle>
  );
}

export default Footer;
