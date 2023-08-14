import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.section`
  flex-grow: 1;
  margin-top: 6rem;

  h1 {
    font-size: 3rem;
    letter-spacing: 0.05rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    line-height: 1.6;
  }

  p:last-of-type {
    font-size: 1.5rem;
    color: #d9d4d4;
  }

  a {
    color: #ccc;
    font-weight: 900;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    border-bottom: 2px solid green;

    &:hover {
      color: green;
    }
  }

  @media screen and (max-width: 800px) {
    width: 85vw;

    h1 {
      font-size: 2.5rem;
      white-space: nowrap;
    }

    p {
      margin-top: 3rem;
      font-size: 1.5rem;
      line-height: 1.8;
    }
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Adam Shelley | Home";
  }, []);
  return (
    <HomeContainer>
      <h1>Hey! I'm Adam.</h1>
      <p>Web Developer</p>
      <p>
        Take a look at my <Link to="/projects">projects</Link> or
        <Link to="/contact">contact me. </Link>
      </p>
    </HomeContainer>
  );
};

export default Home;
