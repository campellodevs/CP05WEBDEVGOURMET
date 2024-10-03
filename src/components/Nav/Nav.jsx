import React, { useEffect, useState } from 'react';
import { NavStyle } from './NavStyle';
import { Link } from 'react-scroll';
import logo from '../../assets/logopepperjelly.png';

const HamburgerIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30">
    <line x1="5" y1="7" x2="25" y2="7" stroke="white" strokeWidth="3" />
    <line x1="5" y1="15" x2="25" y2="15" stroke="white" strokeWidth="3" />
    <line x1="5" y1="23" x2="25" y2="23" stroke="white" strokeWidth="3" />
  </svg>
);

const CloseIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30">
    <line x1="5" y1="5" x2="25" y2="25" stroke="white" strokeWidth="3" />
    <line x1="25" y1="5" x2="5" y2="25" stroke="white" strokeWidth="3" />
  </svg>
);

const Nav = () => {
  const [opacity, setOpacity] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // State to control the menu open/close

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(1 - scrollY / 200, 0.7);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavStyle 
      style={{
        opacity, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        transition: 'opacity 0.3s ease',
        backgroundColor: `rgba(255, 133, 27, ${opacity})`,
        pointerEvents: 'auto',
        zIndex: 10
      }}
    >
      <img src={logo} alt="Logo Pepper Jelly" />
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />} {/* Use icons for the menu */}
      </div>
      <ul className={isOpen ? 'open' : ''}>
        <li>
          <Link to="content-home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>Sobre</Link>
        </li>
        <li>
          <Link to="menu" smooth={true} duration={500}>Menu</Link>
        </li>
        <li>
          <Link to="depoimentos" smooth={true} duration={500}>Depoimentos</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contato</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
