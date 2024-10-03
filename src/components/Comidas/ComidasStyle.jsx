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

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 3rem 1.5rem; /* Reduced padding for tablets */
    
    .filters {
      flex-direction: column; /* Stack filters vertically on smaller screens */
      align-items: stretch; /* Make filters take full width */
      
      input {
        margin-right: 0; /* Remove right margin */
        margin-bottom: 1rem; /* Add bottom margin for spacing */
      }
    }

    .section {
      padding: 1.5rem; /* Reduced padding for the section */
    }

    .cards-container {
      gap: 1.5rem; /* Reduced gap for cards */
    }

    .card {
      h2 {
        font-size: 1.25rem; /* Reduced font size for h2 */
      }

      p {
        font-size: 0.9rem; /* Reduced font size for paragraph */
      }

      span {
        font-size: 1rem; /* Reduced font size for span */
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; /* Further reduced padding for mobile */
    
    .filters {
      input, select {
        font-size: 0.9rem; /* Smaller font size for inputs/selects */
      }
    }

    .cards-container {
      grid-template-columns: 1fr; /* Stack cards in a single column */
    }

    .card {
      h2 {
        font-size: 1.1rem; /* Further reduced font size for h2 */
      }

      p {
        font-size: 0.8rem; /* Further reduced font size for paragraph */
      }

      span {
        font-size: 0.9rem; /* Further reduced font size for span */
      }
    }
  }
`;
