import React, { useEffect, useState } from 'react';
import { ComidasStyle } from './ComidasStyle';
import nhoque from '../../assets/nhoque.png';
import penne from '../../assets/penne.png';
import fettuccine from '../../assets/fettuccine.png';
import spaghetti from '../../assets/spaghetti.jpg';
import penneArrabbiata from '../../assets/penne-arrabbiata.jpg';
import fettuccinePesto from '../../assets/fettuccine-pesto.webp';
import nhoqueQueijo from '../../assets/nhoque-queijo.jpeg';
import espagueteTomate from '../../assets/espaguete-tomate.jpg';
import penneCogumelos from '../../assets/penne-com-cogumelos.jpeg';
import fettuccineCamarões from '../../assets/fettuccine-camaroes.webp';

const comidasData = [
  {
    nome: "Nhoque à Sorrentina",
    descricao: "Nhoque de batata coberto com molho de tomate e queijo derretido.",
    foto: nhoque,
    preco: "R$ 35,00"
  },
  {
    nome: "Penne ao Molho Alfredo",
    descricao: "Penne cozido com um molho cremoso de queijo parmesão e manteiga.",
    foto: penne,
    preco: "R$ 30,00"
  },
  {
    nome: "Fettuccine à Bolonhesa",
    descricao: "Fettuccine servido com um rico molho de carne moída e tomate.",
    foto: fettuccine,
    preco: "R$ 40,00"
  },
  {
    nome: "Spaghetti Carbonara",
    descricao: "Espaguete fresco servido com um delicioso molho carbonara.",
    foto: spaghetti,
    preco: "R$ 32,00"
  },
  {
    nome: "Penne Arrabbiata",
    descricao: "Penne al dente em um molho picante de tomate e alho.",
    foto: penneArrabbiata,
    preco: "R$ 28,00"
  },
  {
    nome: "Fettuccine ao Pesto",
    descricao: "Fettuccine misturado com um molho pesto fresco de manjericão.",
    foto: fettuccinePesto,
    preco: "R$ 36,00"
  },
  {
    nome: "Nhoque ao Molho de Queijo",
    descricao: "Nhoque servido com um cremoso molho de queijos variados.",
    foto: nhoqueQueijo,
    preco: "R$ 38,00"
  },
  {
    nome: "Espaguete ao Molho de Tomate Fresco",
    descricao: "Espaguete servido com um molho de tomate fresco e manjericão.",
    foto: espagueteTomate,
    preco: "R$ 30,00"
  },
  {
    nome: "Penne com Cogumelos",
    descricao: "Penne refogado com cogumelos frescos e um toque de creme.",
    foto: penneCogumelos,
    preco: "R$ 34,00"
  },
  {
    nome: "Fettuccine com Camarões",
    descricao: "Fettuccine cozido com camarões suculentos em um molho de limão.",
    foto: fettuccineCamarões,
    preco: "R$ 45,00"
  },
];

const Comidas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [receitasData, setReceitasData] = useState([]); 

 
  const fetchReceitas = async () => {
    try {
      
      const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=204eba8158444c02b3df285a65eeb0c6&query=pasta&number=10');
      const data = await response.json();
      const receitas = data.results.map(receita => ({
        nome: receita.title,
        descricao: `Descrição de ${receita.title}`,
        foto: receita.image,
        preco: "R$ " + (Math.random() * (50 - 20) + 20).toFixed(2),
      }));
      setReceitasData(receitas);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    }
  };

  useEffect(() => {
    fetchReceitas(); 
  }, []);

  const filteredComidas = comidasData.filter(comida => {
    const matchesSearch = comida.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter ? parseFloat(comida.preco.replace('R$ ', '').replace(',', '.')) <= parseFloat(priceFilter) : true;
    return matchesSearch && matchesPrice;
  });

  return (
    <ComidasStyle>
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por comida..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">Filtrar por preço</option>
          <option value="30">R$ 30,00</option>
          <option value="35">R$ 35,00</option>
          <option value="40">R$ 40,00</option>
          <option value="45">R$ 45,00</option>
        </select>
      </div>
  
      <div className="section">
        <h2>Pratos Disponíveis</h2>
        <div className="cards-container">
          {filteredComidas.map((comida, index) => (
            <div className="card" key={index}>
              <img src={comida.foto} alt={comida.nome} />
              <h2>{comida.nome}</h2>
              <p>{comida.descricao}</p>
              <span>{comida.preco}</span>
            </div>
          ))}
        </div>
      </div>
  
      <div className="section">
        <h2>Receitas da API</h2>
        <div className="cards-container">
          {receitasData.map((receita, index) => (
            <div className="card" key={index}>
              <img src={receita.foto} alt={receita.nome} />
              <h2>{receita.nome}</h2>
              <p>{receita.descricao}</p>
              <span>{receita.preco}</span>
            </div>
          ))}
        </div>
      </div>
    </ComidasStyle>
  );
  
};

export default Comidas;
