import styled from "styled-components";
import { ParagraphStyles } from "../../styles/styles";

const TechStackStyles = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto;

  li {
    margin-top: 2rem !important;
    text-align: center;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    li {
      display: inline;
    }
  }
`;

const TechStack = () => (
  <ParagraphStyles>
    <span id="tech">Tech & API's</span>
    <TechStackStyles>
      <li>
        <h3>Frontend</h3> React Native with Expo GO
      </li>
      <li>
        <h3>Backend</h3> NodeJS (Express)
      </li>
      <li>
        <h3>Database</h3> Supabase
      </li>
      <li>
        <h3>Story AI</h3> OpenAI GPT
      </li>
      <li>
        <h3>Image Creation</h3> DALL-E
      </li>
      <li>
        <h3>Translations</h3> DeepL API
      </li>
    </TechStackStyles>
  </ParagraphStyles>
);

export default TechStack;
