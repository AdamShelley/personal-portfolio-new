import styled from "styled-components";

export const ParagraphStyles = styled.div`
  margin: 2rem 0rem;
  line-height: 1.5;

  &.top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;

    .top-section-image {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: 5rem;
      width: 50%;
    }
  }

  .mt-2 {
    margin-top: 2rem;
  }

  &:first-of-type {
    margin-top: 5rem;
  }

  ul {
    margin-top: 1rem;
    list-style-type: square;

    li {
      line-height: 1.8;
      margin-left: 1rem;
      text-align: justify;
      font-weight: 100;
      color: inherit;
    }
  }

  span {
    display: block;
    font-size: 1.2rem;
    background-color: #1a1a1a;
    color: white;
    margin-right: 0.5rem;
    padding: 0.4rem;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  h3 {
  }

  > p {
    font-weight: 100;
    margin-left: 1rem;
  }

  .toplink {
    color: #1a1a1a;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    &:hover {
      color: green;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 800px) {
    line-height: 2;

    &.top-section {
      flex-direction: column;
      align-items: center;
      /* margin-top: 5rem; */
      /* margin-left: 0; */

      .top-section-image {
        width: 100%;
        margin: 5rem 0;
        border-radius: 5px;
        justify-content: center;

        > img {
          /* width: 100%; */
          border-radius: 5px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1) !important;
        }
      }
    }

    ul {
      /* width: 100%; */
      align-items: flex-start;

      li {
        margin-left: 0rem;
      }
    }

    span {
      background-color: #f8f8f8;
      color: #1a1a1a;
    }

    > p {
      margin-left: 0rem;
    }

    .toplink {
      color: #eee;
      margin-left: 0rem;
    }
  }
`;
