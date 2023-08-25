import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const ContentsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  position: fixed;
  top: 10%;
  left: ${(props) => (props.isSticky ? "5%" : "-50%")};
  transition: left 0.5s ease;
  z-index: 100;
  border-radius: 5px;
  padding: 1rem;
  background-color: transparent;

  min-width: 13rem;

  h3 {
    margin-top: 2rem;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
    padding-left: 1rem;
    color: ${(props) => props.theme.text};
  }

  li {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.text};
    font-weight: 500;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #ccc;
    }

    &:focus {
      outline: 3px solid green;
      background: green;
      color: white;
    }
  }

  .active a {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    border-radius: 5px;
    animation: push-in 0.5s ease-in-out;
  }

  @keyframes push-in {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.95);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media screen and (min-width: 2000px) {
    left: ${(props) => (props.isSticky ? "20%" : "-50%")};
  }

  @media screen and (max-width: 800px) {
    position: initial;
    padding: 0;

    ul {
      li {
        margin-left: 0;
        margin-top: 0.2rem;
      }
    }

    h3 {
      padding: 0;
    }

    a {
      color: ${(props) => props.theme.text};
      height: 1rem;
      width: auto;

      padding: 0;
      margin-right: 0.5rem;
      margin-top: 0.2rem;
    }
  }
`;

const Contents = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSelection, setActiveSelection] = useState(null);
  const sections = [
    "background",
    "goals",
    "download",
    "screenshots",
    "tech",
    "patch-notes",
  ];

  const handleFocus = (section) => {
    setIsSticky(true);
    setActiveSelection(section);
  };

  // Handle scroll events & contents selection/highlighting
  useEffect(() => {
    // Check for mobile
    if (window.innerWidth <= 800) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0.1);

      // Check if end of page to select 'patch notes' section
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        setActiveSelection(sections[sections.length - 1]);
        return;
      }
      let closestSectionId = null;
      let smallestDistance = Infinity;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        const distance = Math.abs(element.getBoundingClientRect().top);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSectionId = id;
        }
      });

      setActiveSelection(closestSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <ContentsStyles isSticky={isSticky}>
      <h3>Contents:</h3>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={section === activeSelection ? "active" : ""}
          >
            <HashLink
              smooth
              to={`#${section}`}
              onFocus={() => handleFocus(section)}
            >
              {section === "patch-notes"
                ? "Patch Notes"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </HashLink>
          </li>
        ))}
      </ul>
    </ContentsStyles>
  );
};

export default Contents;
