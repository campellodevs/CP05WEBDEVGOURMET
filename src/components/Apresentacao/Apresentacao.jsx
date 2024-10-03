import { ApresentacaoStyle } from './ApresentacaoStyle';
import { FaMotorcycle, FaCreditCard } from 'react-icons/fa';
import { GiFoodTruck } from 'react-icons/gi';

const Apresentacao = () => {
  return (
    <ApresentacaoStyle>
      <div className="content">
        <h1>Bem-vindo ao Pepper Jelly</h1>
        <p>Descubra os benefícios de usar nosso app:</p>
        <ul>
          <li>
            <FaMotorcycle /> <strong>Entrega Rápida:</strong> Receba suas refeições favoritas diretamente na sua porta em pouco tempo!
          </li>
          <li>
            <GiFoodTruck /> <strong>Variedade de Restaurantes:</strong> Escolha entre uma ampla seleção de restaurantes e culinárias para satisfazer qualquer desejo.
          </li>
          <li>
            <FaCreditCard /> <strong>Pagamento Fácil:</strong> Pague com apenas alguns toques usando nossas opções de pagamento seguras e convenientes.
          </li>
        </ul>
      </div>
    </ApresentacaoStyle>
  );
};

export default Apresentacao;
