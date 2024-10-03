import styled from "styled-components";

export const NavStyle = styled.nav`
  background-color: rgba(255, 133, 27, 1);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  img {
    height: 100px;
  }

  .hamburger {
    display: none; /* Hide by default */
    cursor: pointer;
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

  @media (max-width: 768px) {
    .hamburger {
      display: block; /* Show hamburger on mobile */
    }

    ul {
      display: none; /* Hide menu links by default */
      flex-direction: column; /* Stack links vertically */
      position: absolute; /* Position absolute */
      top: 70px; /* Adjust as needed */
      right: 0; /* Align to the right */
      background-color: rgba(255, 133, 27, 1); /* Match nav background */
      padding: 1rem; /* Add padding */
      border-radius: 8px; /* Rounded corners */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for dropdown */

      &.open {
        display: flex; /* Show links when open */
      }
    }
  }
`;
