import React from "react";
import styled from "styled-components";

const StyledLinkButton = styled.a`
  background-color: #317873;

  text-decoration: none;
  padding: 0.6rem 1rem;
  font-weight: 900;
  border-radius: 3px;
  min-width: 10%;
  text-align: center;
  color: #fff;

  &:hover {
    background-color: #63e27e;
    color: #000;
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
