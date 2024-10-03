import { DepoimentosStyle } from './DepoimentosStyle';
import { FaStar } from 'react-icons/fa';

const depoimentosData = [
  {
    nome: "João Silva",
    comentario: "A comida é maravilhosa e o atendimento impecável! Volto sempre.",
    estrelas: 5,
  },
  {
    nome: "Maria Oliveira",
    comentario: "Uma experiência incrível! O fettuccine ao pesto é o meu favorito.",
    estrelas: 4,
  },
  {
    nome: "Carlos Santos",
    comentario: "Ambiente acolhedor e pratos deliciosos. Recomendo!",
    estrelas: 5,
  },
  {
    nome: "Ana Paula",
    comentario: "Bom atendimento, mas o tempo de espera foi um pouco longo.",
    estrelas: 5,
  },
  {
    nome: "Ricardo Gomes",
    comentario: "O melhor lugar para comer massas! Nunca me decepcionou.",
    estrelas: 5,
  },
  {
    nome: "Gabriel Mello",
    comentario: "Melhor macarrão de SP! Podem confiar.",
    estrelas: 5,
  },
];

const Depoimentos = () => {
  return (
    <DepoimentosStyle>
      <h2>Depoimentos de Clientes Satisfeitos</h2>
      <div className="depoimentos-container">
        {depoimentosData.map((depoimento, index) => (
          <div className="depoimento" key={index}>
            <h3>{depoimento.nome}</h3>
            <p>{depoimento.comentario}</p>
            <div className="estrelas">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < depoimento.estrelas ? "#ff6347" : "#ddd"} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </DepoimentosStyle>
  );
};

export default Depoimentos;
