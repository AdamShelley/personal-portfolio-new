import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin-top: 1rem;
  margin-bottom: 5rem;

  ul {
    list-style: none;
    display: flex;
    --_gap: 2rem;
    height: 100%;
  }

  li {
    /* margin-right: 2rem; */
    padding: calc(var(--_gap) / 2);
    position: relative;
    overflow: hidden;
  }

  // The green block on active link/hovered link
  li::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: green;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    pointer-events: none;

    translate: var(--_translate, 0);
    scale: var(--_width, 0) 1;
    transition: scale 300ms var(--_scale-delay, 0ms),
      translate 500ms var(--_translate-delay, 0ms);
  }

  @supports selector(:has(h1)) {
    // Styling for the movement to the right
    li:hover + li {
      --_translate: -100%;
      --_scale-delay: 300ms;
      --_translate-delay: 200ms;
    }

    // styling for the movement to the left
    li:has(+ :hover) {
      --_translate: 100%;
      --_scale-delay: 300ms;
      --_translate-delay: 200ms;
    }

    // Styling for the active link
    li:has(a.active) {
      --_width: 1;
      font-weight: 400;
      color: #fff;
    }

    // On hover of any link, show green block on active link
    li:has(a.active)::after {
      --_width: 1;
      color: #fff;
    }
    // On hover of any link, remove green block from active link if not active
    ul:hover li:has(a.active)::after {
      --_width: 0;
    }

    //On hover of any link, show green block on hovered link
    li:hover::after {
      --_width: 1;
      color: #fff;
    }

    // If the active link is hovered, apply the green style
    li:has(a.active:hover)::after {
      --_width: 1 !important;
      color: #fff;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 1rem;
    border: 1px solid transparent;
    position: relative;
    z-index: 1;

    &.pending {
      color: orange;
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

        &::after {
          display: none;
        }
      }

      a {
        padding: 0.5rem;
      }

      a.active {
        border: none;
        color: #56c16d;
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
