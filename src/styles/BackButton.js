import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackButton = styled(Link)`
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  background-color: #1a1a1a;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    font-weight: 900;
    color: #eee;
  }

  &:focus {
    outline: 3px solid green;
    background: green;
  }

  @media screen and (max-width: 800px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #f8f8f8;
    color: #1a1a1a;
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 10;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &:hover {
      background-color: #e6e6e6;
    }

    & > svg {
      font-size: 1.5rem;
    }
  }
`;
