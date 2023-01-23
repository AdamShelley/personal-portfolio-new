import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3rem 0rem;

  ul {
    list-style: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>github</li>
      </ul>
      <p>Adam Shelley 2023</p>
    </StyledFooter>
  );
};

export default Footer;
