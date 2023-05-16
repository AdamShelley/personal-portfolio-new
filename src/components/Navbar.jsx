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

    &:hover {
      color: #ccc;
    }

    &.pending {
      color: orange;
    }

    &.active {
      color: green;
      border: 1px solid green;
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
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
