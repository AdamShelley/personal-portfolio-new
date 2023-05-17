import React from "react";
import { NavLink } from "react-router-dom";
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
    padding: 1rem;
    border: 1px solid transparent;

    &:hover {
      color: #ccc;
    }

    &.pending {
      color: orange;
    }

    &.active {
      color: #56c16d;
      border: 1px solid #56c16d;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;

    ul {
      align-items: space-between;
      justify-content: space-between;
      width: 100%;

      li {
        margin: 0;
        font-size: 1.2rem;
      }
      a {
        padding: 0.5rem;
      }

      a.active {
        border: none;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
