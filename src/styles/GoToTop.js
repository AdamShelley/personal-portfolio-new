import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const GoToTopStyles = styled(HashLink)`
  color: #1a1a1a;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 2rem;
  font-weight: 900;

  &:hover {
    color: green;
  }

  &:focus {
    color: white;
    background: green;
    outline: 3px solid green;
  }

  svg {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    color: ${(props) => (props.theme.name === "dark" ? "white" : "black")};
    margin-left: 0rem;
  }
`;
