import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const ContentsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h3 {
    margin-top: 2rem;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  li {
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    color: #333;
    font-size: 0.9rem;
    /* margin-left: 0 !important; */
    margin-left: 0.5rem;
  }

  a {
    color: darkgreen;
    font-weight: 500;

    &:hover {
      color: green;
    }
  }

  @media screen and (max-width: 800px) {
    a {
      color: ${(props) => props.theme.text};
    }
  }
`;

const Contents = () => (
  <ContentsStyles>
    <h3>Contents:</h3>
    <ul>
      <li>
        <HashLink smooth to="#why">
          Why?
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="#goals">
          Goals
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="#download">
          Android Download
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="#screenshots">
          Screenshots
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="#tech">
          Tech & API's
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="#patch-notes">
          Patch Notes
        </HashLink>
      </li>
    </ul>
  </ContentsStyles>
);

export default Contents;
