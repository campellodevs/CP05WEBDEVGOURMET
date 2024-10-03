import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #ff851b;
  color: white;
  padding: 1rem 0;
  text-align: center;
  
  p {
    margin: 0;
    font-size: 0.9rem;
  }

  .social-icons {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: #f1c40f; 
      }
    }
  }
`;
