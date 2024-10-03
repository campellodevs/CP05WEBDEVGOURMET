import { ContactStyle } from '../Contact/ContactStyle';

const Contact = () => {
  return (
    <ContactStyle>
      <div className="container">
        <h2>Contato</h2>
        <p>Fale conosco ou inscreva-se para receber novidades!</p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" rows="4" required></textarea>
          </div>

          <div className="newsletter">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">Inscreva-se para novidades!</label>
          </div>

          <button type="submit">Enviar</button>
        </form>

        <div className="contact-info">
          <h3>Informações de Contato</h3>
          <p>Endereço: Rua Aleatória, 123 - São Paulo, SP</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;
