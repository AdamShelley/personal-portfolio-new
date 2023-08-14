import React from "react";
import { Link, useRouteError } from "react-router-dom";

import styled from "styled-components";

const StyledErrorPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-grow: 1;

  h2 {
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;
  }

  a {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #f6cd5d;
    text-decoration: none;
  }
`;

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <StyledErrorPage>
      <h2>How did you even get here?!</h2>
      <p> </p>

      <Link to="/">Go back home!</Link>
      <Link to="/projects">Or take a look at my projects.</Link>
      <Link to="/contact">Or contact me.</Link>
    </StyledErrorPage>
  );
};

export default ErrorPage;
