import styled from "styled-components";

export const ParagraphStyles = styled.div`
  line-height: 1.5;

  #background {
    margin-top: 2rem;
  }

  &.top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;

    > div:first-child {
      width: 60%;
    }

    .top-section-image {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: 2rem;
      width: 40%;
      height: 90%;
      max-width: 100%;

      > video {
        cursor: default;
      }
    }

    .langai-source {
      display: block;
      margin-top: 1rem;
      color: #323232;
      font-weight: 400;

      &:hover {
        color: #888;
      }
    }
  }

  .mt-2 {
    margin-top: 1rem;
  }

  /* &:first-of-type {
    margin-top: 5rem;
  } */

  ul {
    margin-top: 1rem;
    list-style-type: square;

    li {
      line-height: 1.5;
      margin-left: 1rem;
      text-align: left;
      font-weight: 400;
      color: #323232;
    }
  }

  span {
    display: block;
    font-size: 1.2rem;
    background-color: #2a2a2a;
    color: #eee;
    margin-right: 0.5rem;
    padding: 0.4rem;
    border-radius: 5px;
    width: 100%;
    margin: 1rem 0rem;
    padding-left: 0.5rem;
  }

  h3 {
  }

  > p {
    font-weight: 300;
    color: #323232;
    line-height: 1.5;
  }

  @media screen and (max-width: 500px) {
    &.top-section {
      .top-section-image {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    line-height: 2;

    #why {
      margin-top: 2rem;
    }

    &.top-section {
      flex-direction: column;
      align-items: center;
      /* margin-top: 5rem; */
      /* margin-left: 0; */

      > div:first-child {
        width: 100%;
        text-align: left;
      }

      .top-section-image {
        /* width: 100%; */
        margin: 5rem 0;
        border-radius: 5px;
        justify-content: center;

        > img {
          border-radius: 15px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1) !important;
        }
      }

      .langai-source {
        color: ${(props) => props.theme.text};
      }
      text-align: center;
      margin-top: 0.5rem;
    }

    ul {
      /* width: 100%; */
      align-items: flex-start;

      li {
        margin-left: 0rem;
        color: ${(props) => props.theme.text};

        align-items: flex-start;
        margin-top: 0.5rem;
      }
    }

    span {
      margin-top: 2rem;
    }

    > p {
      margin-top: 0.5rem !important;
      margin-left: 0rem;
      color: ${(props) => props.theme.text};
    }
  }
`;
