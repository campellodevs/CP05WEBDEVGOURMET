import styled from "styled-components";

export const ComidasStyle = styled.section`
  padding: 4rem 2rem;
  background-color: #fff9f2;
  font-family: 'Poppins', sans-serif;

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    input {
      flex: 1;
      padding: 0.75rem 1rem;
      margin-right: 1rem;
      border: 2px solid #ff6347;
      border-radius: 8px;
      font-size: 1rem;
      color: #333;
      transition: border-color 0.3s;

      &:focus {
        border-color: #ff4500;
        outline: none;
      }
    }

    select {
      padding: 0.75rem 1rem;
      border: 2px solid #ff6347;
      border-radius: 8px;
      font-size: 1rem;
      color: #333;
      background-color: #fff;
      transition: border-color 0.3s;

      &:focus {
        border-color: #ff4500;
        outline: none;
      }
    }
  }

  .section {
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    h2 {
      font-size: 1.5rem;
      color: #333;
      margin: 1rem 0;
    }

    p {
      font-size: 1rem;
      color: #666;
      padding: 0 1rem;
    }

    span {
      display: block;
      font-size: 1.25rem;
      color: #ff6347;
      margin: 1rem 0;
      text-align: center;
      font-weight: bold;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  h2 {
    color: black;
    margin-bottom: 1rem;
  }
`;
