import styled from "styled-components";

export const NavStyle = styled.nav`
  background-color: rgba(255, 133, 27, 1); /* Garantir que a cor de fundo padrão é opaca */
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10; /* Certifique-se de que o nav está acima de outros elementos */

  img {
    height: 100px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    cursor: pointer;

    li {
      a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        transition: color 0.3s ease;

        &:hover {
          color: #f1c40f;
        }
      }
    }
  }
`;
