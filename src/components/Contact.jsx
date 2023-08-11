import React, { useEffect } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  p {
    margin-top: 3rem;
    font-size: 1.2rem;
    line-height: 1.8;
    font-weight: 300;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 85vw;
    align-self: center;
    /* padding: 1rem; */

    h2 {
      font-size: 2rem;
      /* margin-left: 0.5rem; */
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      margin-top: 2.5rem;
    }
  }
`;

const Contact = () => {
  useEffect(() => {
    document.title = "Adam Shelley | Contact";
  }, []);

  return (
    <StyledContact>
      <div>
        <h2>Contact</h2>
        <p>
          If you would like to get in contact with me about anything - please
          use the following form.
        </p>
      </div>
      <ContactForm />
    </StyledContact>
  );
};

export default Contact;
