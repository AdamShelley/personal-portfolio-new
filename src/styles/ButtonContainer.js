import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0rem 0;
  /* margin-left: 0.5rem; */

  a {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    background-color: #333;
    border-radius: 5px;
    transform: translateY(0px);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-right: 0.5rem;
      font-size: 1.5rem;
    }

    &:hover {
      background-color: #56c16d;
      transform: translateY(-2px);
      cursor: pointer;
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: center;
    margin: 2rem 0;

    a {
      border: 1px solid #eee;
    }
  }
`;
