import styled from "styled-components";

export const DepoimentosStyle = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    color: #333;
  }

  .depoimentos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }

  .depoimento {
    background-color: #fffbf5;
    border: 1px solid #ff6347;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    h3 {
      margin: 0.5rem 0;
      color: #333;
    }

    p {
      color: #666;
      margin: 0.5rem 0 1rem;
    }

    .estrelas {
      display: flex;
      justify-content: center;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
