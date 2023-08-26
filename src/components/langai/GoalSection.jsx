import styled from "styled-components";

import { ParagraphStyles, BoldText } from "../../styles/styles";

const GoalItemStyles = styled.ul`
  list-style: none;
  margin-bottom: 1rem;

  li {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    color: ${(props) => props.theme.text};
    font-size: 0.9rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  svg {
    margin-right: 10px;
    min-width: 30px;
    min-height: 30px;
    margin-right: 1rem;
    color: #1a1a1a;
  }

  @media screen and (min-width: 1024px) and (max-width: 1420px) {
    li {
      font-size: 0.85rem;
      width: auto;

      /* justify-content: space-between; */
    }
  }

  @media screen and (max-width: 1023px) {
    margin: 0 1rem;

    li {
      display: inline;
    }

    li svg {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    margin: 0;

    li {
      color: "#eee";
      margin-left: 0;
      margin-top: 1rem !important;

      > p {
        margin-top: 0.3rem;
        color: ${(props) => (props.theme.name === "dark" ? "#ccc" : "#666")};
      }
    }
  }
`;

const GoalSection = () => {
  return (
    <ParagraphStyles>
      <span id="goals">Goals for the app:</span>
      <GoalItemStyles>
        <li>
          <BoldText>Story Creation: </BoldText>
          <p>
            Designed to craft engaging stories tailored to different profiency
            levels and with different genres.
          </p>
        </li>
        <li>
          <BoldText>AI Integration: </BoldText>
          <p>
            It should utilize AI to generate the stories and the cover pictures
            for them.
          </p>
        </li>
        <li>
          <BoldText>UX: </BoldText>
          <p>It should feel easy and comfortable to use.</p>
        </li>

        <li>
          <BoldText>Cost Effective: </BoldText>
          <p>
            Mindful of expenses related to AI APIs, utilizing Databases
            economically.
          </p>
        </li>
        <li>
          <BoldText>Interactivity: </BoldText>
          <p>
            Giving the users the ability to vote on which direction the story
            should go, adding an interactive story aspect.
          </p>
        </li>
        <li>
          <BoldText>Multilingual Potential: </BoldText>
          <p>
            Currently the focus is on Chinese but this app could be modified to
            include other languages too.
          </p>
        </li>
      </GoalItemStyles>
    </ParagraphStyles>
  );
};

export default GoalSection;
