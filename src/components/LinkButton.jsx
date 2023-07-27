import React from "react";
import styled from "styled-components";

const StyledLinkButton = styled.a`
  background-color: #101111;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  font-weight: 500;
  border-radius: 3px;
  min-width: 10%;
  text-align: center;
  color: #fff;
  font-size: 0.9rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #56c16d;
    color: #000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 800px) {
  }
`;

const LinkButton = ({ name, link }) => {
  return (
    <StyledLinkButton href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </StyledLinkButton>
  );
};

export default LinkButton;
