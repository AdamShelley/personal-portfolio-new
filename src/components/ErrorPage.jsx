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
    font-size: 1.5rem;
    color: inherit;
  }
`;

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <StyledErrorPage>
      <h2>404 - Not found!</h2>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to="/">Go back home!</Link>
    </StyledErrorPage>
  );
};

export default ErrorPage;
