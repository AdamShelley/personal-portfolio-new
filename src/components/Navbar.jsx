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