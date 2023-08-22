import { ParagraphStyles } from "../../styles/styles";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

import { patches } from "./patches";
import { GoToTopStyles } from "../../styles/styles";

const SummaryStyles = styled.summary`
  list-style: none;
  cursor: pointer;
  outline: none;
  color: #333;
  display: flex;
  margin-top: 1rem;
  align-items: center;

  /* Hide default */
  &::-webkit-details-marker {
    display: none;
  }

  /* Add new arrow */
  &::before {
    content: "";
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
    transition: all 250ms ease-in-out;
    width: 0;
    height: 0;
    border-left: 8px solid black;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    vertical-align: middle;
  }

  &:focus p {
    outline: 3px solid green;
    background: green;
    color: white;
  }

  p {
    font-weight: 900;
  }

  details[open] &::before {
    transform: rotate(90deg);
  }

  @media screen and (max-width: 800px) {
    color: ${(props) => props.theme.text};

    &::before {
      border-left: 8px solid ${(props) => props.theme.text};
    }
  }
`;

const DetailsStyles = styled.details`
  margin-top: 1rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.text};

  ul {
    list-style: square;
  }

  ul li {
    margin: 1rem;
    margin-top: 0.4rem;
    color: black;
    text-align: justify;
    font-weight: 100;
    line-height: 1.8;
  }

  @media screen and (max-width: 800px) {
    color: ${(props) => props.theme.text};
    margin-left: 0;

    ul {
      margin: 0 1rem !important;
    }

    ul li {
      margin-left: 0;
      color: ${(props) => props.theme.text};
    }
  }
`;

const PatchNotes = () => (
  <>
    <ParagraphStyles>
      <span id="patch-notes">Patch Notes</span>

      {/*LATEST PATCH */}
      <p
        style={{
          fontStyle: "italic",
        }}
      >
        Last Updated: {patches[0].date}
      </p>

      <p style={{ fontWeight: 900, marginTop: "1rem" }}>{patches[0].version}</p>
      <ul style={{ margin: "0 1rem" }}>
        {patches[0].changes.map((change) => (
          <li
            style={{
              marginRight: "1rem",
            }}
            key={change}
          >
            {change}
          </li>
        ))}
      </ul>
    </ParagraphStyles>

    {/* Loop over all patches except first  */}
    {patches.slice(1).map((patch) => (
      <DetailsStyles key={patch.version}>
        <SummaryStyles>
          <p>{patch.version}</p>
        </SummaryStyles>
        <ul>
          {patch.changes.map((change) => (
            <li key={change}>{change}</li>
          ))}
        </ul>
      </DetailsStyles>
    ))}

    <GoToTopStyles to="#top" smooth>
      <AiOutlineArrowUp /> Go to top
    </GoToTopStyles>
  </>
);

export default PatchNotes;
