import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.section`
  flex-grow: 1;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  a {
    color: #ccc;
    background-color: green;
    font-weight: 900;
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "{Adam Shelley}";
  }, []);
  return (
    <HomeContainer>
      <h1>Hey! I'm Adam</h1>
      <p>Web Developer</p>
      <p>
        Take a look at my <Link to="/projects">projects</Link> or{" "}
        <Link to="/contact">contact me</Link>
      </p>
    </HomeContainer>
  );
};

export default Home;
