import styled from "styled-components";

export const ApresentacaoStyle = styled.section`
  background-color: #fff9f2;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  h1 {
    font-size: 3rem;
    color: #ff6347;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin: 1.5rem 0;
      font-size: 1.2rem;
      color: #444;
      display: flex;
      align-items: center;
      gap: 1rem;
      
      strong {
        color: #ff6347;
        font-weight: 600;
      }

      svg {
        font-size: 1.8rem;
        color: #ff6347;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }

    li {
      font-size: 1rem;
    }
  }
`;
