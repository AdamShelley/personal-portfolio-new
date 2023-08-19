import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

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
    padding: calc(var(--_gap) / 2) 0;
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

  a {
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 1rem;
    border: 1px solid transparent;
    position: relative;
    z-index: 1;
    color: ${(props) => props.theme.navLinkText};

    &:hover {
      color: #eee;
    }

    &.active {
      color: #eee;
    }

    &.active:hover {
      color: #eee;
    }

    &:focus {
      background-color: green !important;
    }

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
    }

    // On hover of any link, show green block on active link
    li:has(a.active)::after {
      --_width: 1;
    }
    // On hover of any link, remove green block from active link if not active
    ul:hover li:has(a.active)::after {
      --_width: 0;
    }

    // When another link is hovered, change the text color back to original
    ul:hover li:has(a.active:not(:hover)) a {
      color: ${(props) => props.theme.navLinkText};
    }

    //On hover of any link, show green block on hovered link
    // And give it a white text
    li:hover::after {
      --_width: 1;
      color: #eee;
    }

    // If the active link is hovered, apply the green style
    li:has(a.active:hover)::after {
      --_width: 1 !important;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;
    

    ul {
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      li {
        margin: 0;
        font-size: 1rem;

        &::after {
          display: none;
        }
      }

      a {
        padding: 0.5rem;
        border: none;
        padding-bottom: 0.3rem;
        border-bottom: 2px solid transparent;
      }

      a.active {

        border: none;
        color: green !important;
        border-bottom: 2px solid green;
      }

      &.active:hover {
        color: ${(props) => props.theme.navLinkText}};
      }
    }
  }
`;

const StyledThemeToggler = styled.button`
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};
  margin-left: 2rem;
  width: 40px;
  height: 40px;
  transition: background-color 0.3s ease, transform: 0.2s ease;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: all 500ms ease;
    color: ${(props) => props.theme.body};
  }

  .fade-out.sun {
    transform: translateY(-50%) translateX(100%);
    opacity: 0;
  }

  .fade-out.moon {
    transform: translateY(-30%) translateX(100%);
    opacity: 0;
  }

  .fade-in.sun {
    transform: translateY(0);
    opacity: 1;
  }

  .fade-in.moon {
    transform: translateY(0);
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    align-self: center;
    padding: 0.5rem;
    width: 30px;
    height: 30px;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Navbar = ({ theme, themeToggler }) => {
  const [isToggling, setIsToggling] = useState(false);

  const handleThemeToggle = () => {
    setIsToggling(true);
    setTimeout(() => {
      themeToggler();
      setTimeout(() => {
        setIsToggling(false);
      }, 500);
    }, 500);
  };

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

        <StyledThemeToggler
          tabIndex="0"
          onClick={handleThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <BsFillSunFill
              // size={20}
              className={
                isToggling && theme === "dark"
                  ? "fade-out sun"
                  : !isToggling && theme !== "dark"
                  ? "fade-in sun"
                  : ""
              }
            />
          ) : (
            <BsFillMoonFill
              // size={20}
              className={
                isToggling && theme !== "dark"
                  ? "fade-out moon"
                  : !isToggling && theme === "dark"
                  ? "fade-in moon"
                  : ""
              }
            />
          )}
        </StyledThemeToggler>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
