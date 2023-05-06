import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin-top: 1rem;
  margin-bottom: 5rem;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      color: #ccc;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ccc;

    ul {
      align-items: space-between;
      justify-content: space-between;
      width: 100%;

      li {
        margin: 0;
        font-size: 1.2rem;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
