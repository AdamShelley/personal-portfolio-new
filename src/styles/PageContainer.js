import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 60vw;

  > div {
    /* margin: 4rem 0rem; */
    background-color: ${(props) => props.theme.projectBackground};
    border: 2px solid ${(props) => props.theme.text};
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 30px;
    color: #1a1a1a;

    h2 {
      margin-top: 4rem;
      line-height: 1.5;
    }

    > ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 2rem;
    }
  }

  h2 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1700px) {
    width: 50vw;
  }

  @media screen and (min-width: 1900px) {
    width: 40vw;
  }

  @media screen and (max-width: 800px) {
    width: 105%;

    > div {
      margin-top: 0;
      background-color: ${(props) => props.theme.body} !important;
      border: 2px solid transparent !important;
      color: ${(props) => props.theme.text};
      padding: 1rem;
      z-index: 5;

      img {
        max-height: 80vh;
        border: none !important;
      }

      h2 {
        margin-top: 0;
        font-size: 2.5rem;
        margin-bottom: 0rem;
        color: ${(props) => props.theme.text};
      }

      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        /* width: 100%; */
      }

      .wip-set {
        justify-content: flex-start;
        align-items: flex-start;
      }
    }

    h2 {
      font-size: 2rem;
    }
  }
`;
