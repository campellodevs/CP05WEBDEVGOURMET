import styled from "styled-components";

export const HomeStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100%;
  position: relative;

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    z-index: -1; 
    
    video {
      width: 100%;
      height: 100%;
      object-fit: cover; 
      filter: brightness(0.5); 
    }
  }

  .content {
    width: 100%;
    max-width: 900px;
    padding: 15rem; 
    text-align: center;
    color: white;

    .chefe-container {
      background-color: rgba(255, 255, 255, 0.2); 
      border-radius: 15px; 
      padding: 1rem; 
      margin-bottom: 1.5rem; 
    }

    .chefe-image {
      width: 100%; 
      max-height: 300px; 
      object-fit: cover; 
      border-radius: 10px; 
    }

    h1 {
      font-size: 2.5rem; 
      margin-bottom: 1rem;
      animation: fadeIn 1.5s ease-in-out;
      text-shadow: 5px 1px 5px rgba(0, 0, 0, 0.7); 
    }

    p {
      font-size: 1.2rem; 
      margin-bottom: 2rem;
      animation: fadeIn 2s ease-in-out;
      color: white;
      text-shadow: 10px 1px 5px rgba(0, 0, 0, 0.7); 
    }

    .download-button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      color: white;
      background-color: #ff851b; 
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      animation: fadeIn 2.5s ease-in-out;

      &:hover {
        background-color: #f39c12; 
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem; 
    }

    h1 {
      font-size: 2rem; 
    }

    p {
      font-size: 1rem; 
    }

    .download-button {
      padding: 0.75rem 1.5rem; 
      font-size: 1rem; 
    }
  }

  @media (max-width: 480px) {
    .content {
      padding: 1rem; 
    }

    h1 {
      font-size: 1.8rem; 
    }

    p {
      font-size: 0.9rem; 
    }

    .download-button {
      padding: 0.5rem 1rem; 
      font-size: 0.9rem; 
    }
  }
`;
