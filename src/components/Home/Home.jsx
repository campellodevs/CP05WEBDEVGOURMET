import React from 'react';
import { HomeStyle } from "./HomeStyle"; 
import chefe from '../../assets/chefezao.jpg.jpeg'; 
import Apresentacao from "../Apresentacao/Apresentacao";
import Comidas from "../Comidas/Comidas";
import Contact from '../Contact/Contact';
import Depoimentos from '../Depoimentos/Depoimentos';

const Home = () => {
  return (
    <>
      <HomeStyle>
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="./src/assets/videocozinhando.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
        <div className="content">
          <div className="chefe-container">
            <img src={chefe} alt="Chefe de Cozinha" className="chefe-image" />
            <h1>Seja bem-vindo ao Pepper Jelly!</h1>
            <p>Desfrute de uma experiência gastronômica única com nosso app de delivery gourmet. Baixe agora e saboreie pratos incríveis no conforto da sua casa.</p>
          </div>
          <button className="download-button">Baixar App</button>
        </div>
      </HomeStyle>
      <div id="about">
        <Apresentacao />
      </div>
      <div id="menu">
        <Comidas />
      </div>
      <div id="depoimentos">
        <Depoimentos />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default Home;
