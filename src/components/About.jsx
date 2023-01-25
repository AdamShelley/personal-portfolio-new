import React, { useEffect } from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60vw;
  flex-grow: 1;
  


  p:first-of-type {
    margin-top: 10rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const About = () => {
  useEffect(() => {
    document.title = "{Adam Shelley - About}";
  }, []);
  return (
    <AboutContainer>
      <h2>About</h2>
      <p>
        Hi! My name is Adam and I am a developer from the UK 🇬🇧 currently living
        and working in Johor Bahru, Malaysia 🇲🇾.
      </p>

      <p>Open to opportunities.</p>
    </AboutContainer>
  );
};

export default About;
