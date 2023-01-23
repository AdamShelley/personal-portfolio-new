import React, { useEffect } from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 5rem 0rem;
  width: 60vw;
  flex-grow: 1;

  header {
    align-self: flex-start;

    h1 {
      font-size: 3.5rem;
    }
  }

  p {
     margin-top: 1rem;
     font-size: 1rem;
  }
`;

const About = () => {

  useEffect(()=>{
    document.title = '{Adam Shelley - About}'
  }, [])
  return (
    <AboutContainer>
      {/* <header>
        <h1>Adam Shelley</h1>
      </header> */}
      <p>
        Hi! My name is Adam and I am a developer from the UK 🇬🇧 currently living
        and working in Johor Bahru, Malaysia 🇲🇾.
      </p>
    </AboutContainer>
  );
};

export default About;
