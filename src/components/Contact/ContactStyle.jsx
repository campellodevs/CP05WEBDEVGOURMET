import styled from "styled-components";

export const ContactStyle = styled.section`
  background-color: white;
  color: #333;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  border: 4px solid #ff851b;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  h2 {
    color: #ff851b;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1rem;
  }

  .form-group {
    width: 100%;
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      font-size: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;

      &:focus {
        border-color: #ff851b;
        outline: none;
      }
    }

    textarea {
      resize: none;
    }
  }

  .newsletter {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    input {
      margin-right: 0.5rem;
    }
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #ff851b;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f39c12;
    }
  }

  .contact-info {
    margin-top: 2rem;
    text-align: center;

    h3 {
      margin-bottom: 0.5rem;
      color: #ff851b;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.95rem;
    }

    .form-group label {
      font-size: 0.95rem;
    }

    button {
      padding: 0.5rem 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.85rem;
    }

    .form-group label {
      font-size: 0.85rem;
    }

    input,
    textarea {
      padding: 0.4rem;
    }

    button {
      padding: 0.5rem 0.75rem;
      font-size: 0.9rem;
    }
  }
`;
