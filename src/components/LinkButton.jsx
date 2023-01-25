import React from "react";
import styled from "styled-components";

const StyledLinkButton = styled.a`
  background-color: #56c16d;
  text-decoration: none;
  color: inherit;
  padding: 0.4rem 0.5rem;
  font-weight: 900;
  border-radius: 2px;
  min-width: 10%;
  text-align: center;

  margin-right: 2rem;

  &:hover {
    background-color: #63e27e;
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
