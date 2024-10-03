import React, { useEffect, useState } from 'react';
import { NavStyle } from './NavStyle';
import { Link } from 'react-scroll'; // Importando o componente Link
import logo from '../../assets/logopepperjelly.png';

const Nav = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log('Scroll Y:', scrollY); // Verifique se o scroll está sendo detectado
    const newOpacity = Math.max(1 - scrollY / 200, 0.7); // Altere o mínimo para 0.7
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavStyle 
      style={{
        opacity, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        transition: 'opacity 0.3s ease',
        backgroundColor: `rgba(255, 133, 27, ${opacity})`, // Adicionando fundo com opacidade
        pointerEvents: 'auto', // Certifique-se de que o Nav receba eventos de ponteiro
        zIndex: 10 // Garantir que o nav fique acima de outros elementos
      }}
    >
      <img src={logo} alt="Logo Pepper Jelly"/>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
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
}

export default Nav;
