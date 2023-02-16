import React, { useEffect } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const StyledContact = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;

  h3 {
    font-size: 2rem;
  }

  p {
    margin-top: 8rem;
    font-size: 1.2rem;
    line-height: 2;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    h2 {
      font-size: 2rem;

    }
    
    p {
      margin-top: 5rem;
    }
  }
`;

const Contact = () => {
  useEffect(() => {
    document.title = "{Adam Shelley - Contact}";
  }, []);

  return (
    <StyledContact>
      <div>
        <h2>Contact</h2>
        <p>If you want to get a contact, please use the following form.</p>
      </div>
      <ContactForm />
    </StyledContact>
  );
};

export default Contact;
