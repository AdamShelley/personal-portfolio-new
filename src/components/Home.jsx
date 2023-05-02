import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.section`
  flex-grow: 1;
  margin-top: 6rem;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
  }

  p:last-of-type {
    font-size: 1.5rem;
    color: #d9d4d4;
  }

  a {
    color: #ccc;
    background-color: green;
    font-weight: 900;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 20px #00000090;

    &:hover {
      background-color: #11ff003f;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      white-space: nowrap;
    }

    p {
      margin-top: 3rem;
      line-height: 2.2;
    }
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "{Adam Shelley}";
  }, []);
  return (
    <HomeContainer>
      <h1>Hey! I'm Adam.</h1>
      <p>Web Developer</p>
      <p>
        Take a look at my <Link to="/projects">projects</Link> or{" "}
        <Link to="/contact">contact me.</Link>
      </p>
    </HomeContainer>
  );
};

export default Home;
