import styled from "styled-components";

export const Carousel = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    /* width: 50%; */
    height: 100%;
    object-fit: cover;
    -webkit-appearance: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 1rem;
    /* width: 100%; */
    max-width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    margin-right: 0 !important;
    border-radius: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: none !important;
    }
  }
`;
