import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3rem 0rem;
  margin-top: 10rem;

  ul {
    list-style: none;
  }

  p {
    margin-top: 0.8rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #ccc;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 5rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            href="https://github.com/AdamShelley"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <p>Adam Shelley 2023</p>
    </StyledFooter>
  );
};

export default Footer;
