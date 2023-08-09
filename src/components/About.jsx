import React, { useEffect } from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: 
  width: 80vw;
  flex-grow: 1;
  text-align: justify-all;


  h2 {
    font-size: 2.4rem;
    font-weight: 500;
  
  }

  p:first-of-type {
    margin-top: 5rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7;
  }

  @media screen and (max-width: 800px) {
    width: 85vw;
    align-self: center;

    h2 {
      font-size: 2rem;
      /* margin-left: 0.5rem; */
      font-weight: 400;
    }

    p:first-of-type {
      margin-top: 5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const About = () => {
  useEffect(() => {
    document.title = "Adam Shelley - About";
  }, []);
  return (
    <AboutContainer>
      <h2>About</h2>
      <p>
        Hi! My name is Adam and I am a developer from the UK 🇬🇧 currently living
        and working in Singapore 🇸🇬.
      </p>

      <p>Open to opportunities.</p>
    </AboutContainer>
  );
};

export default About;
